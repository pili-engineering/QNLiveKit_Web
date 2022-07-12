/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File

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
  code?: number
  message?: string
  data?: {
    im_app_id?: string
  }
}

/**
 * 接口 [获取令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2841) 的 **请求类型**
 *
 * @分类 [令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_390)
 * @标签 `v1`
 * @请求头 `GET /v1/auth_token`
 * @更新时间 `2022-05-10 14:50:36`
 */
export interface GetAuthTokenParams {
  /**
   * string
   */
  app_id: string
  /**
   * string
   */
  app_key: string
  /**
   * string
   */
  user_id: string
  /**
   * string
   */
  device_id: string
}

/**
 * 接口 [获取令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2841) 的 **返回类型**
 *
 * @分类 [令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_390)
 * @标签 `v1`
 * @请求头 `GET /v1/auth_token`
 * @更新时间 `2022-05-10 14:50:36`
 */
export interface GetAuthTokenResult {
  code: number
  message: string
  data: {
    access_token: string
    refresh_token: string
    /**
     * access_token过期时间
     */
    expires_at: number
  }
  request_id: string
}

/**
 * 接口 [创建直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2850) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/instance`
 * @更新时间 `2022-05-31 11:48:47`
 */
export interface LiveRoomInstanceParams {
  title: string
  /**
   * 公告
   */
  notice?: string
  /**
   * 封面图片
   */
  cover_url?: string
  /**
   * json字符串
   */
  extension?: string
}

/**
 * 接口 [创建直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2850) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/instance`
 * @更新时间 `2022-05-31 11:48:47`
 */
export interface LiveRoomInstanceResult {
  code: number
  message: string
  data: {
    live_id: string
    title: string
    notice: string
    cover_url: string
    extends: {
      key: string
      value: string
    }
    anchor_info: {
      id: number
      user_id: string
      im_userid: string
      im_username: string
      avatar: string
      nick: string
      extends: {
        key: string
        value: string
      }
    }
    room_token: string
    pk_id: string
    online_count: number
    start_time: number
    end_time: number
    chat_id: string
    push_url: string
    hls_url: string
    rtmp_url: string
    flv_url: string
    pv: number
    uv: number
    total_count: number
    total_mics: number
    live_status: number
  }
  request_id: string
}

/**
 * 接口 [删除直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2859) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/instance/{live_id}`
 * @更新时间 `2022-05-30 14:48:56`
 */
export interface LiveRoomInstanceLiveIdParams {
  live_id: string
}

/**
 * 接口 [删除直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2859) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/instance/{live_id}`
 * @更新时间 `2022-05-30 14:48:56`
 */
export interface LiveRoomInstanceLiveIdResult {
  code: number
  message: string
  request_id: string
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
  live_id: string
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
  code: number
  message: string
  data: {
    live_id: string
    title: string
    notice: string
    cover_url: string
    extends: {
      key: string
      value: string
    }
    anchor_info: {
      id: number
      user_id: string
      im_userid: string
      im_username: string
      avatar: string
      nick: string
      extends: {
        key: string
        value: string
      }
    }
    /**
     * 主播状态。0：离线；1：在线
     */
    anchor_status: number
    room_token: string
    pk_id: string
    online_count: number
    start_time: number
    end_time: number
    chat_id: string
    push_url: string
    hls_url: string
    rtmp_url: string
    flv_url: string
    pv: number
    uv: number
    total_count: number
    total_mics: number
    live_status: number
  }
  request_id: string
}

/**
 * 接口 [停止直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2925) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/{live_id}`
 * @更新时间 `2022-05-30 10:35:15`
 */
export interface LiveRoomLiveIdParams {
  live_id: string
}

/**
 * 接口 [停止直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2925) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/{live_id}`
 * @更新时间 `2022-05-30 10:35:15`
 */
export interface LiveRoomLiveIdResult {
  code: number
  message: string
  request_id: string
}

/**
 * 接口 [开始直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3018) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/{live_id}`
 * @更新时间 `2022-05-31 11:49:16`
 */
export interface LiveRoomLiveIdParams {
  live_id: string
}

/**
 * 接口 [开始直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3018) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/{live_id}`
 * @更新时间 `2022-05-31 11:49:16`
 */
export interface LiveRoomLiveIdResult {
  code: number
  message: string
  data: {
    live_id: string
    title: string
    notice: string
    cover_url: string
    extends: {
      key: string
      value: string
    }
    anchor_info: {
      id: number
      user_id: string
      im_userid: string
      im_username: string
      avatar: string
      nick: string
      extends: {
        key: string
        value: string
      }
    }
    room_token: string
    pk_id: string
    online_count: number
    start_time: number
    end_time: number
    chat_id: string
    push_url: string
    hls_url: string
    rtmp_url: string
    flv_url: string
    pv: number
    uv: number
    total_count: number
    total_mics: number
    live_status: number
  }
  request_id: string
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
  keyword: string
  page_num: string
  page_size: string
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
  code: number
  message: string
  data: {
    total_count: number
    page_total: number
    end_page: boolean
    list: {
      live_id: string
      title: string
      notice: string
      cover_url: string
      extends: {
        key: string
        value: string
      }
      anchor_info: {
        id: number
        user_id: string
        im_userid: string
        im_username: string
        avatar: string
        nick: string
        extends: {
          key: string
          value: string
        }
      }
      room_token: string
      pk_id: string
      online_count: number
      start_time: number
      end_time: number
      chat_id: string
      push_url: string
      hls_url: string
      rtmp_url: string
      flv_url: string
      pv: number
      uv: number
      total_count: number
      total_mics: number
      live_status: number
    }[]
    request_id: string
  }
}

/**
 * 接口 [加入直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3027) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/user/{live_id}`
 * @更新时间 `2022-05-31 11:49:44`
 */
export interface LiveRoomUserLiveIdParams {
  live_id: string
}

/**
 * 接口 [加入直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3027) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `POST /live/room/user/{live_id}`
 * @更新时间 `2022-05-31 11:49:44`
 */
export interface LiveRoomUserLiveIdResult {
  code: number
  message: string
  data: {
    live_id: string
    title: string
    notice: string
    cover_url: string
    extends: {
      key: string
      value: string
    }
    anchor_info: {
      id: number
      user_id: string
      im_userid: string
      im_username: string
      avatar: string
      nick: string
      extends: {
        key: string
        value: string
      }
    }
    room_token: string
    pk_id: string
    online_count: number
    start_time: number
    end_time: number
    chat_id: string
    push_url: string
    hls_url: string
    rtmp_url: string
    flv_url: string
    pv: number
    uv: number
    total_count: number
    total_mics: number
    live_status: number
  }
  request_id: string
}

/**
 * 接口 [直播列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3030) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/list`
 * @更新时间 `2022-05-31 11:49:57`
 */
export interface GetLiveRoomListParams {
  page_num: string
  page_size: string
}

/**
 * 接口 [直播列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3030) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `GET /live/room/list`
 * @更新时间 `2022-05-31 11:49:57`
 */
export interface GetLiveRoomListResult {
  code: number
  message: string
  data: {
    total_count: number
    page_total: number
    end_page: boolean
    list: {
      live_id: string
      title: string
      notice: string
      cover_url: string
      extends: {
        key: string
        value: string
      }
      anchor_info: {
        id: number
        user_id: string
        im_userid: string
        im_username: string
        avatar: string
        nick: string
        extends: {
          key: string
          value: string
        }
      }
      room_token: string
      pk_id: string
      online_count: number
      start_time: number
      end_time: number
      chat_id: string
      push_url: string
      hls_url: string
      rtmp_url: string
      flv_url: string
      pv: number
      uv: number
      total_count: number
      total_mics: number
      live_status: number
    }[]
    request_id: string
  }
}

/**
 * 接口 [离开直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3033) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/user/{live_id}`
 * @更新时间 `2022-05-30 14:51:51`
 */
export interface LiveRoomUserLiveIdParams {
  live_id: string
}

/**
 * 接口 [离开直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3033) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `DELETE /live/room/user/{live_id}`
 * @更新时间 `2022-05-30 14:51:51`
 */
export interface LiveRoomUserLiveIdResult {
  code: number
  message: string
  request_id: string
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
  live_id: string
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
  code: number
  message: string
  data: {
    result: boolean
  }
  request_id: string
}

/**
 * 接口 [更新直播扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3063) 的 **请求类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/extends`
 * @更新时间 `2022-05-31 11:50:52`
 */
export interface LiveRoomExtendsParams {
  live_id: string
  extends: {}
}

/**
 * 接口 [更新直播扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3063) 的 **返回类型**
 *
 * @分类 [直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_391)
 * @标签 `v1`
 * @请求头 `PUT /live/room/extends`
 * @更新时间 `2022-05-31 11:50:52`
 */
export interface LiveRoomExtendsResult {
  code: number
  message: string
  request_id: string
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
  live_id: string
  page_num: string
  page_size: string
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
  code: number
  message: string
  data: {
    total_count: number
    page_total: number
    end_page: boolean
    list: {
      id: number
      user_id: string
      im_userid: number
      im_username: string
      avatar: string
      nick: string
      extends: {
        key: string
        value: string
      }
    }[]
  }
  request_id: string
}

/**
 * 接口 [踢麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3042) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic/live`
 * @更新时间 `2022-05-30 21:55:47`
 */
export interface MicLiveParams {
  live_id: string
  user_id: string
}

/**
 * 接口 [踢麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3042) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic/live`
 * @更新时间 `2022-05-30 21:55:47`
 */
export interface MicLiveResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  request_id: string
}

/**
 * 接口 [上麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3045) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `POST /mic`
 * @更新时间 `2022-06-01 11:14:00`
 */
export interface MicParams {
  live_id: string
  mic: boolean
  camera: boolean
  /**
   * json串
   */
  extends: {}
}

/**
 * 接口 [上麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3045) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `POST /mic`
 * @更新时间 `2022-06-01 11:14:00`
 */
export interface MicResult {
  code: number
  message: string
  data: {
    rtc_token: string
  }
  request_id: string
}

/**
 * 接口 [下麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3048) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic`
 * @更新时间 `2022-06-01 11:14:11`
 */
export interface MicParams {
  live_id: string
  mic: boolean
  camera: boolean
}

/**
 * 接口 [下麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3048) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `DELETE /mic`
 * @更新时间 `2022-06-01 11:14:11`
 */
export interface MicResult {
  code: number
  message: string
  request_id: string
}

/**
 * 接口 [禁麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3051) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/live`
 * @更新时间 `2022-05-30 21:55:34`
 */
export interface MicLiveParams {
  live_id: string
  user_id: string
}

/**
 * 接口 [禁麦---暂不需要↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3051) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/live`
 * @更新时间 `2022-05-30 21:55:34`
 */
export interface MicLiveResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  request_id: string
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
  live_id: string
  user_id: string
  /**
   * mic/camera
   */
  type: string
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
  code: number
  message: string
  data: {
    live_id: string
    user_id: string
    status: number
  }
  request_id: string
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
  live_id: string
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
  code: number
  message: string
  data: {
    user: {
      user_id: string
      nickname: string
      im_userid: string
      im_username: string
      avatar: number
      nick: string
      extends: {}
    }
    extends: {}
    mic: string
    camera: string
    status: number
  }[]
  request_id: string
}

/**
 * 接口 [更新麦位扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3060) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/extension`
 * @更新时间 `2022-05-31 15:45:42`
 */
export interface MicExtensionParams {
  live_id: string
  user_id: string
  extends: {}
}

/**
 * 接口 [更新麦位扩展↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3060) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/extension`
 * @更新时间 `2022-05-31 15:45:42`
 */
export interface MicExtensionResult {
  code: number
  message: string
  request_id: string
}

/**
 * 接口 [打开\/关闭麦克风\/摄像头↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3066) 的 **请求类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/switch`
 * @更新时间 `2022-05-31 15:21:00`
 */
export interface MicSwitchParams {
  live_id: string
  user_id: string
  /**
   * mic/camera
   */
  type: string
  /**
   * on/off
   */
  flag: boolean
}

/**
 * 接口 [打开\/关闭麦克风\/摄像头↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3066) 的 **返回类型**
 *
 * @分类 [连麦↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_395)
 * @标签 `v1`
 * @请求头 `PUT /mic/switch`
 * @更新时间 `2022-05-31 15:21:00`
 */
export interface MicSwitchResult {
  code: string
  message: string
  request_id: string
}

/**
 * 接口 [更新自己的信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2988) 的 **请求类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `PUT /client/user/user`
 * @更新时间 `2022-06-08 10:06:48`
 */
export interface ClientUserUserParams {
  /**
   * 用户头像
   */
  avatar?: string
  /**
   * 扩展信息，map[string]string
   */
  extends?: {}
  /**
   * 用户ID，唯一标识
   */
  id?: string
  /**
   * 对应IM 的用户ID
   */
  im_userid?: number
  /**
   * 用户昵称
   */
  nick?: string
}

/**
 * 接口 [更新自己的信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2988) 的 **返回类型**
 *
 * @分类 [用户(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_402)
 * @请求头 `PUT /client/user/user`
 * @更新时间 `2022-06-08 10:06:48`
 */
export interface ClientUserUserResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应登录IM 的用户密码
     */
    im_password?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 对应登录IM 用户名
     */
    im_username?: string
    /**
     * 用户昵称
     */
    nick?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  id: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 用户昵称
     */
    nick?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  ids: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 用户昵称
     */
    nick?: string
  }[]
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  im_user_ids: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 用户昵称
     */
    nick?: string
  }[]
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/**
 * 接口 [开始跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2970) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/start`
 * @更新时间 `2022-06-08 13:06:47`
 */
export interface ClientRelayStartParams {
  /**
   * 目的房间ID
   */
  recv_room_id: string
  /**
   * 目的主播用户ID
   */
  recv_user_id: string
  /**
   * 发起主播的roomID
   */
  init_room_id: string
}

/**
 * 接口 [开始跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2970) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/start`
 * @更新时间 `2022-06-08 13:06:47`
 */
export interface ClientRelayStartResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 跨房信息，当code 为0 时返回
   */
  data?: {
    /**
     * 跨房会话ID
     */
    relay_id?: string
    /**
     * 跨房状态，此时的状态有：0，等待接收方同意；1，接收方已同意（目的房间不需要确认）
     */
    relay_status?: number
    /**
     * 跨房token
     */
    relay_token?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/**
 * 接口 [同意跨房申请↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2973) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/agree`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface ClientRelayIdAgreeParams {
  /**
   * 跨房会话ID
   */
  id: string
}

/**
 * 接口 [同意跨房申请↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2973) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/agree`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface ClientRelayIdAgreeResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 跨房信息，当code 为0 时返回
   */
  data?: {
    /**
     * 跨房会话ID
     */
    relay_id?: string
    /**
     * 跨房状态，此时的状态有：1，接收方已同意
     */
    relay_status?: number
    /**
     * 跨房token
     */
    relay_token?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/**
 * 接口 [停止跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2976) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/stop`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface ClientRelayIdStopParams {
  /**
   * 跨房会话ID
   */
  id: string
}

/**
 * 接口 [停止跨房↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2976) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/stop`
 * @更新时间 `2022-05-18 16:35:26`
 */
export interface ClientRelayIdStopResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  id: string
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
  code?: number
  /**
   * 跨房信息，当code 为0 时返回
   */
  data?: {
    /**
     * 跨房会话ID
     */
    relay_id?: string
    /**
     * 跨房状态，此时的状态有：1，接收方已同意
     */
    relay_status?: number
    /**
     * 跨房token
     */
    relay_token?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/**
 * 接口 [通知服务端，本端的跨房已经完成↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2982) 的 **请求类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/started`
 * @更新时间 `2022-06-02 14:18:03`
 */
export interface ClientRelayIdStartedParams {
  /**
   * 跨房会话ID
   */
  id: string
}

/**
 * 接口 [通知服务端，本端的跨房已经完成↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/2982) 的 **返回类型**
 *
 * @分类 [跨房PK(客户端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_408)
 * @请求头 `POST /client/relay/{id}/started`
 * @更新时间 `2022-06-02 14:18:03`
 */
export interface ClientRelayIdStartedResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 跨房信息，当code 为0 时返回
   */
  data?: {
    /**
     * 跨房会话ID
     */
    relay_id?: string
    /**
     * 跨房状态，此时的状态有：1，接收方已同意
     */
    relay_status?: number
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  id: string
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
  code?: number
  data?: {
    /**
     * 创建时间
     */
    created_at?: string
    /**
     * 扩展数据
     */
    extensions?: {}
    /**
     * PK 会话ID
     */
    id?: string
    /**
     * 发起方直播间ID
     */
    init_room_id?: string
    /**
     * 发起方主播ID
     */
    init_user_id?: string
    /**
     * 接收方直播间ID
     */
    recv_room_id?: string
    /**
     * 接收方主播ID
     */
    recv_user_id?: string
    /**
     * 开始时间
     */
    start_at?: string
    /**
     * PK 会话状态
     */
    status?: number
    /**
     * 结束时间
     */
    stop_at?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/**
 * 接口 [用户批量注册接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3000) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `POST /server/user`
 * @更新时间 `2022-05-18 16:37:04`
 */
export type ServerUserParams = {
  /**
   * 用户头像
   */
  avatar?: string
  /**
   * 扩展信息，map[string]string
   */
  extends?: {}
  /**
   * 用户ID，唯一标识
   */
  id?: string
  /**
   * 对应IM 的用户ID
   */
  im_userid?: number
  /**
   * 用户昵称
   */
  nick?: string
}[]

/**
 * 接口 [用户批量注册接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3000) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `POST /server/user`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface ServerUserResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  id: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应登录IM 的用户密码
     */
    im_password?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 对应登录IM 用户名
     */
    im_username?: string
    /**
     * 用户昵称
     */
    nick?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应登录IM 的用户密码
     */
    im_password?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 对应登录IM 用户名
     */
    im_username?: string
    /**
     * 用户昵称
     */
    nick?: string
  }[]
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  id: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 用户昵称
     */
    nick?: string
  }
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/**
 * 接口 [更新用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3012) 的 **请求类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `PUT /server/user/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface ServerUserIdParams {
  /**
   * 用户头像
   */
  avatar?: string
  /**
   * 扩展信息，map[string]string
   */
  extends?: {}
  /**
   * 用户ID
   */
  id: string
  /**
   * 对应IM 的用户ID
   */
  im_userid?: number
  /**
   * 用户昵称
   */
  nick?: string
}

/**
 * 接口 [更新用户信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3012) 的 **返回类型**
 *
 * @分类 [用户(服务端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_414)
 * @请求头 `PUT /server/user/{id}`
 * @更新时间 `2022-05-18 16:37:04`
 */
export interface ServerUserIdResult {
  /**
   * 错误码，0 成功，其他失败
   */
  code?: number
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
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
  code?: number
  data?: {
    /**
     * 用户头像
     */
    avatar?: string
    /**
     * 扩展信息，map[string]string
     */
    extends?: {}
    /**
     * 用户ID，唯一标识
     */
    id?: string
    /**
     * 对应IM 的用户ID
     */
    im_userid?: number
    /**
     * 用户昵称
     */
    nick?: string
  }[]
  /**
   * 错误信息
   */
  message?: string
  /**
   * 请求ID
   */
  request_id?: string
}

/* prettier-ignore-end */
