import {
  liveRequest,
  request,
  getAccessToken,
  getAuthorization,
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
  PostLiveRoomUserLiveIdParams,
  PostLiveRoomUserLiveIdResult
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
    return liveRequest.get(`/client/live/room/user_list`, {
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
}
