import * as QNIM from 'qnweb-im';

/**
 * im操作回调
 */
export interface RtmCallBack {
	onSuccess?: (res?: any) => void;
	onFailure?: (error?: any) => void;
}

export type RtmManagerLister = (msg: string, peerId: string) => void;

export type InitConfig = QNIM.QNIMConfig & { maxInitCount?: number };

/**
 * 消息体
 */
interface Meta {
	/**
	 * 消息ID
	 */
	id?: string;
	/**
	 * 发送者
	 */
	from?: string;
	/**
	 * 接收者
	 */
	to?: string;
	/**
	 * 消息内容
	 */
	content?: string;
	/**
	 * 消息类型
	 *  text - 文本, image - 图片， audio - 语音, video - 视频，file - 文件, location - 位置， command - 命令, forward - 转发
	 */
	type?: string;
	/**
	 * 扩展字段
	 */
	ext?: string | Record<any, any>;
	/**
	 * SDK扩展字段
	 */
	config?: string | Record<any, any>;
	/**
	 * 附件信息
	 */
	attach?: string | Record<any, any>;
	/**
	 *  消息状态
	 * 0 - 未读, 1 - 已投递, 2 - 已读
	 */
	status?: number;
	/**
	 * 消息发送时间戳（毫秒）
	 */
	timestamp?: string;
	/**
	 * 接收者类型
	 * roster - 好友， group - 群组
	 */
	toType?: string;
}

export class QNIMManager {
	public im: any;
	public loginCallback?: RtmCallBack | null;
	public maxInitCount = 3;
	public initCount: number;
	public mRtmC2cListeners: RtmManagerLister[] = [];
	public mRtmChannelListeners: RtmManagerLister[] = [];
	/**
	 * 本地频道消息暂存队列
	 */
	public localChannelMessageTaskQueue: Array<{
		clientMId: number;
		callback?: RtmCallBack;
		isDispatchToLocal: boolean;
		msg: string;
		channelId: string;
	}> = [];
	/**
	 * 本地单聊消息暂存队列
	 */
	public localC2cMessageTaskQueue: Array<{
		clientMId: number;
		callback?: RtmCallBack;
		isDispatchToLocal: boolean;
		msg: string;
		peerId: string;
	}> = [];
	private joinChannelSuccessCallback: ((res?: any) => void) | undefined;
	private config: QNIM.QNIMConfig & { maxInitCount?: number } = {
		autoLogin: false,
		appid: '',
		ws: false
	};

	static create() {
		return new this();
	}

	constructor() {
		this.initCount = 0;
	}

	/**
	 * 设置监听
	 */
	private addListener() {
		this.im.on({
			imGroupJoined: (data: any) => {
				console.log('imGroupJoined', data);
				/**
				 * 聊天室加入成功
				 */
				if (this.joinChannelSuccessCallback) {
					console.log('imGroupJoined this.joinChannelSuccessCallback', data);
					this.joinChannelSuccessCallback(data);
				}
			},
			/**
			 * 收到群消息
			 * @param result
			 */
			onGroupMessage: (result: QNIM.IGroupMessage) => {
				console.log('onGroupMessage', result);
				const cUid = this.im.userManage.getUid() + '';
				const isRemoteMessage = cUid !== result.from;
				if (isRemoteMessage) {
					// 收到远端消息，触发消息接收回调
					this.mRtmChannelListeners.forEach((listener) => {
						listener(result.content || '', result.to || '');
					});
				}
			},
			/**
			 * 收到单聊消息
			 * @param result
			 */
			onRosterMessage: (result: Meta) => {
				console.log('onRosterMessage', result);
				const cUid = this.im.userManage.getUid() + '';
				const isRemoteMessage = cUid !== result.from;
				if (isRemoteMessage) {
					// 收到远端消息，触发消息接收回调
					this.mRtmC2cListeners.forEach((listener) => {
						listener(result.content || '', result.from || '');
					});
				}
			},
			/**
			 * 监听消息发送状态改变
			 * @param res
			 */
			onSendingMessageStatusChanged: (
				res: QNIM.ISendingMessageStatusChangedRes
			) => {
				console.log('onSendingMessageStatusChanged res', res);
				const channelMessageTask = this.localChannelMessageTaskQueue.find(
					(item) => item.clientMId === res.mid
				);
				const c2cMessageTask = this.localC2cMessageTaskQueue.find(
					(item) => item.clientMId === res.mid
				);

				if (res.status === 'sent') {
					channelMessageTask?.callback?.onSuccess?.(res);
					this.localChannelMessageTaskQueue =
						this.localChannelMessageTaskQueue.filter(
							(item) => item.clientMId !== res.mid
						);
					if (channelMessageTask?.isDispatchToLocal) {
						this.mRtmChannelListeners.forEach((listener) => {
							listener(channelMessageTask.msg, channelMessageTask.channelId);
						});
					}

					c2cMessageTask?.callback?.onSuccess?.(res);
					this.localC2cMessageTaskQueue = this.localC2cMessageTaskQueue.filter(
						(item) => item.clientMId !== res.mid
					);
					if (c2cMessageTask?.isDispatchToLocal) {
						this.mRtmC2cListeners.forEach((listener) => {
							listener(c2cMessageTask.msg, c2cMessageTask.peerId);
						});
					}
				}

				if (res.status === 'failed') {
					channelMessageTask?.callback?.onFailure?.(res);
					this.localChannelMessageTaskQueue =
						this.localChannelMessageTaskQueue.filter(
							(item) => item.clientMId !== res.mid
						);

					c2cMessageTask?.callback?.onFailure?.(res);
					this.localC2cMessageTaskQueue = this.localC2cMessageTaskQueue.filter(
						(item) => item.clientMId !== res.mid
					);
				}
			},
			/**
			 * 登录成功
			 * @param res
			 */
			loginSuccess: (res: any) => {
				console.log('loginSuccess', res);
				if (this.loginCallback?.onSuccess) {
					this.loginCallback?.onSuccess(res);
				}
			},
			/**
			 * 登录失败
			 * @param error
			 */
			loginFail: (error: any) => {
				console.log('loginFail', error);
				if (this.loginCallback?.onFailure) {
					this.loginCallback?.onFailure(error);
				}
			}
		});
	}

	/**
	 * 初始化 im 内部实现
	 * @param config
	 * @param callback
	 */
	private _connect(
		config: { name: string; password: string },
		callback?: RtmCallBack
	) {
		const { name, password } = config;
		this.loginCallback = callback;
		this.getIM().then(() => {
			this.im.login({
				name,
				password
			});
		});
	}

	/**
	 * 发送频道消息内部消息
	 * @param msg
	 * @param channelId
	 * @param isDispatchToLocal
	 * @param callback
	 */
	private _sendChannelMsg(
		msg: string,
		channelId: string,
		isDispatchToLocal: boolean,
		callback?: RtmCallBack
	) {
		const clientMId = this.im.sysManage.sendGroupMessage({
			content: msg,
			gid: channelId
		});
		// 本地发送消息暂存队列
		this.localChannelMessageTaskQueue.push({
			clientMId,
			callback,
			isDispatchToLocal,
			msg,
			channelId
		});
	}

	/**
	 * 初始化im配置
	 * @param config
	 */
	init(config: InitConfig) {
		this.config = config;
		return this.getIM().then(() => {
			this.addListener();
			return this;
		});
	}

	/**
	 * 添加点对点消息监听
	 * @param listener
	 */
	addRtmC2cListener(listener: RtmManagerLister) {
		this.mRtmC2cListeners.push(listener);
	}

	/**
	 * 移除点对点消息监听
	 * @param listener
	 */
	removeRtmC2cListener(listener: RtmManagerLister) {
		this.mRtmC2cListeners = this.mRtmC2cListeners.filter(
			(item) => item !== listener
		);
	}

	/**
	 * 添加频道消息监听
	 * @param listener
	 */
	addRtmChannelListener(listener: RtmManagerLister) {
		this.mRtmChannelListeners.push(listener);
	}

	/**
	 * 移除频道消息监听
	 * @param listener
	 */
	removeRtmChannelListener(listener: RtmManagerLister) {
		this.mRtmChannelListeners = this.mRtmChannelListeners.filter(
			(item) => item !== listener
		);
	}

	/**
	 * 获取IM实例
	 * 因为im实例过程中，是个异步任务，所以需要定时实例，直到实例成功
	 */
	getIM(): Promise<any> {
		return new Promise((resolve, reject) => {
			if (this.initCount > this.maxInitCount) {
				// 超出最大实例化次数
				return reject(
					new TypeError('Instantiation failed, please try again later.')
				);
			}
			if (!this.im) {
				this.im = QNIM.init({
					autoLogin: false,
					appid: this.config.appid
				});
			}
			if (this.im && this.im.isReady && this.im.isReady()) {
				resolve(this.im);
			} else {
				setTimeout(() => {
					this.initCount++;
					resolve(this.getIM());
				}, 1000);
			}
		});
	}

	/**
	 * 登录im
	 */
	connect(config: { name: string; password: string }, callback?: RtmCallBack) {
		return new Promise((resolve, reject) => {
			this._connect(config, {
				onSuccess: (res: any) => {
					if (callback?.onSuccess) callback?.onSuccess(res);
					resolve(res);
				},
				onFailure: (error: any) => {
					if (callback?.onFailure) callback?.onFailure(error);
					reject(error);
				}
			});
		});
	}

	/**
	 * 加入聊天室
	 * @param channelId
	 * @param callback
	 */
	joinChannel(channelId: string, callback?: RtmCallBack) {
		return this.im.chatroomManage
			.join(channelId)
			.then((result: { result: string }) => {
				console.log('joinChannel join then', result);
				return new Promise((resolve) => {
					this.joinChannelSuccessCallback = (data: any) => {
						if (callback?.onSuccess) callback?.onSuccess(data);
						resolve(data);
					};
				});
			})
			.catch((error: { code: number; message: string; url: string }) => {
				console.log('joinChannel join catch', error);
				if (error.code === 20017) {
					if (callback?.onSuccess) return callback.onSuccess(error);
					return Promise.resolve(error);
				}
				if (callback?.onFailure) callback.onFailure(error);
				return Promise.reject(error);
			});
	}

	/**
	 * 退出聊天室
	 * @param channelId
	 * @param callback
	 */
	leaveChannel(channelId: string, callback?: RtmCallBack) {
		return this.im.chatroomManage
			.leave(Number(channelId))
			.then((res: any) => {
				if (callback?.onSuccess) callback.onSuccess(res);
				console.log('退出聊天室成功', res);
			})
			.catch((error: any) => {
				if (callback?.onFailure) callback.onFailure(error);
				console.log('退出聊天室失败', error);
				return Promise.reject(error);
			});
	}

	/**
	 * 发送频道消息
	 * 发送消息
	 * @param msg
	 * @param channelId
	 * @param isDispatchToLocal
	 * @param callback
	 */
	sendChannelMsg(
		msg: string,
		channelId: string,
		isDispatchToLocal: boolean,
		callback?: RtmCallBack
	): Promise<{
		mid: number;
		status: string;
	}> {
		return new Promise((resolve, reject) => {
			const clientMId = this.im.sysManage.sendGroupMessage({
				content: msg,
				gid: channelId
			});
			// 本地发送消息暂存队列
			this.localChannelMessageTaskQueue.push({
				clientMId,
				callback: {
					onSuccess(res) {
						console.log('sendChannelMsg onSuccess', res);
						if (callback?.onSuccess) callback.onSuccess(res);
						resolve(res);
					},
					onFailure(error) {
						if (callback?.onFailure) callback.onFailure(error);
						reject(error);
					}
				},
				isDispatchToLocal,
				msg,
				channelId
			});
		});
	}

	/**
	 * 发送点对点消息
	 * @param msg
	 * @param peerId
	 * @param isDispatchToLocal
	 * @param callback
	 */
	sendC2cMsg(
		msg: string,
		peerId: string,
		isDispatchToLocal: boolean,
		callback?: RtmCallBack
	) {
		return new Promise((resolve, reject) => {
			const clientMId = this.im.sysManage.sendRosterMessage({
				content: msg,
				uid: peerId
			});
			// 本地发送消息暂存队列
			this.localC2cMessageTaskQueue.push({
				clientMId,
				callback: {
					onSuccess(res) {
						console.log('sendChannelMsg onSuccess', res);
						if (callback?.onSuccess) callback.onSuccess(res);
						resolve(res);
					},
					onFailure(error) {
						if (callback?.onFailure) callback.onFailure(error);
						reject(error);
					}
				},
				isDispatchToLocal,
				msg,
				peerId
			});
		});
	}

	/**
	 * TODO
	 * @param channelId
	 * @param callback
	 */
	createChannel(channelId: string, callback?: RtmCallBack): Promise<any> {
		return Promise.resolve(undefined);
	}

	/**
	 * TODO
	 * @param channelId
	 * @param callback
	 */
	releaseChannel(channelId: string, callback?: RtmCallBack): Promise<any> {
		return Promise.resolve(undefined);
	}
}

export interface IMMessage {
	action?: string;
	data?: IMMessageData;
}

export interface IMMessageData {
	action?: string;
	content?: string;
	sendUser?: IMMessageSendUser;
	senderRoomId?: string;
}

export interface IMMessageSendUser {
	avatar?: string;
	extends?: IMMessageExtends;
	im_userid?: string;
	im_username?: string;
	nick?: string;
	user_id?: string;
}

export interface IMMessageExtends {
	customFiled?: string;
	phone?: string;
}
