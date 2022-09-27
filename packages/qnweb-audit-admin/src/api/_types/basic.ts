/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File

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
 * 接口 [服务端获取管理员token↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3147) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @标签 `v1`
 * @请求头 `GET /server/auth/admin/token`
 * @更新时间 `2022-09-15 15:19:47`
 */
export interface GetServerAuthAdminTokenResult {
  request_id?: string
  code?: number
  message?: string
  data?: {
    access_token?: string
    expires_at?: number
  }
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
  page_num: string
  /**
   * 页面大小
   */
  page_size: string
  live_id?: string
  /**
   * 不传：全部   0：未审核   1：已审核
   */
  is_review?: string
}

/**
 * 接口 [查看待审核图片\/已审核图片详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3153) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/record`
 * @更新时间 `2022-09-26 17:37:22`
 */
export interface GetAdminCensorRecordResult {
  request_id?: string
  code?: number
  message?: string
  data?: {
    /**
     * 总数
     */
    total_count?: number
    /**
     * 总页数
     */
    page_total?: number
    /**
     * 是否是最后一页
     */
    end_page?: boolean
    list?: {
      id: number
      /**
       * 图片url
       */
      url: string
      /**
       * 鉴定任务ID
       */
      job_id: string
      /**
       * 图片生成时间
       */
      created_at: number
      /**
       * 总体建议："review","block",'"pass"
       */
      suggestion: string
      /**
       * 鉴黄，建议："review","block",'"pass"
       */
      pulp: string
      /**
       * 暴恐，建议："review","block",'"pass"
       */
      terror: string
      /**
       * 敏感人物，建议："review","block",'"pass"
       */
      politician: string
      /**
       * 广告，建议："review","block",'"pass"
       */
      ads: string
      /**
       * 直播间ID
       */
      live_id: string
      /**
       * 是否审核 0：没审核 1：审核
       */
      is_review: number
      /**
       * 审核结果 1 通过；2 违规
       */
      review_answer: number
      /**
       * 审核人userId
       */
      review_user_id: string
      /**
       * 审核时间
       */
      review_time: number
    }[]
  }
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
  page_num: string
  /**
   * 一页大小
   */
  page_size: string
  /**
   * 不发送，全部（默认） ；0，只查看有未审核记录的直播间
   */
  is_review?: string
}

/**
 * 接口 [查看待审核直播间\/已审核直播间↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3156) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `GET /admin/censor/live`
 * @更新时间 `2022-09-28 17:33:51`
 */
export interface GetAdminCensorLiveResult {
  request_id?: string
  code?: number
  message?: string
  data?: {
    /**
     * 总的符合条件的直播间的数量
     */
    total_count?: number
    /**
     * 总页数
     */
    page_total?: number
    /**
     * 是否是最后一页
     */
    end_page?: boolean
    list?: {
      /**
       * 直播间id
       */
      live_id: string
      /**
       * 直播间名称
       */
      title: string
      /**
       * 主播id
       */
      anchor_id: string
      /**
       * 主播名称
       */
      nick: string
      /**
       * 主播状态 0:离线 1：在线
       */
      anchor_status: number
      /**
       * 0，已创建；1，直播中；2，已结束
       */
      live_status: number
      /**
       * 直播间关闭原因
       */
      stop_reason: string
      /**
       * 直播间关闭时间
       */
      stop_at: number
      /**
       * 直播开始时间
       */
      start_at: number
      /**
       * 未审核图片数目
       */
      count: number
      /**
       * 违规次数
       */
      violation_count: number
      /**
       * 最近一次风险预警时间
       */
      time: number | null
      push_url: string
      rtmp_play_url: string
      flv_play_url: string
      hls_play_url: string
      /**
       * ai预警次数
       */
      ai_count: number
    }[]
  }
}

/**
 * 接口 [管理员登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3159) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /manager/login`
 * @更新时间 `2022-09-27 10:19:07`
 */
export interface PostManagerLoginParams {
  user_name?: string
  password?: string
}

/**
 * 接口 [管理员登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3159) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /manager/login`
 * @更新时间 `2022-09-27 10:19:07`
 */
export interface PostManagerLoginResult {
  request_id?: string
  code?: number
  message?: string
  data?: {
    access_token?: string
    expires_at?: number
  }
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
  enable?: boolean
  /**
   * 截帧时长，单位秒
   */
  interval?: number
  pulp?: boolean
  terror?: boolean
  politician?: boolean
  ads?: boolean
}

/**
 * 接口 [修改审核设置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3162) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/config`
 * @更新时间 `2022-09-21 15:57:23`
 */
export interface PostAdminCensorConfigResult {
  request_id?: string
  code?: number
  message?: string
  data?: {
    enable?: boolean
    /**
     * 涉黄
     */
    pulp?: boolean
    /**
     * 暴恐
     */
    terror?: boolean
    /**
     * 敏感人物
     */
    politician?: boolean
    /**
     * 广告
     */
    ads?: boolean
    /**
     * 截帧时长，单位秒
     */
    interval?: number
  }
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
  request_id?: string
  code?: number
  message?: string
  data?: {
    enable?: boolean
    pulp?: boolean
    terror?: boolean
    politician?: boolean
    ads?: boolean
    interval?: number
  }
}

/**
 * 接口 [审核图片↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3168) 的 **请求类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/audit`
 * @更新时间 `2022-09-28 17:26:38`
 */
export interface PostAdminCensorAuditParams {
  live_id?: string
  /**
   * 待审核图片的id
   */
  image_list?: number[]
  /**
   *  1 通过；2 违规
   */
  review_answer?: number
  /**
   * 是否发送违规警告
   */
  notify?: boolean
}

/**
 * 接口 [审核图片↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3168) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/audit`
 * @更新时间 `2022-09-28 17:26:38`
 */
export interface PostAdminCensorAuditResult {
  request_id?: string
  code?: number
  message?: string
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
  live_id: string
}

/**
 * 接口 [强制关闭直播间↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/3171) 的 **返回类型**
 *
 * @分类 [三鉴接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/63/interface/api/cat_462)
 * @请求头 `POST /admin/censor/stoplive/:live_id`
 * @更新时间 `2022-09-23 09:33:17`
 */
export interface PostAdminCensorStopliveLiveIdResult {
  request_id?: string
  code?: number
  message?: string
}

/* prettier-ignore-end */
