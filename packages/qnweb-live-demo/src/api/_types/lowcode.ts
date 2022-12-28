/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File;

/**
 * 接口 [获取应用配置↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3078) 的 **请求类型**
 *
 * @分类 [应用级接口(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_426)
 * @请求头 `GET /client/app/config`
 * @更新时间 `2022-06-17 16:50:00`
 */
export interface GetClientAppConfigParams {}

/**
 * 接口 [获取应用配置↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3078) 的 **返回类型**
 *
 * @分类 [应用级接口(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_426)
 * @请求头 `GET /client/app/config`
 * @更新时间 `2022-06-17 16:50:00`
 */
export interface GetClientAppConfigResult {
	code?: number;
	message?: string;
	data?: {
		im_app_id?: string;
	};
}

/**
 * 接口 [获取礼物配置列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3174) 的 **请求类型**
 *
 * @分类 [礼物 （admin）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_468)
 * @请求头 `GET /admin/gift/config/{type}`
 * @更新时间 `2022-09-30 16:19:16`
 */
export interface GetAdminGiftConfigTypeParams {
	/**
	 * 礼物类型
	 */
	type: string;
}

/**
 * 接口 [获取礼物配置列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3174) 的 **返回类型**
 *
 * @分类 [礼物 （admin）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_468)
 * @请求头 `GET /admin/gift/config/{type}`
 * @更新时间 `2022-09-30 16:19:16`
 */
export interface GetAdminGiftConfigTypeResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 礼物id 唯一
		 */
		gift_id: number;
		/**
		 * 礼物类型  1,2,3 ……
		 */
		type: number;
		/**
		 * 礼物名称
		 */
		name: string;
		/**
		 * 礼物金额，0 表示自定义金额
		 */
		amount: number;
		/**
		 * 礼物图片
		 */
		img: string;
		/**
		 * 动态效果类型
		 */
		animation_type: number;
		/**
		 * 动态效果图片
		 */
		animation_img: string;
		/**
		 * 排序，从小到大排序，相同order 根据创建时间排序
		 */
		order: number;
		extends: null;
	}[];
}

/**
 * 接口 [删除礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3177) 的 **请求类型**
 *
 * @分类 [礼物 （admin）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_468)
 * @请求头 `DELETE /admin/gift/config/{gift_id}`
 * @更新时间 `2022-09-30 16:19:27`
 */
export interface DeleteAdminGiftConfigGiftIdParams {
	/**
	 * 礼物id
	 */
	gift_id: string;
}

/**
 * 接口 [删除礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3177) 的 **返回类型**
 *
 * @分类 [礼物 （admin）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_468)
 * @请求头 `DELETE /admin/gift/config/{gift_id}`
 * @更新时间 `2022-09-30 16:19:27`
 */
export interface DeleteAdminGiftConfigGiftIdResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [新增礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3180) 的 **请求类型**
 *
 * @分类 [礼物 （admin）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_468)
 * @请求头 `POST /admin/gift/config`
 * @更新时间 `2022-09-30 15:38:35`
 */
export interface PostAdminGiftConfigParams {
	gift_id: number;
	type: number;
	name: string;
	amount: number;
	img?: string;
	animation_type?: number;
	animation_img?: string;
	order: number;
}

/**
 * 接口 [新增礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3180) 的 **返回类型**
 *
 * @分类 [礼物 （admin）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_468)
 * @请求头 `POST /admin/gift/config`
 * @更新时间 `2022-09-30 15:38:35`
 */
export interface PostAdminGiftConfigResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [礼物交易列表（直播间）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3183) 的 **请求类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/list/live/{live_id}`
 * @更新时间 `2022-09-30 15:11:12`
 */
export interface GetClientGiftListLiveLiveIdParams {
	/**
	 * 默认 1
	 */
	page_num?: string;
	/**
	 * 默认 10
	 */
	page_size?: string;
	live_id: string;
}

/**
 * 接口 [礼物交易列表（直播间）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3183) 的 **返回类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/list/live/{live_id}`
 * @更新时间 `2022-09-30 15:11:12`
 */
export interface GetClientGiftListLiveLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id?: number;
			biz_id?: string;
			user_id?: string;
			gift_id?: number;
			amount?: number;
			status?: number;
			live_id?: string;
			anchor_id?: string;
			created_at?: number;
			updated_at?: number;
		}[];
	};
}

/**
 * 接口 [礼物交易列表（userId 发送礼物者）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3186) 的 **请求类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/list/user`
 * @更新时间 `2022-09-30 15:10:28`
 */
export interface GetClientGiftListUserParams {
	/**
	 * 默认1
	 */
	page_num?: string;
	/**
	 * 默认10
	 */
	page_size?: string;
}

/**
 * 接口 [礼物交易列表（userId 发送礼物者）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3186) 的 **返回类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/list/user`
 * @更新时间 `2022-09-30 15:10:28`
 */
export interface GetClientGiftListUserResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id: number;
			biz_id: string;
			user_id: string;
			gift_id: number;
			amount: number;
			status: number;
			live_id: string;
			anchor_id: string;
			created_at: number;
			updated_at: number;
		}[];
	};
}

/**
 * 接口 [礼物交易列表（主播）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3189) 的 **请求类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/list/anchor`
 * @更新时间 `2022-09-30 15:10:06`
 */
export interface GetClientGiftListAnchorParams {
	/**
	 * 默认 1
	 */
	page_num?: string;
	/**
	 * 默认 10
	 */
	page_size?: string;
}

/**
 * 接口 [礼物交易列表（主播）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3189) 的 **返回类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/list/anchor`
 * @更新时间 `2022-09-30 15:10:06`
 */
export interface GetClientGiftListAnchorResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id: number;
			biz_id: string;
			user_id: string;
			gift_id: number;
			amount: number;
			status: number;
			live_id: string;
			anchor_id: string;
			created_at: number;
			updated_at: number;
		}[];
	};
}

/**
 * 接口 [获取礼物配置列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3192) 的 **请求类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/config/{type}`
 * @更新时间 `2022-09-30 16:18:39`
 */
export interface GetClientGiftConfigTypeParams {
	/**
	 * 礼物类型
	 */
	type: string;
}

/**
 * 接口 [获取礼物配置列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3192) 的 **返回类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `GET /client/gift/config/{type}`
 * @更新时间 `2022-09-30 16:18:39`
 */
export interface GetClientGiftConfigTypeResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 礼物id 唯一
		 */
		gift_id: number;
		/**
		 * 礼物类型  1,2,3 ……
		 */
		type: number;
		/**
		 * 礼物名称
		 */
		name: string;
		/**
		 * 礼物金额，0 表示自定义金额
		 */
		amount: number;
		/**
		 * 礼物图片
		 */
		img: string;
		/**
		 * 动态效果类型
		 */
		animation_type: number;
		/**
		 * 动态效果图片
		 */
		animation_img: string;
		/**
		 * 排序，从小到大排序，相同order 根据创建时间排序
		 */
		order: number;
		extends: null;
	}[];
}

/**
 * 接口 [发送礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3195) 的 **请求类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `POST /client/gift/send`
 * @更新时间 `2022-09-30 15:35:57`
 */
export interface PostClientGiftSendParams {
	live_id: string;
	gift_id: number;
	amount: number;
}

/**
 * 接口 [发送礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3195) 的 **返回类型**
 *
 * @分类 [礼物(client)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_474)
 * @请求头 `POST /client/gift/send`
 * @更新时间 `2022-09-30 15:35:57`
 */
export interface PostClientGiftSendResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 交易id
		 */
		biz_id?: string;
		/**
		 * 发送者 userid
		 */
		user_id?: string;
		live_id?: string;
		anchor_id?: string;
		gift_id?: number;
		amount?: number;
		status?: number;
	};
}

/**
 * 接口 [礼物交易列表（直播间）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3198) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/live/{live_id}`
 * @更新时间 `2022-09-30 16:15:51`
 */
export interface GetServerGiftListLiveLiveIdParams {
	/**
	 * 默认 1
	 */
	page_num?: string;
	/**
	 * 默认 10
	 */
	page_size?: string;
	live_id: string;
}

/**
 * 接口 [礼物交易列表（直播间）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3198) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/live/{live_id}`
 * @更新时间 `2022-09-30 16:15:51`
 */
export interface GetServerGiftListLiveLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id?: number;
			/**
			 * 交易id
			 */
			biz_id?: string;
			user_id?: string;
			gift_id?: number;
			amount?: number;
			status?: number;
			live_id?: string;
			anchor_id?: string;
			created_at?: number;
			updated_at?: number;
		}[];
	};
}

/**
 * 接口 [礼物交易列表（userId 发送礼物者）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3201) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/user/{user_id}`
 * @更新时间 `2022-09-30 16:17:56`
 */
export interface GetServerGiftListUserUserIdParams {
	/**
	 * 默认1
	 */
	page_num?: string;
	/**
	 * 默认10
	 */
	page_size?: string;
	user_id: string;
}

/**
 * 接口 [礼物交易列表（userId 发送礼物者）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3201) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/user/{user_id}`
 * @更新时间 `2022-09-30 16:17:56`
 */
export interface GetServerGiftListUserUserIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id: number;
			biz_id: string;
			user_id: string;
			gift_id: number;
			amount: number;
			status: number;
			live_id: string;
			anchor_id: string;
			created_at: number;
			updated_at: number;
		}[];
	};
}

/**
 * 接口 [礼物交易列表（主播）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3204) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/anchor/{anchor_id}`
 * @更新时间 `2022-09-30 16:17:38`
 */
export interface GetServerGiftListAnchorAnchorIdParams {
	/**
	 * 默认 1
	 */
	page_num?: string;
	/**
	 * 默认 10
	 */
	page_size?: string;
	anchor_id: string;
}

/**
 * 接口 [礼物交易列表（主播）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3204) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/anchor/{anchor_id}`
 * @更新时间 `2022-09-30 16:17:38`
 */
export interface GetServerGiftListAnchorAnchorIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id: number;
			biz_id: string;
			user_id: string;
			gift_id: number;
			amount: number;
			status: number;
			live_id: string;
			anchor_id: string;
			created_at: number;
			updated_at: number;
		}[];
	};
}

/**
 * 接口 [获取礼物配置列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3207) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/config/{type}`
 * @更新时间 `2022-09-30 16:17:26`
 */
export interface GetServerGiftConfigTypeParams {
	/**
	 * 礼物类型
	 */
	type: string;
}

/**
 * 接口 [获取礼物配置列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3207) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/config/{type}`
 * @更新时间 `2022-09-30 16:17:26`
 */
export interface GetServerGiftConfigTypeResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 礼物id 唯一
		 */
		gift_id: number;
		/**
		 * 礼物类型  1,2,3 ……
		 */
		type: number;
		/**
		 * 礼物名称
		 */
		name: string;
		/**
		 * 礼物金额，0 表示自定义金额
		 */
		amount: number;
		/**
		 * 礼物图片
		 */
		img: string;
		/**
		 * 动态效果类型
		 */
		animation_type: number;
		/**
		 * 动态效果图片
		 */
		animation_img: string;
		/**
		 * 排序，从小到大排序，相同order 根据创建时间排序
		 */
		order: number;
		extends: null;
	}[];
}

/**
 * 接口 [删除礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3210) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `DELETE /server/gift/config/{gift_id}`
 * @更新时间 `2022-09-30 16:16:38`
 */
export interface DeleteServerGiftConfigGiftIdParams {
	/**
	 * 礼物id
	 */
	gift_id: string;
}

/**
 * 接口 [删除礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3210) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `DELETE /server/gift/config/{gift_id}`
 * @更新时间 `2022-09-30 16:16:38`
 */
export interface DeleteServerGiftConfigGiftIdResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [新增礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3213) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `POST /server/gift/config`
 * @更新时间 `2022-09-30 16:16:56`
 */
export interface PostServerGiftConfigParams {
	gift_id: number;
	type: number;
	name: string;
	amount: number;
	img?: string;
	animation_type?: number;
	animation_img?: string;
	order: number;
}

/**
 * 接口 [新增礼物↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3213) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `POST /server/gift/config`
 * @更新时间 `2022-09-30 16:16:56`
 */
export interface PostServerGiftConfigResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [礼物交易列表（直播间）_copy↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3267) 的 **请求类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/live/{live_id}_1665565569038`
 * @更新时间 `2022-10-12 17:06:09`
 */
export interface GetServerGiftListLiveLiveId_1665565569038Params {
	/**
	 * 默认 1
	 */
	page_num?: string;
	/**
	 * 默认 10
	 */
	page_size?: string;
	live_id: string;
}

/**
 * 接口 [礼物交易列表（直播间）_copy↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3267) 的 **返回类型**
 *
 * @分类 [礼物(server)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_480)
 * @请求头 `GET /server/gift/list/live/{live_id}_1665565569038`
 * @更新时间 `2022-10-12 17:06:09`
 */
export interface GetServerGiftListLiveLiveId_1665565569038Result {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		total_count?: number;
		page_total?: number;
		end_page?: boolean;
		list?: {
			id?: number;
			/**
			 * 交易id
			 */
			biz_id?: string;
			user_id?: string;
			gift_id?: number;
			amount?: number;
			status?: number;
			live_id?: string;
			anchor_id?: string;
			created_at?: number;
			updated_at?: number;
		}[];
	};
}

/**
 * 接口 [查看直播间所有商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3327) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `GET /client/item/{live_id}`
 * @更新时间 `2022-12-20 11:43:04`
 */
export interface GetClientItemLiveIdParams {
	/**
	 * 直播间id
	 */
	live_id: string;
}

/**
 * 接口 [查看直播间所有商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3327) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `GET /client/item/{live_id}`
 * @更新时间 `2022-12-20 11:43:04`
 */
export interface GetClientItemLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		live_id?: string;
		item_id?: string;
		order?: number;
		title?: string;
		tags?: string;
		thumbnail?: string;
		link?: string;
		current_price?: string;
		origin_price?: string;
		status?: number;
		record?: {
			id?: number;
			record_url?: string;
			start?: number;
			end?: number;
			status?: number;
			live_id?: string;
			item_id?: string;
		};
		extends?: {
			hints?: string;
			hots?: string;
		};
	}[];
}

/**
 * 接口 [删除商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3330) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /client/item/delete`
 * @更新时间 `2022-12-20 14:32:10`
 */
export interface PostClientItemDeleteParams {
	live_id: string;
	items: string[];
}

/**
 * 接口 [删除商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3330) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /client/item/delete`
 * @更新时间 `2022-12-20 14:32:10`
 */
export interface PostClientItemDeleteResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [添加商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3333) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `PUT /client/item/add`
 * @更新时间 `2022-12-20 14:28:48`
 */
export interface PutClientItemAddParams {
	live_id?: string;
	items?: {
		item_id: string;
		title: string;
		tags: string;
		thumbnail: string;
		link: string;
		current_price: string;
		origin_price: string;
		status: number;
		extends: {
			hints?: string;
			hots?: string;
		};
	}[];
}

/**
 * 接口 [添加商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3333) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `PUT /client/item/add`
 * @更新时间 `2022-12-20 14:28:48`
 */
export interface PutClientItemAddResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [修改商品顺序↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3336) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /item/order`
 * @更新时间 `2022-12-20 14:36:35`
 */
export interface PostItemOrderParams {
	live_id: string;
	items: {
		item_id: string;
		order: number;
	}[];
}

/**
 * 接口 [修改商品顺序↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3336) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /item/order`
 * @更新时间 `2022-12-20 14:36:35`
 */
export interface PostItemOrderResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [更改单个商品的顺序↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3339) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /item/order/single`
 * @更新时间 `2022-12-20 14:39:10`
 */
export interface PostItemOrderSingleParams {
	live_id?: string;
	item_id?: string;
	from?: number;
	to?: number;
}

/**
 * 接口 [更改单个商品的顺序↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3339) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /item/order/single`
 * @更新时间 `2022-12-20 14:39:10`
 */
export interface PostItemOrderSingleResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [更新商品信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3342) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `PUT /item/{liveId}/{itemId}`
 * @更新时间 `2022-12-20 14:50:52`
 */
export interface PutItemLiveIdItemIdParams {
	item_id?: string;
	title?: string;
	tags?: string;
	thumbnail?: string;
	link?: string;
	current_price?: string;
	origin_price?: string;
	status?: number;
	extends?: {
		hints?: string;
		hots?: string;
	};
	liveId: string;
	itemId: string;
}

/**
 * 接口 [更新商品信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3342) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `PUT /item/{liveId}/{itemId}`
 * @更新时间 `2022-12-20 14:50:52`
 */
export interface PutItemLiveIdItemIdResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [更新商品扩展信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3345) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `PUT /item/{liveId}/{itemId}/extends`
 * @更新时间 `2022-12-20 14:42:58`
 */
export interface PutItemLiveIdItemIdExtendsParams {
	liveId: string;
	itemId: string;
}

/**
 * 接口 [更新商品扩展信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3345) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `PUT /item/{liveId}/{itemId}/extends`
 * @更新时间 `2022-12-20 14:42:58`
 */
export interface PutItemLiveIdItemIdExtendsResult {}

/**
 * 接口 [批量更新直播间商品状态↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3351) 的 **请求类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /client/item/status`
 * @更新时间 `2022-12-26 10:35:22`
 */
export interface PostClientItemStatusParams {
	live_id?: string;
	items?: {
		item_id?: string;
		/**
		 * 0，下架(用户不可见)；1，上架(用户可见)；2，上架不能购买
		 */
		status?: number;
	}[];
}

/**
 * 接口 [批量更新直播间商品状态↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3351) 的 **返回类型**
 *
 * @分类 [商品（items）↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_516)
 * @请求头 `POST /client/item/status`
 * @更新时间 `2022-12-26 10:35:22`
 */
export interface PostClientItemStatusResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [获取令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2841) 的 **请求类型**
 *
 * @分类 [令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_390)
 * @标签 `v1`
 * @请求头 `GET /v1/auth_token`
 * @更新时间 `2022-05-10 14:50:36`
 */
export interface GetV1AuthTokenParams {
	/**
	 * string
	 */
	app_id: string;
	/**
	 * string
	 */
	app_key: string;
	/**
	 * string
	 */
	user_id: string;
	/**
	 * string
	 */
	device_id: string;
}

/**
 * 接口 [获取令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2841) 的 **返回类型**
 *
 * @分类 [令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_390)
 * @标签 `v1`
 * @请求头 `GET /v1/auth_token`
 * @更新时间 `2022-05-10 14:50:36`
 */
export interface GetV1AuthTokenResult {
	code: number;
	message: string;
	data: {
		access_token: string;
		refresh_token: string;
		/**
		 * access_token过期时间
		 */
		expires_at: number;
	};
	request_id: string;
}

/**
 * 接口 [创建直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2850) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/instance`
 * @更新时间 `2022-10-11 11:09:02`
 */
export interface PostLiveRoomInstanceParams {
	title: string;
	/**
	 * 公告
	 */
	notice?: string;
	/**
	 * 封面图片
	 */
	cover_url?: string;
	/**
	 * json字符串
	 */
	extension?: string;
	/**
	 * 预计开播时间 2022-01-01 15:00:00
	 */
	start_at?: string;
	/**
	 * 预计结束时间 2022-01-01 15:00:00
	 */
	end_at?: string;
	/**
	 * 推流token 过期时间 2022-01-01 15:00:00
	 */
	publish_expire_at?: string;
}

/**
 * 接口 [创建直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2850) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/instance`
 * @更新时间 `2022-10-11 11:09:02`
 */
export interface PostLiveRoomInstanceResult {
	code: number;
	message: string;
	data: {
		live_id: string;
		title: string;
		notice: string;
		cover_url: string;
		extends: {
			key: string;
			value: string;
		};
		anchor_info: {
			id: number;
			user_id: string;
			im_userid: string;
			im_username: string;
			avatar: string;
			nick: string;
			extends: {
				key: string;
				value: string;
			};
		};
		room_token: string;
		pk_id: string;
		online_count: number;
		start_time: number;
		end_time: number;
		chat_id: string;
		push_url: string;
		hls_url: string;
		rtmp_url: string;
		flv_url: string;
		pv: number;
		uv: number;
		total_count: number;
		total_mics: number;
		live_status: number;
	};
	request_id: string;
}

/**
 * 接口 [删除直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2859) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/instance/{live_id}`
 * @更新时间 `2022-05-30 14:48:56`
 */
export interface DeleteLiveRoomInstanceLiveIdParams {
	live_id: string;
}

/**
 * 接口 [删除直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2859) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/instance/{live_id}`
 * @更新时间 `2022-05-30 14:48:56`
 */
export interface DeleteLiveRoomInstanceLiveIdResult {
	code: number;
	message: string;
	request_id: string;
}

/**
 * 接口 [查询直播详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2913) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/info/{live_id}`
 * @更新时间 `2022-06-06 17:24:33`
 */
export interface GetLiveRoomInfoLiveIdParams {
	live_id: string;
}

/**
 * 接口 [查询直播详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2913) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/info/{live_id}`
 * @更新时间 `2022-06-06 17:24:33`
 */
export interface GetLiveRoomInfoLiveIdResult {
	code: number;
	message: string;
	data: {
		live_id: string;
		title: string;
		notice: string;
		cover_url: string;
		extends: {
			key: string;
			value: string;
		};
		anchor_info: {
			id: number;
			user_id: string;
			im_userid: string;
			im_username: string;
			avatar: string;
			nick: string;
			extends: {
				key: string;
				value: string;
			};
		};
		/**
		 * 主播状态。0：离线；1：在线
		 */
		anchor_status: number;
		room_token: string;
		pk_id: string;
		online_count: number;
		start_time: number;
		end_time: number;
		chat_id: string;
		push_url: string;
		hls_url: string;
		rtmp_url: string;
		flv_url: string;
		pv: number;
		uv: number;
		total_count: number;
		total_mics: number;
		live_status: number;
	};
	request_id: string;
}

/**
 * 接口 [停止直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2925) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/{live_id}`
 * @更新时间 `2022-05-30 10:35:15`
 */
export interface DeleteLiveRoomLiveIdParams {
	live_id: string;
}

/**
 * 接口 [停止直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2925) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/{live_id}`
 * @更新时间 `2022-05-30 10:35:15`
 */
export interface DeleteLiveRoomLiveIdResult {
	code: number;
	message: string;
	request_id: string;
}

/**
 * 接口 [开始直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3018) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/{live_id}`
 * @更新时间 `2022-05-31 11:49:16`
 */
export interface PutLiveRoomLiveIdParams {
	live_id: string;
}

/**
 * 接口 [开始直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3018) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/{live_id}`
 * @更新时间 `2022-05-31 11:49:16`
 */
export interface PutLiveRoomLiveIdResult {
	code: number;
	message: string;
	data: {
		live_id: string;
		title: string;
		notice: string;
		cover_url: string;
		extends: {
			key: string;
			value: string;
		};
		anchor_info: {
			id: number;
			user_id: string;
			im_userid: string;
			im_username: string;
			avatar: string;
			nick: string;
			extends: {
				key: string;
				value: string;
			};
		};
		room_token: string;
		pk_id: string;
		online_count: number;
		start_time: number;
		end_time: number;
		chat_id: string;
		push_url: string;
		hls_url: string;
		rtmp_url: string;
		flv_url: string;
		pv: number;
		uv: number;
		total_count: number;
		total_mics: number;
		live_status: number;
	};
	request_id: string;
}

/**
 * 接口 [搜索直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3021) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room`
 * @更新时间 `2022-05-31 11:49:35`
 */
export interface GetLiveRoomParams {
	/**
	 * 直播名/直播ID/主播名
	 */
	keyword: string;
	page_num: string;
	page_size: string;
}

/**
 * 接口 [搜索直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3021) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room`
 * @更新时间 `2022-05-31 11:49:35`
 */
export interface GetLiveRoomResult {
	code: number;
	message: string;
	data: {
		total_count: number;
		page_total: number;
		end_page: boolean;
		list: {
			live_id: string;
			title: string;
			notice: string;
			cover_url: string;
			extends: {
				key: string;
				value: string;
			};
			anchor_info: {
				id: number;
				user_id: string;
				im_userid: string;
				im_username: string;
				avatar: string;
				nick: string;
				extends: {
					key: string;
					value: string;
				};
			};
			room_token: string;
			pk_id: string;
			online_count: number;
			start_time: number;
			end_time: number;
			chat_id: string;
			push_url: string;
			hls_url: string;
			rtmp_url: string;
			flv_url: string;
			pv: number;
			uv: number;
			total_count: number;
			total_mics: number;
			live_status: number;
		}[];
		request_id: string;
	};
}

/**
 * 接口 [加入直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3027) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/user/{live_id}`
 * @更新时间 `2022-05-31 11:49:44`
 */
export interface PostLiveRoomUserLiveIdParams {
	live_id: string;
}

/**
 * 接口 [加入直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3027) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/user/{live_id}`
 * @更新时间 `2022-05-31 11:49:44`
 */
export interface PostLiveRoomUserLiveIdResult {
	code: number;
	message: string;
	data: {
		live_id: string;
		title: string;
		notice: string;
		cover_url: string;
		extends: {
			key: string;
			value: string;
		};
		anchor_info: {
			id: number;
			user_id: string;
			im_userid: string;
			im_username: string;
			avatar: string;
			nick: string;
			extends: {
				key: string;
				value: string;
			};
		};
		room_token: string;
		pk_id: string;
		online_count: number;
		start_time: number;
		end_time: number;
		chat_id: string;
		push_url: string;
		hls_url: string;
		rtmp_url: string;
		flv_url: string;
		pv: number;
		uv: number;
		total_count: number;
		total_mics: number;
		live_status: number;
	};
	request_id: string;
}

/**
 * 接口 [直播列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3030) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/list`
 * @更新时间 `2022-12-27 11:45:07`
 */
export interface GetLiveRoomListParams {
	page_num: string;
	page_size: string;
}

/**
 * 接口 [直播列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3030) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/list`
 * @更新时间 `2022-12-27 11:45:07`
 */
export interface GetLiveRoomListResult {
	code: number;
	message: string;
	data: {
		total_count: number;
		page_total: number;
		end_page: boolean;
		list: {
			live_id: string;
			title: string;
			notice: string;
			cover_url: string;
			extends: {
				key: string;
				value: string;
			};
			anchor_info: {
				id: number;
				user_id: string;
				im_userid: string;
				im_username: string;
				avatar: string;
				nick: string;
				extends: {
					key: string;
					value: string;
				};
			};
			room_token: string;
			pk_id: string;
			online_count: number;
			start_time: number;
			end_time: number;
			chat_id: string;
			push_url: string;
			hls_url: string;
			rtmp_url: string;
			flv_url: string;
			pv: number;
			uv: number;
			total_count: number;
			total_mics: number;
			live_status: number;
			anchor_status: number;
		}[];
		request_id: string;
	};
}

/**
 * 接口 [离开直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3033) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/user/{live_id}`
 * @更新时间 `2022-05-30 14:51:51`
 */
export interface DeleteLiveRoomUserLiveIdParams {
	live_id: string;
}

/**
 * 接口 [离开直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3033) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/user/{live_id}`
 * @更新时间 `2022-05-30 14:51:51`
 */
export interface DeleteLiveRoomUserLiveIdResult {
	code: number;
	message: string;
	request_id: string;
}

/**
 * 接口 [心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3039) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/heartbeat/{live_id}`
 * @更新时间 `2022-05-30 14:52:00`
 */
export interface GetLiveRoomHeartbeatLiveIdParams {
	live_id: string;
}

/**
 * 接口 [心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3039) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/heartbeat/{live_id}`
 * @更新时间 `2022-05-30 14:52:00`
 */
export interface GetLiveRoomHeartbeatLiveIdResult {
	code: number;
	message: string;
	data: {
		result: boolean;
	};
	request_id: string;
}

/**
 * 接口 [更新直播扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3063) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/extends`
 * @更新时间 `2022-05-31 11:50:52`
 */
export interface PutLiveRoomExtendsParams {
	live_id: string;
	extends: {};
}

/**
 * 接口 [更新直播扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3063) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/extends`
 * @更新时间 `2022-05-31 11:50:52`
 */
export interface PutLiveRoomExtendsResult {
	code: number;
	message: string;
	request_id: string;
}

/**
 * 接口 [房间用户↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3072) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/user_list`
 * @更新时间 `2022-05-31 14:01:23`
 */
export interface GetLiveRoomUserListParams {
	live_id: string;
	page_num: string;
	page_size: string;
}

/**
 * 接口 [房间用户↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3072) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/user_list`
 * @更新时间 `2022-05-31 14:01:23`
 */
export interface GetLiveRoomUserListResult {
	code: number;
	message: string;
	data: {
		total_count: number;
		page_total: number;
		end_page: boolean;
		list: {
			id: number;
			user_id: string;
			im_userid: number;
			im_username: string;
			avatar: string;
			nick: string;
			extends: {
				key: string;
				value: string;
			};
		}[];
	};
	request_id: string;
}

/**
 * 接口 [主播查看自己直播记录↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3264) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/list/anchor`
 * @更新时间 `2022-10-11 15:01:55`
 */
export interface GetLiveRoomListAnchorParams {
	page_num: string;
	page_size: string;
}

/**
 * 接口 [主播查看自己直播记录↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3264) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/list/anchor`
 * @更新时间 `2022-10-11 15:01:55`
 */
export interface GetLiveRoomListAnchorResult {
	code: number;
	message: string;
	data: {
		total_count: number;
		page_total: number;
		end_page: boolean;
		list: {
			live_id: string;
			title: string;
			notice: string;
			cover_url: string;
			extends: {
				key: string;
				value: string;
			};
			anchor_info: {
				id: number;
				user_id: string;
				im_userid: string;
				im_username: string;
				avatar: string;
				nick: string;
				extends: {
					key: string;
					value: string;
				};
			};
			room_token: string;
			pk_id: string;
			online_count: number;
			start_time: number;
			end_time: number;
			chat_id: string;
			push_url: string;
			hls_url: string;
			rtmp_url: string;
			flv_url: string;
			pv: number;
			uv: number;
			total_count: number;
			total_mics: number;
			live_status: number;
		}[];
		request_id: string;
	};
}

/**
 * 接口 [踢麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3042) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic/live`
 * @更新时间 `2022-05-30 21:55:47`
 */
export interface DeleteMicLiveParams {
	live_id: string;
	user_id: string;
}

/**
 * 接口 [踢麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3042) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic/live`
 * @更新时间 `2022-05-30 21:55:47`
 */
export interface DeleteMicLiveResult {
	code: number;
	message: string;
	data: {
		result: boolean;
	};
	request_id: string;
}

/**
 * 接口 [上麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3045) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `POST /mic`
 * @更新时间 `2022-06-01 11:14:00`
 */
export interface PostMicParams {
	live_id: string;
	mic: boolean;
	camera: boolean;
	/**
	 * json串
	 */
	extends: {};
}

/**
 * 接口 [上麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3045) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `POST /mic`
 * @更新时间 `2022-06-01 11:14:00`
 */
export interface PostMicResult {
	code: number;
	message: string;
	data: {
		rtc_token: string;
	};
	request_id: string;
}

/**
 * 接口 [下麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3048) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic`
 * @更新时间 `2022-06-01 11:14:11`
 */
export interface DeleteMicParams {
	live_id: string;
	mic: boolean;
	camera: boolean;
}

/**
 * 接口 [下麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3048) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic`
 * @更新时间 `2022-06-01 11:14:11`
 */
export interface DeleteMicResult {
	code: number;
	message: string;
	request_id: string;
}

/**
 * 接口 [禁麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3051) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/live`
 * @更新时间 `2022-05-30 21:55:34`
 */
export interface PutMicLiveParams {
	live_id: string;
	user_id: string;
}

/**
 * 接口 [禁麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3051) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/live`
 * @更新时间 `2022-05-30 21:55:34`
 */
export interface PutMicLiveResult {
	code: number;
	message: string;
	data: {
		result: boolean;
	};
	request_id: string;
}

/**
 * 接口 [用户麦位状态----暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3054) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `GET /mic/live`
 * @更新时间 `2022-05-30 21:56:19`
 */
export interface GetMicLiveParams {
	live_id: string;
	user_id: string;
	/**
	 * mic/camera
	 */
	type: string;
}

/**
 * 接口 [用户麦位状态----暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3054) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `GET /mic/live`
 * @更新时间 `2022-05-30 21:56:19`
 */
export interface GetMicLiveResult {
	code: number;
	message: string;
	data: {
		live_id: string;
		user_id: string;
		status: number;
	};
	request_id: string;
}

/**
 * 接口 [房间麦位列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3057) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `GET /mic/room/list/{live_id}`
 * @更新时间 `2022-05-31 14:51:14`
 */
export interface GetMicRoomListLiveIdParams {
	live_id: string;
}

/**
 * 接口 [房间麦位列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3057) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `GET /mic/room/list/{live_id}`
 * @更新时间 `2022-05-31 14:51:14`
 */
export interface GetMicRoomListLiveIdResult {
	code: number;
	message: string;
	data: {
		user: {
			user_id: string;
			nickname: string;
			im_userid: string;
			im_username: string;
			avatar: number;
			nick: string;
			extends: {};
		};
		extends: {};
		mic: string;
		camera: string;
		status: number;
	}[];
	request_id: string;
}

/**
 * 接口 [更新麦位扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3060) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/extension`
 * @更新时间 `2022-05-31 15:45:42`
 */
export interface PutMicExtensionParams {
	live_id: string;
	user_id: string;
	extends: {};
}

/**
 * 接口 [更新麦位扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3060) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/extension`
 * @更新时间 `2022-05-31 15:45:42`
 */
export interface PutMicExtensionResult {
	code: number;
	message: string;
	request_id: string;
}

/**
 * 接口 [打开\/关闭麦克风\/摄像头↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3066) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/switch`
 * @更新时间 `2022-05-31 15:21:00`
 */
export interface PutMicSwitchParams {
	live_id: string;
	user_id: string;
	/**
	 * mic/camera
	 */
	type: string;
	/**
	 * on/off
	 */
	flag: boolean;
}

/**
 * 接口 [打开\/关闭麦克风\/摄像头↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3066) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/switch`
 * @更新时间 `2022-05-31 15:21:00`
 */
export interface PutMicSwitchResult {
	code: string;
	message: string;
	request_id: string;
}

/**
 * 接口 [更新自己的信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2988) 的 **请求类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `PUT /client/user/user`
 * @更新时间 `2022-06-08 10:06:48`
 */
export interface PutClientUserUserParams {
	/**
	 * 用户头像
	 */
	avatar?: string;
	/**
	 * 扩展信息，map[string]string
	 */
	extends?: {};
	/**
	 * 用户ID，唯一标识
	 */
	id?: string;
	/**
	 * 对应IM 的用户ID
	 */
	im_userid?: number;
	/**
	 * 用户昵称
	 */
	nick?: string;
}

/**
 * 接口 [更新自己的信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2988) 的 **返回类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `PUT /client/user/user`
 * @更新时间 `2022-06-08 10:06:48`
 */
export interface PutClientUserUserResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取自己的详细信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2991) 的 **请求类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/user/profile`
 * @更新时间 `2022-05-18 16:36:11`
 */
export interface GetClientUserProfileParams {}

/**
 * 接口 [获取自己的详细信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2991) 的 **返回类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/user/profile`
 * @更新时间 `2022-05-18 16:36:11`
 */
export interface GetClientUserProfileResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应登录IM 的用户密码
		 */
		im_password?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 对应登录IM 用户名
		 */
		im_username?: string;
		/**
		 * 用户昵称
		 */
		nick?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取其他用户信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2994) 的 **请求类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/user/{id}`
 * @更新时间 `2022-05-18 16:36:11`
 */
export interface GetClientUserIdParams {
	/**
	 * 用户ID
	 */
	id: string;
}

/**
 * 接口 [获取其他用户信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2994) 的 **返回类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/user/{id}`
 * @更新时间 `2022-05-18 16:36:11`
 */
export interface GetClientUserIdResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 用户昵称
		 */
		nick?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [批量获取其他用户信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2997) 的 **请求类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/users`
 * @更新时间 `2022-05-31 14:34:11`
 */
export interface GetClientUsersParams {
	/**
	 * 实际body 里面的json 。{"ids":[]}
	 */
	ids: string;
}

/**
 * 接口 [批量获取其他用户信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2997) 的 **返回类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/users`
 * @更新时间 `2022-05-31 14:34:11`
 */
export interface GetClientUsersResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 用户昵称
		 */
		nick?: string;
	}[];
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [根据IM 用户ID  获取其他用户信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3075) 的 **请求类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/user/imusers`
 * @更新时间 `2022-05-31 14:28:22`
 */
export interface GetClientUserImusersParams {
	/**
	 * 实际放在body 里面
	 */
	im_user_ids: string;
}

/**
 * 接口 [根据IM 用户ID  获取其他用户信息接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3075) 的 **返回类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `GET /client/user/imusers`
 * @更新时间 `2022-05-31 14:28:22`
 */
export interface GetClientUserImusersResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 用户昵称
		 */
		nick?: string;
	}[];
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [开始跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2970) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/start`
 * @更新时间 `2022-06-08 13:06:47`
 */
export interface PostClientRelayStartParams {
	/**
	 * 目的房间ID
	 */
	recv_room_id: string;
	/**
	 * 目的主播用户ID
	 */
	recv_user_id: string;
	/**
	 * 发起主播的roomID
	 */
	init_room_id: string;
}

/**
 * 接口 [开始跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2970) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/start`
 * @更新时间 `2022-06-08 13:06:47`
 */
export interface PostClientRelayStartResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 跨房信息，当code 为0 时返回
	 */
	data?: {
		/**
		 * 跨房会话ID
		 */
		relay_id?: string;
		/**
		 * 跨房状态，此时的状态有：0，等待接收方同意；1，接收方已同意（目的房间不需要确认）
		 */
		relay_status?: number;
		/**
		 * 跨房token
		 */
		relay_token?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [同意跨房申请↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2973) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/agree`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface PostClientRelayIdAgreeParams {
	/**
	 * 跨房会话ID
	 */
	id: string;
}

/**
 * 接口 [同意跨房申请↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2973) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/agree`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface PostClientRelayIdAgreeResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 跨房信息，当code 为0 时返回
	 */
	data?: {
		/**
		 * 跨房会话ID
		 */
		relay_id?: string;
		/**
		 * 跨房状态，此时的状态有：1，接收方已同意
		 */
		relay_status?: number;
		/**
		 * 跨房token
		 */
		relay_token?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [停止跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2976) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/stop`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface PostClientRelayIdStopParams {
	/**
	 * 跨房会话ID
	 */
	id: string;
}

/**
 * 接口 [停止跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2976) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/stop`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface PostClientRelayIdStopResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取跨房token↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2979) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `GET /client/relay/{id}/token`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface GetClientRelayIdTokenParams {
	/**
	 * 跨房会话ID
	 */
	id: string;
}

/**
 * 接口 [获取跨房token↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2979) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `GET /client/relay/{id}/token`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface GetClientRelayIdTokenResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 跨房信息，当code 为0 时返回
	 */
	data?: {
		/**
		 * 跨房会话ID
		 */
		relay_id?: string;
		/**
		 * 跨房状态，此时的状态有：1，接收方已同意
		 */
		relay_status?: number;
		/**
		 * 跨房token
		 */
		relay_token?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [通知服务端，本端的跨房已经完成↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2982) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/started`
 * @更新时间 `2022-06-02 14:18:03`
 */
export interface PostClientRelayIdStartedParams {
	/**
	 * 跨房会话ID
	 */
	id: string;
}

/**
 * 接口 [通知服务端，本端的跨房已经完成↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2982) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/started`
 * @更新时间 `2022-06-02 14:18:03`
 */
export interface PostClientRelayIdStartedResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 跨房信息，当code 为0 时返回
	 */
	data?: {
		/**
		 * 跨房会话ID
		 */
		relay_id?: string;
		/**
		 * 跨房状态，此时的状态有：1，接收方已同意
		 */
		relay_status?: number;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取跨房会话信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2985) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `GET /client/relay/{id}`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface GetClientRelayIdParams {
	/**
	 * 跨房会话ID
	 */
	id: string;
}

/**
 * 接口 [获取跨房会话信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2985) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `GET /client/relay/{id}`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface GetClientRelayIdResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 创建时间
		 */
		created_at?: string;
		/**
		 * 扩展数据
		 */
		extensions?: {};
		/**
		 * PK 会话ID
		 */
		id?: string;
		/**
		 * 发起方直播间ID
		 */
		init_room_id?: string;
		/**
		 * 发起方主播ID
		 */
		init_user_id?: string;
		/**
		 * 接收方直播间ID
		 */
		recv_room_id?: string;
		/**
		 * 接收方主播ID
		 */
		recv_user_id?: string;
		/**
		 * 开始时间
		 */
		start_at?: string;
		/**
		 * PK 会话状态
		 */
		status?: number;
		/**
		 * 结束时间
		 */
		stop_at?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [用户批量注册接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3000) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `POST /server/user`
 * @更新时间 `2022-05-18 16:37:04`
 */
export type PostServerUserParams = {
	/**
	 * 用户头像
	 */
	avatar?: string;
	/**
	 * 扩展信息，map[string]string
	 */
	extends?: {};
	/**
	 * 用户ID，唯一标识
	 */
	id?: string;
	/**
	 * 对应IM 的用户ID
	 */
	im_userid?: number;
	/**
	 * 用户昵称
	 */
	nick?: string;
}[];

/**
 * 接口 [用户批量注册接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3000) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `POST /server/user`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface PostServerUserResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取用户详细信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3003) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/user/profile/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface GetServerUserProfileIdParams {
	/**
	 * 用户ID
	 */
	id: string;
}

/**
 * 接口 [获取用户详细信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3003) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/user/profile/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface GetServerUserProfileIdResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应登录IM 的用户密码
		 */
		im_password?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 对应登录IM 用户名
		 */
		im_username?: string;
		/**
		 * 用户昵称
		 */
		nick?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取用户详细信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3006) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/user/profiles`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface GetServerUserProfilesParams {}

/**
 * 接口 [获取用户详细信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3006) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/user/profiles`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface GetServerUserProfilesResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应登录IM 的用户密码
		 */
		im_password?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 对应登录IM 用户名
		 */
		im_username?: string;
		/**
		 * 用户昵称
		 */
		nick?: string;
	}[];
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3009) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/user/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface GetServerUserIdParams {
	/**
	 * 用户ID
	 */
	id: string;
}

/**
 * 接口 [获取用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3009) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/user/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface GetServerUserIdResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 用户昵称
		 */
		nick?: string;
	};
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [更新用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3012) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `PUT /server/user/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface PutServerUserIdParams {
	/**
	 * 用户头像
	 */
	avatar?: string;
	/**
	 * 扩展信息，map[string]string
	 */
	extends?: {};
	/**
	 * 用户ID
	 */
	id: string;
	/**
	 * 对应IM 的用户ID
	 */
	im_userid?: number;
	/**
	 * 用户昵称
	 */
	nick?: string;
}

/**
 * 接口 [更新用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3012) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `PUT /server/user/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface PutServerUserIdResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [获取用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3015) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/users`
 * @更新时间 `2022-05-18 16:37:05`
 */
export interface GetServerUsersParams {}

/**
 * 接口 [获取用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3015) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `GET /server/users`
 * @更新时间 `2022-05-18 16:37:05`
 */
export interface GetServerUsersResult {
	/**
	 * 错误码，0 成功，其他失败
	 */
	code?: number;
	data?: {
		/**
		 * 用户头像
		 */
		avatar?: string;
		/**
		 * 扩展信息，map[string]string
		 */
		extends?: {};
		/**
		 * 用户ID，唯一标识
		 */
		id?: string;
		/**
		 * 对应IM 的用户ID
		 */
		im_userid?: number;
		/**
		 * 用户昵称
		 */
		nick?: string;
	}[];
	/**
	 * 错误信息
	 */
	message?: string;
	/**
	 * 请求ID
	 */
	request_id?: string;
}

/**
 * 接口 [数据统计↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3108) 的 **请求类型**
 *
 * @分类 [统计数据↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_438)
 * @请求头 `POST /client/stats/singleLive`
 * @更新时间 `2022-10-12 11:13:35`
 */
export interface PostClientStatsSingleLiveParams {
	Data?: {
		live_id: string;
		user_id: string;
		biz_id: string;
		/**
		 * type1:浏览直播间 liveid，userid；（type1 后端计算，不用上报） type2: 商品点击次数，live，user，item_id； type 3 评论次数；  type 4  PK连麦 ； type5 观众连麦;type 6 点赞 ； type7 礼物(后端统计）
		 */
		type: number;
		count: number;
	}[];
}

/**
 * 接口 [数据统计↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3108) 的 **返回类型**
 *
 * @分类 [统计数据↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_438)
 * @请求头 `POST /client/stats/singleLive`
 * @更新时间 `2022-10-12 11:13:35`
 */
export interface PostClientStatsSingleLiveResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [直播数据获取↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3120) 的 **请求类型**
 *
 * @分类 [统计数据↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_438)
 * @请求头 `GET /client/stats/singleLive/{live_id}`
 * @更新时间 `2022-10-12 11:15:14`
 */
export interface GetClientStatsSingleLiveLiveIdParams {
	live_id: string;
}

/**
 * 接口 [直播数据获取↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3120) 的 **返回类型**
 *
 * @分类 [统计数据↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_438)
 * @请求头 `GET /client/stats/singleLive/{live_id}`
 * @更新时间 `2022-10-12 11:15:14`
 */
export interface GetClientStatsSingleLiveLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 流量 （未计算使用，就是留个位置）
		 */
		flow?: string;
		info?: {
			/**
			 * 1.live 2. Item 3. comment   4. PK连麦  5. 观众连麦 6.点赞 7.礼物（后端统计，pv返回打赏钱数，uv返回人数）
			 */
			type: number;
			/**
			 * type描述
			 */
			type_description: string;
			/**
			 * 点击/浏览次数
			 */
			page_view: number;
			/**
			 * 人数
			 */
			unique_visitor: number;
		}[];
	};
}

/**
 * 接口 [服务端获取管理员token↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3147) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @标签 `v1`
 * @请求头 `GET /server/auth/admin/token`
 * @更新时间 `2022-09-15 15:19:47`
 */
export interface GetServerAuthAdminTokenParams {
	/**
	 * string
	 */
	app_id: string;
	/**
	 * string
	 */
	app_key: string;
	/**
	 * string
	 */
	user_id: string;
	/**
	 * string
	 */
	device_id: string;
}

/**
 * 接口 [服务端获取管理员token↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3147) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @标签 `v1`
 * @请求头 `GET /server/auth/admin/token`
 * @更新时间 `2022-09-15 15:19:47`
 */
export interface GetServerAuthAdminTokenResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		access_token?: string;
		expires_at?: number;
	};
}

/**
 * 接口 [查看待审核图片\/已审核图片详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3153) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/record`
 * @更新时间 `2022-09-26 17:37:22`
 */
export interface GetAdminCensorRecordParams {
	/**
	 * 当前第几页
	 */
	page_num: string;
	/**
	 * 页面大小
	 */
	page_size: string;
	live_id?: string;
	/**
	 * 不传：全部   0：未审核   1：已审核
	 */
	is_review?: string;
}

/**
 * 接口 [查看待审核图片\/已审核图片详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3153) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/record`
 * @更新时间 `2022-09-26 17:37:22`
 */
export interface GetAdminCensorRecordResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 总数
		 */
		total_count?: number;
		/**
		 * 总页数
		 */
		page_total?: number;
		/**
		 * 是否是最后一页
		 */
		end_page?: boolean;
		list?: {
			id: number;
			/**
			 * 图片url
			 */
			url: string;
			/**
			 * 鉴定任务ID
			 */
			job_id: string;
			/**
			 * 图片生成时间
			 */
			created_at: number;
			/**
			 * 总体建议："review","block",'"pass"
			 */
			suggestion: string;
			/**
			 * 鉴黄，建议："review","block",'"pass"
			 */
			pulp: string;
			/**
			 * 暴恐，建议："review","block",'"pass"
			 */
			terror: string;
			/**
			 * 敏感人物，建议："review","block",'"pass"
			 */
			politician: string;
			/**
			 * 广告，建议："review","block",'"pass"
			 */
			ads: string;
			/**
			 * 直播间ID
			 */
			live_id: string;
			/**
			 * 是否审核 0：没审核 1：审核
			 */
			is_review: number;
			/**
			 * 审核结果 1 通过；2 违规
			 */
			review_answer: number;
			/**
			 * 审核人userId
			 */
			review_user_id: string;
			/**
			 * 审核时间
			 */
			review_time: number;
		}[];
	};
}

/**
 * 接口 [查看待审核直播间\/已审核直播间↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3156) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/live`
 * @更新时间 `2022-09-28 17:33:51`
 */
export interface GetAdminCensorLiveParams {
	/**
	 * 第几页
	 */
	page_num: string;
	/**
	 * 一页大小
	 */
	page_size: string;
	/**
	 * 不发送，全部（默认） ；0，只查看有未审核记录的直播间
	 */
	is_review?: string;
}

/**
 * 接口 [查看待审核直播间\/已审核直播间↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3156) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/live`
 * @更新时间 `2022-09-28 17:33:51`
 */
export interface GetAdminCensorLiveResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		/**
		 * 总的符合条件的直播间的数量
		 */
		total_count?: number;
		/**
		 * 总页数
		 */
		page_total?: number;
		/**
		 * 是否是最后一页
		 */
		end_page?: boolean;
		list?: {
			/**
			 * 直播间id
			 */
			live_id: string;
			/**
			 * 直播间名称
			 */
			title: string;
			/**
			 * 主播id
			 */
			anchor_id: string;
			/**
			 * 主播名称
			 */
			nick: string;
			/**
			 * 主播状态 0:离线 1：在线
			 */
			anchor_status: number;
			/**
			 * 0，已创建；1，直播中；2，已结束
			 */
			live_status: number;
			/**
			 * 直播间关闭原因
			 */
			stop_reason: string;
			/**
			 * 直播间关闭时间
			 */
			stop_at: number;
			/**
			 * 直播开始时间
			 */
			start_at: number;
			/**
			 * 未审核图片数目
			 */
			count: number;
			/**
			 * 违规次数
			 */
			violation_count: number;
			/**
			 * 最近一次风险预警时间
			 */
			time: number | null;
			push_url: string;
			rtmp_play_url: string;
			flv_play_url: string;
			hls_play_url: string;
			/**
			 * ai预警次数
			 */
			ai_count: number;
		}[];
	};
}

/**
 * 接口 [管理员登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3159) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /manager/login`
 * @更新时间 `2022-09-27 10:19:07`
 */
export interface PostManagerLoginParams {
	user_name?: string;
	password?: string;
}

/**
 * 接口 [管理员登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3159) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /manager/login`
 * @更新时间 `2022-09-27 10:19:07`
 */
export interface PostManagerLoginResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		access_token?: string;
		expires_at?: number;
	};
}

/**
 * 接口 [修改审核设置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3162) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/config`
 * @更新时间 `2022-09-21 15:57:23`
 */
export interface PostAdminCensorConfigParams {
	/**
	 * 是否开启
	 */
	enable?: boolean;
	/**
	 * 截帧时长，单位秒
	 */
	interval?: number;
	pulp?: boolean;
	terror?: boolean;
	politician?: boolean;
	ads?: boolean;
}

/**
 * 接口 [修改审核设置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3162) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/config`
 * @更新时间 `2022-09-21 15:57:23`
 */
export interface PostAdminCensorConfigResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		enable?: boolean;
		/**
		 * 涉黄
		 */
		pulp?: boolean;
		/**
		 * 暴恐
		 */
		terror?: boolean;
		/**
		 * 敏感人物
		 */
		politician?: boolean;
		/**
		 * 广告
		 */
		ads?: boolean;
		/**
		 * 截帧时长，单位秒
		 */
		interval?: number;
	};
}

/**
 * 接口 [获取审核设置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3165) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/config`
 * @更新时间 `2022-09-15 15:39:05`
 */
export interface GetAdminCensorConfigParams {}

/**
 * 接口 [获取审核设置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3165) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/config`
 * @更新时间 `2022-09-15 15:39:05`
 */
export interface GetAdminCensorConfigResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		enable?: boolean;
		pulp?: boolean;
		terror?: boolean;
		politician?: boolean;
		ads?: boolean;
		interval?: number;
	};
}

/**
 * 接口 [审核图片↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3168) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/audit`
 * @更新时间 `2022-09-28 17:26:38`
 */
export interface PostAdminCensorAuditParams {
	live_id?: string;
	/**
	 * 待审核图片的id
	 */
	image_list?: number[];
	/**
	 *  1 通过；2 违规
	 */
	review_answer?: number;
	/**
	 * 是否发送违规警告
	 */
	notify?: boolean;
}

/**
 * 接口 [审核图片↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3168) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/audit`
 * @更新时间 `2022-09-28 17:26:38`
 */
export interface PostAdminCensorAuditResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [强制关闭直播间↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3171) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/stoplive/:live_id`
 * @更新时间 `2022-09-23 09:33:17`
 */
export interface PostAdminCensorStopliveLiveIdParams {
	/**
	 * 直播间ID
	 */
	live_id: string;
}

/**
 * 接口 [强制关闭直播间↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3171) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/stoplive/:live_id`
 * @更新时间 `2022-09-23 09:33:17`
 */
export interface PostAdminCensorStopliveLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [开始讲解商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3087) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `POST /client/item/demonstrate/{liveId}/{itemId}`
 * @更新时间 `2022-08-16 15:42:53`
 */
export interface PostClientItemDemonstrateLiveIdItemIdParams {
	liveId: string;
	itemId: string;
}

/**
 * 接口 [开始讲解商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3087) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `POST /client/item/demonstrate/{liveId}/{itemId}`
 * @更新时间 `2022-08-16 15:42:53`
 */
export interface PostClientItemDemonstrateLiveIdItemIdResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [停止讲解\/录制商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3090) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `DELETE /client/item/demonstrate/{liveId}`
 * @更新时间 `2022-08-17 16:39:23`
 */
export interface DeleteClientItemDemonstrateLiveIdParams {
	liveId: string;
}

/**
 * 接口 [停止讲解\/录制商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3090) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `DELETE /client/item/demonstrate/{liveId}`
 * @更新时间 `2022-08-17 16:39:23`
 */
export interface DeleteClientItemDemonstrateLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	Data?: {
		/**
		 * 录制url
		 */
		record_url?: string;
		start?: number;
		end?: number;
		/**
		 * //状态码0成功，1等待处理，2正在处理，3处理失败，4.正在讲解/录制中。
		 */
		status?: number;
		live_id?: string;
		item_id?: string;
		id: string;
	};
}

/**
 * 接口 [获取商品讲解回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3093) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `GET /client/item/demonstrate/record/{liveId}/{itemId}`
 * @更新时间 `2022-08-17 16:39:38`
 */
export interface GetClientItemDemonstrateRecordLiveIdItemIdParams {
	liveId: string;
	itemId: string;
}

/**
 * 接口 [获取商品讲解回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3093) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `GET /client/item/demonstrate/record/{liveId}/{itemId}`
 * @更新时间 `2022-08-17 16:39:38`
 */
export interface GetClientItemDemonstrateRecordLiveIdItemIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	Data?: {
		id?: number;
		record_url?: string;
		start?: number;
		end?: number;
		status?: number;
		live_id?: string;
		item_id?: string;
	};
}

/**
 * 接口 [删除商品录制回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3096) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `POST /client/item/demonstrate/record/delete`
 * @更新时间 `2022-08-19 11:11:53`
 */
export interface PostClientItemDemonstrateRecordDeleteParams {
	live_id?: string;
	/**
	 * 记录的ID"demonstrate_item": [5,6]
	 */
	demonstrate_item?: number[];
}

/**
 * 接口 [删除商品录制回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3096) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `POST /client/item/demonstrate/record/delete`
 * @更新时间 `2022-08-19 11:11:53`
 */
export interface PostClientItemDemonstrateRecordDeleteResult {
	request_id?: string;
	code?: number;
	message?: string;
	/**
	 * 失败的删除记录的ID
	 */
	failure_demon_items?: number[];
}

/**
 * 接口 [当前直播间所有商品讲解的录制↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3099) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `GET /client/item/demonstrate/record/{liveId}`
 * @更新时间 `2022-08-17 16:39:52`
 */
export interface GetClientItemDemonstrateRecordLiveIdParams {
	liveId: string;
}

/**
 * 接口 [当前直播间所有商品讲解的录制↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3099) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `GET /client/item/demonstrate/record/{liveId}`
 * @更新时间 `2022-08-17 16:39:52`
 */
export interface GetClientItemDemonstrateRecordLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	Data?: {
		id: number;
		record_url: string;
		start: number;
		end: number;
		status: number;
		live_id: string;
		item_id: string;
	}[];
}

/**
 * 接口 [开始录制讲解↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3105) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `POST /client/item/demonstrate/start/{liveId}/{itemId}`
 * @更新时间 `2022-08-16 15:42:21`
 */
export interface PostClientItemDemonstrateStartLiveIdItemIdParams {
	liveId: string;
	itemId: string;
}

/**
 * 接口 [开始录制讲解↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3105) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `POST /client/item/demonstrate/start/{liveId}/{itemId}`
 * @更新时间 `2022-08-16 15:42:21`
 */
export interface PostClientItemDemonstrateStartLiveIdItemIdResult {
	request_id?: string;
	code?: number;
	message?: string;
}

/**
 * 接口 [查看直播间当前讲解的商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3348) 的 **请求类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `GET /client/item/demonstrate/{live_id}`
 * @更新时间 `2022-12-26 10:28:09`
 */
export interface GetClientItemDemonstrateLiveIdParams {
	live_id: string;
}

/**
 * 接口 [查看直播间当前讲解的商品↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3348) 的 **返回类型**
 *
 * @分类 [商品讲解及回放↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_432)
 * @请求头 `GET /client/item/demonstrate/{live_id}`
 * @更新时间 `2022-12-26 10:28:09`
 */
export interface GetClientItemDemonstrateLiveIdResult {
	request_id?: string;
	code?: number;
	message?: string;
	data?: {
		live_id?: string;
		item_id?: string;
		order?: number;
		title?: string;
		tags?: string;
		thumbnail?: string;
		link?: string;
		current_price?: string;
		origin_price?: string;
		status?: number;
		record?: {
			id?: number;
			record_url?: string;
			start?: number;
			end?: number;
			status?: number;
			live_id?: string;
			item_id?: string;
		};
		extends?: {
			hints?: string;
			hots?: string;
		};
	};
}

/* prettier-ignore-end */
