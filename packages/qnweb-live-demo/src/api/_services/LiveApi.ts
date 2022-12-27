import {
  getAccessToken,
  getAuthorization, GetClientAppConfigParams, GetClientAppConfigResult,
  GetClientGiftConfigTypeParams,
  GetClientGiftConfigTypeResult,
  GetClientItemLiveIdParams,
  GetClientItemLiveIdResult,
  GetClientStatsSingleLiveLiveIdParams,
  GetClientStatsSingleLiveLiveIdResult,
  GetLiveAuthTokenParams,
  GetLiveAuthTokenResult,
  GetLiveRoomHeartbeatLiveIdParams,
  GetLiveRoomHeartbeatLiveIdResult,
  GetLiveRoomInfoLiveIdParams,
  GetLiveRoomInfoLiveIdResult,
  GetLiveRoomListParams,
  GetLiveRoomListResult,
  GetLiveRoomParams,
  GetLiveRoomResult,
  GetLiveRoomUserListParams,
  GetLiveRoomUserListResult,
  liveRequest, PostClientGiftSendParams, PostClientGiftSendResult,
  PostClientItemDemonstrateLiveIdItemIdParams,
  PostClientItemDemonstrateLiveIdItemIdResult,
  PostLiveRoomUserLiveIdParams,
  PostLiveRoomUserLiveIdResult,
  request
} from '@/api';

export class LiveApi {
  /**
   * 互动直播获取令牌
   * @param params
   */
  static getLiveAuthToken(params: GetLiveAuthTokenParams) {
    return request.get<GetLiveAuthTokenResult, GetLiveAuthTokenResult>(`/v1/live/auth_token`, {
      headers: {
        Authorization: getAuthorization()
      },
      params
    });
  }

  /**
   * 房间用户
   * @param params
   */
  static getRoomUserList(params: GetLiveRoomUserListParams) {
    return liveRequest.get<GetLiveRoomUserListResult, GetLiveRoomUserListResult>(`/client/live/room/user_list`, {
      headers: {
        Authorization: getAccessToken()
      },
      params
    });
  }

  /**
   * 搜索直播
   * @param params
   */
  static search(params: GetLiveRoomParams) {
    return liveRequest.get<GetLiveRoomResult, GetLiveRoomResult>(`/client/live/room`, {
      headers: {
        Authorization: getAccessToken()
      },
      params
    });
  }

  /**
   * 查询直播详情
   * @param params
   */
  static getRoomInfo(params: GetLiveRoomInfoLiveIdParams) {
    return liveRequest.get<GetLiveRoomInfoLiveIdResult, GetLiveRoomInfoLiveIdResult>(`/client/live/room/info/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 直播列表
   * @param params
   */
  static getRoomList(params: GetLiveRoomListParams) {
    return liveRequest.get<GetLiveRoomListResult, GetLiveRoomListResult>(`/client/live/room/list`, {
      headers: {
        Authorization: getAccessToken()
      },
      params
    });
  }

  /**
   * 加入直播
   * @param params
   */
  static join(params: PostLiveRoomUserLiveIdParams) {
    return liveRequest.post<PostLiveRoomUserLiveIdResult, PostLiveRoomUserLiveIdResult>(`/client/live/room/user/${params.live_id}`, null, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 离开直播
   * @param params
   */
  static leave(params: PostLiveRoomUserLiveIdParams) {
    return liveRequest.delete(`/client/live/room/user/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      },
    });
  }

  /**
   * 心跳
   * @param params
   */
  static heartbeat(params: GetLiveRoomHeartbeatLiveIdParams) {
    return liveRequest.get<GetLiveRoomHeartbeatLiveIdResult, GetLiveRoomHeartbeatLiveIdResult>(`/client/live/room/heartbeat/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      },
    });
  }

  /**
   * 查看直播间所有商品
   * @link @link https://github.com/pili-engineering/QNLiveKit_Server/blob/master/app/live/docs/client/client-item.md#%E6%9F%A5%E7%9C%8B%E7%9B%B4%E6%92%AD%E9%97%B4%E5%95%86%E5%93%81
   * @param params
   */
  static getProductList(params: GetClientItemLiveIdParams) {
    return liveRequest.get<GetClientItemLiveIdResult, GetClientItemLiveIdResult>(`/client/item/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 直播数据获取
   * @param params
   */
  static getStats(params: GetClientStatsSingleLiveLiveIdParams) {
    return liveRequest.get<GetClientStatsSingleLiveLiveIdResult, GetClientStatsSingleLiveLiveIdResult>(`/client/stats/singleLive/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 点赞
   * @param params
   */
  static like(params: { live_id: string }) {
    return liveRequest.put(`/client/live/room/${params.live_id}/like`, null, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 获取礼物配置列表
   * @param params
   */
  static getGiftList(params: GetClientGiftConfigTypeParams) {
    return liveRequest.get<GetClientGiftConfigTypeResult, GetClientGiftConfigTypeResult>(`/client/gift/config/${params.type}`, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 查看直播间当前讲解的商品信息
   * @param params
   */
  static getLiveProduct(params: PostClientItemDemonstrateLiveIdItemIdParams) {
    return liveRequest.get<PostClientItemDemonstrateLiveIdItemIdResult, PostClientItemDemonstrateLiveIdItemIdResult>(`/client/item/demonstrate/${params.liveId}`, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 发送礼物
   * @param params
   */
  static sendGift(params: PostClientGiftSendParams) {
    return liveRequest.post<PostClientGiftSendResult, PostClientGiftSendResult>(`/client/gift/send`, params, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }

  /**
   * 获取应用配置
   */
  static getAppConfig() {
    return liveRequest.get<GetClientAppConfigResult, GetClientAppConfigResult>(`/client/app/config`, {
      headers: {
        Authorization: getAccessToken()
      }
    });
  }
}
