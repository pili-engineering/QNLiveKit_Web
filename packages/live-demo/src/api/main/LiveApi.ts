import { liveRequest, request, getAccessToken, getAuthorization } from '../utils';
import {
  GetLiveAuthTokenParams,
  GetLiveAuthTokenResult,
  GetLiveRoomHeartbeatLiveIdParams,
  GetLiveRoomHeartbeatLiveIdResult,
  GetLiveRoomInfoLiveIdParams,
  GetLiveRoomListParams,
  GetLiveRoomListResult,
  GetLiveRoomParams,
  GetLiveRoomResult,
  GetLiveRoomUserListParams,
  LiveRoomUserLiveIdParams,
  LiveRoomUserLiveIdResult
} from '../types';

const PREFIX = `/client/live`;

export class LiveApi {
  /**
   * 互动直播获取令牌
   * @param params
   */
  static getLiveAuthToken(params: GetLiveAuthTokenParams) {
    return request.get<GetLiveAuthTokenResult['data'], GetLiveAuthTokenResult['data']>(`/v1/live/auth_token`, {
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
  getRoomUserList(params: GetLiveRoomUserListParams) {
    return liveRequest.get(`${PREFIX}/room/user_list`, {
      headers: {
        Authorization: getAuthorization()
      },
      params
    });
  }

  /**
   * 搜索直播
   * @param params
   */
  static search(params: GetLiveRoomParams) {
    return liveRequest.get<GetLiveRoomResult['data'], GetLiveRoomResult['data']>(`${PREFIX}/room`, {
      headers: {
        Authorization: getAuthorization()
      },
      params
    });
  }

  /**
   * 查询直播详情
   * @param params
   */
  getRoomInfo(params: GetLiveRoomInfoLiveIdParams) {
    return liveRequest.get(`${PREFIX}/room/info/${params.live_id}`, {
      headers: {
        Authorization: getAuthorization()
      }
    });
  }

  /**
   * 直播列表
   * @param params
   */
  static getRoomList(params: GetLiveRoomListParams) {
    return liveRequest.get<GetLiveRoomListResult['data'], GetLiveRoomListResult['data']>(`${PREFIX}/room/list`, {
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
  static join(params: LiveRoomUserLiveIdParams) {
    return liveRequest.post<LiveRoomUserLiveIdResult['data'], LiveRoomUserLiveIdResult['data']>(`${PREFIX}/room/user/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      },
    });
  }

  /**
   * 离开直播
   * @param params
   */
  static leave(params: LiveRoomUserLiveIdParams) {
    return liveRequest.delete(`${PREFIX}/room/user/${params.live_id}`, {
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
    return liveRequest.get<GetLiveRoomHeartbeatLiveIdResult['data'], GetLiveRoomHeartbeatLiveIdResult['data']>(`${PREFIX}/room/heartbeat/${params.live_id}`, {
      headers: {
        Authorization: getAccessToken()
      },
    });
  }
}
