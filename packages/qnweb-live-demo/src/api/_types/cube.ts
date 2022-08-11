/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File

/**
 * 接口 [注册&登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1275) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/signUpOrIn`
 * @更新时间 `2021-11-16 11:14:03`
 */
export interface PostSignUpOrInParams {
  /**
   * 手机号
   */
  phone: string
  /**
   * 短信验证码
   */
  smsCode: string
}

/**
 * 接口 [注册&登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1275) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/signUpOrIn`
 * @更新时间 `2021-11-16 11:14:03`
 */
export interface PostSignUpOrInResult {
  code?: number
  message?: string
  data?: {
    /**
     * 账号ID
     */
    accountId: string
    /**
     * 昵称
     */
    nickname: string
    /**
     * 头像URL
     */
    avatar: string
    /**
     * 手机号
     */
    phone: string
    /**
     * 登录TOKEN
     */
    loginToken: string
    imConfig: {
      /**
       * IM TOKEN
       */
      imToken: string
      /**
       * IM类型枚举：https://cf.qiniu.io/pages/viewpage.action?pageId=63570443
       */
      type: number
      /**
       * 七牛IM登录用用户名
       */
      imUsername: string
      /**
       * 七牛IM登录用密码
       */
      imPassword: string
      /**
       * 七牛IM的UID
       */
      imUid: string
    }
  }
}

/**
 * 接口 [获取短信验证码↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1276) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/getSmsCode`
 * @更新时间 `2021-04-20 22:45:08`
 */
export interface PostGetSmsCodeParams {
  phone: string
}

/**
 * 接口 [获取短信验证码↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1276) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/getSmsCode`
 * @更新时间 `2021-04-20 22:45:08`
 */
export interface PostGetSmsCodeResult {
  code?: number
  message?: string
  data?: {}
}

/**
 * 接口 [登出↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1277) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/signOut`
 * @更新时间 `2021-04-22 22:15:33`
 */
export interface PostSignOutParams {}

/**
 * 接口 [登出↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1277) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/signOut`
 * @更新时间 `2021-04-22 22:15:33`
 */
export interface PostSignOutResult {
  code?: number
  message?: string
  /**
   * 为NULL
   */
  data?: {}
}

/**
 * 接口 [用户信息获取↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1278) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/accountInfo/{accountId}`
 * @更新时间 `2021-04-22 13:47:07`
 */
export interface GetAccountInfoAccountIdParams {
  /**
   * 不传则通过登录TOKEN获取，为后续HR修改他人信息预留
   */
  accountId: string
}

/**
 * 接口 [用户信息获取↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1278) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/accountInfo/{accountId}`
 * @更新时间 `2021-04-22 13:47:07`
 */
export interface GetAccountInfoAccountIdResult {
  code: number
  message: string
  data: {
    /**
     * 账号ID
     */
    accountId: string
    /**
     * 昵称
     */
    nickname: string
    /**
     * 头像URL
     */
    avatar: string
    /**
     * 电话
     */
    phone: string
    /**
     * 个性签名
     */
    profile: string
  }
}

/**
 * 接口 [APP全局配置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1279) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/appConfig`
 * @更新时间 `2021-04-20 22:43:58`
 */
export interface GetAppConfigParams {}

/**
 * 接口 [APP全局配置信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1279) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/appConfig`
 * @更新时间 `2021-04-20 22:43:58`
 */
export interface GetAppConfigResult {
  /**
   * 状态码枚举：https://cf.qiniu.io/pages/viewpage.action?pageId=63570443
   */
  code: number
  /**
   * 错误信息：服务端异常展示
   */
  message: string
  data: {
    /**
     * 欢迎页信息
     */
    welcome?: {
      /**
       * 图片链接
       */
      image?: string
      /**
       * 跳转链接
       */
      url?: string
      /**
       * 扩展信息-备用
       */
      extra?: {}
    }
  }
}

/**
 * 接口 [场景列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1280) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/solution`
 * @更新时间 `2021-11-16 10:47:02`
 */
export interface GetSolutionParams {
  /**
   * 默认是10，每页数据条数
   */
  pageSize: string
  /**
   * 默认是1，页码
   */
  pageNum: string
}

/**
 * 接口 [场景列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1280) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/solution`
 * @更新时间 `2021-11-16 10:47:02`
 */
export interface GetSolutionResult {
  code: number
  message: string
  data?: {
    /**
     * 全部数据数量
     */
    total: number
    /**
     * 暂不需要
     */
    nextId?: string
    /**
     * 当前页码
     */
    currentPageNum: number
    /**
     * 下页页码，如果无下页则和当前页页码一致
     */
    nextPageNum: number
    /**
     * 当前页预计条数
     */
    pageSize: number
    /**
     * 是否最后一页
     */
    endPage: boolean
    /**
     * 当前分页数量
     */
    cnt: number
    /**
     * 场景列表
     */
    list: {
      /**
       * 场景ID
       */
      id: string
      /**
       * 场景标题
       */
      title: string
      /**
       * 场景跳转连接
       */
      url: string
      /**
       * 场景文字描述
       */
      desc: string
      /**
       * 场景图标
       */
      icon: string
    }[]
  }
}

/**
 * 接口 [用户信息修改↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1281) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/accountInfo/{accountId}`
 * @更新时间 `2021-04-26 13:54:56`
 */
export interface PostAccountInfoAccountIdParams {
  nickname: string
  /**
   * 不传则通过登录TOKEN获取，为后续HR修改他人信息预留
   */
  accountId: string
}

/**
 * 接口 [用户信息修改↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1281) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/accountInfo/{accountId}`
 * @更新时间 `2021-04-26 13:54:56`
 */
export interface PostAccountInfoAccountIdResult {
  code: number
  message: string
  data?: {}
}

/**
 * 接口 [token登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1293) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/signInWithToken`
 * @更新时间 `2021-04-22 13:48:17`
 */
export interface PostSignInWithTokenParams {}

/**
 * 接口 [token登录↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1293) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/signInWithToken`
 * @更新时间 `2021-04-22 13:48:17`
 */
export interface PostSignInWithTokenResult {
  code: number
  message: string
  data: {
    /**
     * 账号ID
     */
    accountId: string
    /**
     * 昵称
     */
    nickname: string
    /**
     * 头像URL
     */
    avatar: string
    /**
     * 手机号
     */
    phone: string
    /**
     * 登录TOKEN
     */
    loginToken: string
    /**
     * 个性签名
     */
    profile: string
    imConfig: {
      /**
       * IM TOKEN
       */
      imToken: string
      /**
       * IM类型枚举：https://cf.qiniu.io/pages/viewpage.action?pageId=63570443
       */
      type: number
    }
  }
}

/**
 * 接口 [获取内容的token值↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2274) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/token/getToken`
 * @更新时间 `2021-09-27 16:57:24`
 */
export interface PostTokenGetTokenParams {
  /**
   * 内容
   */
  content?: string
}

/**
 * 接口 [获取内容的token值↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2274) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/token/getToken`
 * @更新时间 `2021-09-27 16:57:24`
 */
export interface PostTokenGetTokenResult {
  code?: number
  message?: string
  data?: {
    token?: string
  }
  requestId?: string
}

/**
 * 接口 [获取最近的一张照片↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2499) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/recentImage`
 * @更新时间 `2021-12-08 17:34:18`
 */
export interface GetRecentImageParams {}

/**
 * 接口 [获取最近的一张照片↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2499) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /v1/recentImage`
 * @更新时间 `2021-12-08 17:34:18`
 */
export interface GetRecentImageResult {
  code?: number
  message?: string
  data?: {
    id?: string
    fileName?: string
    fileUrl?: string
    status?: number
  }
  requestId?: string
}

/**
 * 接口 [上传文件↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2508) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/upload`
 * @更新时间 `2021-12-08 17:38:34`
 */
export interface PostUploadParams {
  file: FileData
}

/**
 * 接口 [上传文件↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2508) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `POST /v1/upload`
 * @更新时间 `2021-12-08 17:38:34`
 */
export interface PostUploadResult {
  code?: number
  message?: string
  data?: {
    id?: string
    fileName?: string
    fileUrl?: string
    status?: number
  }
  requestId?: string
}

/**
 * 接口 [获取推流地址↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2832) 的 **请求类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /base/rtmpUrl`
 * @更新时间 `2022-04-27 15:06:04`
 */
export interface GetBaseRtmpUrlParams {
  hub: string
  streamTile: string
  /**
   * 单位：秒
   */
  expiredAt: string
}

/**
 * 接口 [获取推流地址↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2832) 的 **返回类型**
 *
 * @分类 [v1通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_277)
 * @标签 `v1`
 * @请求头 `GET /base/rtmpUrl`
 * @更新时间 `2022-04-27 15:06:04`
 */
export interface GetBaseRtmpUrlResult {
  code: number
  message: string
  data: {
    rtmpUrl: string
  }
  requestId: string
}

/**
 * 接口 [场景列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2436) 的 **请求类型**
 *
 * @分类 [v2通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_380)
 * @标签 `v2`
 * @请求头 `GET /v2/solution`
 * @更新时间 `2021-11-16 11:11:56`
 */
export interface GetSolutionParams {
  /**
   * 默认是10，每页数据条数
   */
  pageSize: string
  /**
   * 默认是1，页码
   */
  pageNum: string
}

/**
 * 接口 [场景列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2436) 的 **返回类型**
 *
 * @分类 [v2通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_380)
 * @标签 `v2`
 * @请求头 `GET /v2/solution`
 * @更新时间 `2021-11-16 11:11:56`
 */
export interface GetSolutionResult {
  code: number
  message: string
  data?: {
    /**
     * 全部数据数量
     */
    total: number
    /**
     * 暂不需要
     */
    nextId?: string
    /**
     * 当前页码
     */
    currentPageNum: number
    /**
     * 下页页码，如果无下页则和当前页页码一致
     */
    nextPageNum: number
    /**
     * 当前页预计条数
     */
    pageSize: number
    /**
     * 是否最后一页
     */
    endPage: boolean
    /**
     * 当前分页数量
     */
    cnt: number
    /**
     * 场景列表
     */
    list: {
      /**
       * 场景ID
       */
      id: string
      /**
       * 场景标题
       */
      title: string
      /**
       * 场景跳转连接
       */
      url: string
      /**
       * 场景文字描述
       */
      desc: string
      /**
       * 场景图标
       */
      icon: string
    }[]
  }
}

/**
 * 接口 [上传更新App↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2760) 的 **请求类型**
 *
 * @分类 [v2通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_380)
 * @标签 `v2`
 * @请求头 `POST /v2/app/updates`
 * @更新时间 `2022-03-09 10:49:57`
 */
export interface PostAppUpdatesParams {
  version: string
  msg: string
  packagePage: string
  packageUrl: string
  /**
   * ios/android
   */
  arch: string
}

/**
 * 接口 [上传更新App↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2760) 的 **返回类型**
 *
 * @分类 [v2通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_380)
 * @标签 `v2`
 * @请求头 `POST /v2/app/updates`
 * @更新时间 `2022-03-09 10:49:57`
 */
export interface PostAppUpdatesResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [更新App↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2769) 的 **请求类型**
 *
 * @分类 [v2通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_380)
 * @标签 `v2`
 * @请求头 `GET /v2/app/updates`
 * @更新时间 `2022-03-09 10:50:05`
 */
export interface GetAppUpdatesParams {
  /**
   * 当前版本
   */
  version: string
  /**
   * ios/android
   */
  arch: string
}

/**
 * 接口 [更新App↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2769) 的 **返回类型**
 *
 * @分类 [v2通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_380)
 * @标签 `v2`
 * @请求头 `GET /v2/app/updates`
 * @更新时间 `2022-03-09 10:50:05`
 */
export interface GetAppUpdatesResult {
  code: number
  message: string
  data: {
    version: string
    msg: string
    /**
     * 如果已是最新，则此项为空，否则为新版本包下载页面
     */
    packagePage: string
    /**
     * 如果已是最新，则此项为空，否则为新版本包下载地址
     */
    packageUrl: string
  }
  requestId: string
}

/**
 * 接口 [电影列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2454) 的 **请求类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `GET /v1/watchMoviesTogether/movieList`
 * @更新时间 `2021-11-25 11:11:02`
 */
export interface GetWatchMoviesTogetherMovieListParams {
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [电影列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2454) 的 **返回类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `GET /v1/watchMoviesTogether/movieList`
 * @更新时间 `2021-11-25 11:11:02`
 */
export interface GetWatchMoviesTogetherMovieListResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: string
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      movieId?: string
      name?: string
      director?: string
      image?: string
      actorList?: string[]
      kindList?: string[]
      /**
       * 字幕(可选)
       */
      lyrics?: string
      /**
       * 播放地址
       */
      playUrl?: string
      duration?: number
      desc?: string
      doubanScore?: number
      imdbScore?: number
      releaseTime?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [已选电影列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2463) 的 **请求类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `GET /v1/watchMoviesTogether/selectedMovieList`
 * @更新时间 `2021-11-25 11:11:49`
 */
export interface GetWatchMoviesTogetherSelectedMovieListParams {
  roomId: string
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [已选电影列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2463) 的 **返回类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `GET /v1/watchMoviesTogether/selectedMovieList`
 * @更新时间 `2021-11-25 11:11:49`
 */
export interface GetWatchMoviesTogetherSelectedMovieListResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: string
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      movieId?: string
      name?: string
      director?: string
      image?: string
      actorList?: string[]
      kindList?: string[]
      duration?: number
      playUrl?: string
      lyrics?: string
      desc?: string
      douban_score?: number
      imdb_score?: number
      /**
       * 毫秒级时间
       */
      release_time?: number
      /**
       * 点播人
       */
      demander?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [电影操作↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2472) 的 **请求类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `POST /v1/watchMoviesTogether/movieOperation`
 * @更新时间 `2021-12-08 11:41:45`
 */
export interface PostWatchMoviesTogetherMovieOperationParams {
  roomId: string
  movieId: string
  /**
   * select/delete
   */
  operateType: string
}

/**
 * 接口 [电影操作↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2472) 的 **返回类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `POST /v1/watchMoviesTogether/movieOperation`
 * @更新时间 `2021-12-08 11:41:45`
 */
export interface PostWatchMoviesTogetherMovieOperationResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [获取电影信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2481) 的 **请求类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `GET /v1/watchMoviesTogether/movieInfo`
 * @更新时间 `2021-11-25 11:12:11`
 */
export interface GetWatchMoviesTogetherMovieInfoParams {
  movieId: string
}

/**
 * 接口 [获取电影信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2481) 的 **返回类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `GET /v1/watchMoviesTogether/movieInfo`
 * @更新时间 `2021-11-25 11:12:11`
 */
export interface GetWatchMoviesTogetherMovieInfoResult {
  code?: number
  message?: string
  data?: {
    song?: {}
    movieId?: string
    name?: string
    director?: string
    image?: string
    actorList?: string[]
    kindList?: string[]
    duration?: number
    playUrl?: string
    lyrics?: string
    desc?: string
    doubanScore?: number
    imdbScore?: number
    releaseTime?: number
  }
  requestId?: string
}

/**
 * 接口 [切换电影↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2490) 的 **请求类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `POST /v1/watchMoviesTogether/switchMovie`
 * @更新时间 `2021-11-24 14:16:41`
 */
export interface PostWatchMoviesTogetherSwitchMovieParams {
  roomId: string
  movieId: string
}

/**
 * 接口 [切换电影↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2490) 的 **返回类型**
 *
 * @分类 [在线看电影场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_383)
 * @标签 `v1`
 * @请求头 `POST /v1/watchMoviesTogether/switchMovie`
 * @更新时间 `2021-11-24 14:16:41`
 */
export interface PostWatchMoviesTogetherSwitchMovieResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [创建考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2526) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/create`
 * @更新时间 `2022-01-12 10:31:54`
 */
export interface PostExamCreateParams {
  name: string
  startTime: number
  endTime: number
  type?: string
  desc?: string
  examinees?: string[]
  paper: {
    name: string
    questionList: string[]
  }
}

/**
 * 接口 [创建考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2526) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/create`
 * @更新时间 `2022-01-12 10:31:54`
 */
export interface PostExamCreateResult {
  code?: number
  message?: string
  data?: {
    examId: string
  }
  requestId?: string
}

/**
 * 接口 [获取考试列表(学生端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2535) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/list/student`
 * @更新时间 `2022-01-12 10:25:30`
 */
export interface GetExamListStudentParams {
  pageNum: string
  /**
   * 默认10
   */
  pageSize?: string
}

/**
 * 接口 [获取考试列表(学生端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2535) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/list/student`
 * @更新时间 `2022-01-12 10:25:30`
 */
export interface GetExamListStudentResult {
  code: number
  message: string
  data: {
    total: number
    nextId: string
    cnt: number
    currentPageNum: number
    nextPageNum: number
    pageSize: number
    endPage: boolean
    list: {
      examId: string
      examName: string
      startTime: number
      endTime: number
      duration: number
      type: string
      desc: string
      creator: string
      /**
       * 1待参与，2参与中，3已结束
       */
      status: number
    }[]
  }
  requestId: string
}

/**
 * 接口 [参加考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2544) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/join`
 * @更新时间 `2022-01-12 16:47:59`
 */
export interface PostExamJoinParams {
  examId: string
  roomId: string
}

/**
 * 接口 [参加考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2544) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/join`
 * @更新时间 `2022-01-12 16:47:59`
 */
export interface PostExamJoinResult {
  /**
   * 401011:时间不匹配 401012:已退出而又参加
   */
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [退出考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2553) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/leave`
 * @更新时间 `2022-01-12 10:29:07`
 */
export interface PostExamLeaveParams {
  examId: string
}

/**
 * 接口 [退出考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2553) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/leave`
 * @更新时间 `2022-01-12 10:29:07`
 */
export interface PostExamLeaveResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [获取试卷↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2562) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/paper/{examId}`
 * @更新时间 `2022-01-12 10:28:56`
 */
export interface GetExamPaperExamIdParams {
  examId: string
}

/**
 * 接口 [获取试卷↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2562) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/paper/{examId}`
 * @更新时间 `2022-01-12 10:28:56`
 */
export interface GetExamPaperExamIdResult {
  code: number
  message: string
  data?: {
    paperName: string
    totalScore: number
    questionList: {
      questionId: string
      type: string
      score: number
      desc: string
      choiceList: string[]
    }[]
  }
  requestId?: string
}

/**
 * 接口 [提交答案↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2571) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/answer`
 * @更新时间 `2022-01-12 10:29:15`
 */
export interface PostExamAnswerParams {
  examId: string
  answerList: {
    questionId: string
    textList: string[]
  }[]
}

/**
 * 接口 [提交答案↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2571) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/answer`
 * @更新时间 `2022-01-12 10:29:15`
 */
export interface PostExamAnswerResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [作答详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2580) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/answer/details/{examId}/{userId}`
 * @更新时间 `2022-01-12 10:29:22`
 */
export interface GetExamAnswerDetailsExamIdUserIdParams {
  examId: string
  userId: string
}

/**
 * 接口 [作答详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2580) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/answer/details/{examId}/{userId}`
 * @更新时间 `2022-01-12 10:29:22`
 */
export interface GetExamAnswerDetailsExamIdUserIdResult {
  code: number
  message: string
  data: {
    paperName: string
    totalScore: number
    list: {
      questionId: string
      question: {
        type: string
        score: number
        desc: string
        choiceList: string[]
        answer: {
          textList: string[]
          correct: boolean
        }
      }
    }[]
  }
  requestId: string
}

/**
 * 接口 [批改试卷(预留)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2589) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/paper/mark`
 * @更新时间 `2022-01-12 10:29:32`
 */
export interface PostExamPaperMarkParams {
  examId: string
  userId: string
  questionId: string
  score: number
}

/**
 * 接口 [批改试卷(预留)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2589) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/paper/mark`
 * @更新时间 `2022-01-12 10:29:32`
 */
export interface PostExamPaperMarkResult {
  code: number
  message: string
  data: boolean
  requestId: string
}

/**
 * 接口 [添加考题(与答案)(预留)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2598) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/questions/add`
 * @更新时间 `2022-01-14 10:43:45`
 */
export interface PostExamQuestionsAddParams {
  questions: {
    question: {
      type: string
      score: number
      desc: string
      choiceList: string[]
      answer: {
        textList: string[]
      }
    }
  }[]
}

/**
 * 接口 [添加考题(与答案)(预留)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2598) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/questions/add`
 * @更新时间 `2022-01-14 10:43:45`
 */
export interface PostExamQuestionsAddResult {
  code: number
  message: string
  data: boolean
  requestId: string
}

/**
 * 接口 [更新考题(或答案)(预留)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2607) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/questions/update`
 * @更新时间 `2022-01-14 11:44:02`
 */
export interface PostExamQuestionsUpdateParams {
  questions: {
    questionId: string
    question: {
      type?: string
      score?: number
      desc?: string
      choiceList?: string[]
      answer: {
        textList?: string
      }
    }
  }[]
}

/**
 * 接口 [更新考题(或答案)(预留)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2607) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/questions/update`
 * @更新时间 `2022-01-14 11:44:02`
 */
export interface PostExamQuestionsUpdateResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [考场信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2616) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/info/{examId}`
 * @更新时间 `2022-01-14 14:47:31`
 */
export interface GetExamInfoExamIdParams {
  examId: string
}

/**
 * 接口 [考场信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2616) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/info/{examId}`
 * @更新时间 `2022-01-14 14:47:31`
 */
export interface GetExamInfoExamIdResult {
  code: number
  message: string
  data: {
    examName: string
    startTime: number
    endTime: number
    duration: number
    type: string
    desc: string
    creator: string
    /**
     * 1:已创建 2进行中 3已结束
     */
    status: number
  }
  requestId?: string
}

/**
 * 接口 [获取考试列表(教师端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2625) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/list/teacher`
 * @更新时间 `2022-01-14 14:55:30`
 */
export interface GetExamListTeacherParams {
  pageNum: string
  /**
   * 默认10
   */
  pageSize?: string
}

/**
 * 接口 [获取考试列表(教师端)↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2625) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/list/teacher`
 * @更新时间 `2022-01-14 14:55:30`
 */
export interface GetExamListTeacherResult {
  code: number
  message: string
  data: {
    total: number
    nextId: string
    cnt: number
    currentPageNum: number
    nextPageNum: number
    pageSize: number
    endPage: boolean
    list: {
      examId: string
      examName: string
      startTime: number
      endTime: number
      duration: number
      type: string
      desc: string
      creator: string
      /**
       * 1已创建 2进行中 3已结束
       */
      status: number
      paper: {
        paperName: string
        questionList: string[]
      }
    }[]
  }
  requestId: string
}

/**
 * 接口 [试题列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2634) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/questionList/{type}`
 * @更新时间 `2022-01-12 10:25:38`
 */
export interface GetExamQuestionListTypeParams {
  pageNum: string
  /**
   * 默认10
   */
  pageSize?: string
  /**
   * 如果默认所有，则填all，不可为空！
   */
  type: string
}

/**
 * 接口 [试题列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2634) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/questionList/{type}`
 * @更新时间 `2022-01-12 10:25:38`
 */
export interface GetExamQuestionListTypeResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: number
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      questionId?: string
      type?: string
      score?: number
      desc?: string
      choiceList?: string[]
    }[]
  }
  requestId?: string
}

/**
 * 接口 [更新考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2643) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/update`
 * @更新时间 `2022-01-12 10:30:52`
 */
export interface PostExamUpdateParams {
  examId: string
  name?: string
  startTime?: number
  endTime?: number
  type?: string
  desc?: string
  examinees?: string[]
  paper?: {
    name: string
    questionList: string[]
  }
}

/**
 * 接口 [更新考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2643) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/update`
 * @更新时间 `2022-01-12 10:30:52`
 */
export interface PostExamUpdateResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [删除考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2652) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/delete`
 * @更新时间 `2022-02-23 10:56:59`
 */
export interface PostExamDeleteParams {
  examId: string
}

/**
 * 接口 [删除考试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2652) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/delete`
 * @更新时间 `2022-02-23 10:56:59`
 */
export interface PostExamDeleteResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [加入考试房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2661) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/roomToken`
 * @更新时间 `2022-01-12 10:36:02`
 */
export interface GetExamRoomTokenParams {
  roomId: string
}

/**
 * 接口 [加入考试房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2661) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/roomToken`
 * @更新时间 `2022-01-12 10:36:02`
 */
export interface GetExamRoomTokenResult {
  code: number
  message: string
  /**
   * roomToken
   */
  data: {
    roomToken: string
  }
  requestId: string
}

/**
 * 接口 [考场学生列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2670) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/examinees/{examId}`
 * @更新时间 `2022-02-09 14:44:23`
 */
export interface GetExamExamineesExamIdParams {
  pageNum: string
  /**
   * 默认10
   */
  pageSize?: string
  examId: string
}

/**
 * 接口 [考场学生列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2670) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/examinees/{examId}`
 * @更新时间 `2022-02-09 14:44:23`
 */
export interface GetExamExamineesExamIdResult {
  code: number
  message: string
  data: {
    total: number
    nextId: string
    cnt: number
    currentPageNum: number
    nextPageNum: number
    pageSize: number
    endPage: boolean
    list: {
      userId: string
      roomInfo: {
        roomId: string
      }
      userName: string
      /**
       * 1未开始 2答卷中 3已交卷
       */
      examPaperStatus: number
      rtcInfo: {
        publishUrl: string
        rtmpPlayUrl: string
        flvPlayUrl: string
        hlsPlayUrl: string
        roomToken: string
      }
    }[]
  }
  requestId: string
}

/**
 * 接口 [删除题目↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2679) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/question/delete`
 * @更新时间 `2022-01-14 11:20:08`
 */
export interface PostExamQuestionDeleteParams {
  questionId: string
}

/**
 * 接口 [删除题目↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2679) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/question/delete`
 * @更新时间 `2022-01-14 11:20:08`
 */
export interface PostExamQuestionDeleteResult {
  code?: number
  message?: string
  data?: {
    result?: boolean
  }
  requestId?: string
}

/**
 * 接口 [上报作弊日志↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2688) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/eventLog`
 * @更新时间 `2022-01-25 13:56:10`
 */
export interface PostExamEventLogParams {
  examId: string
  userId: string
  event: {
    action: string
    value?: string
  }
}

/**
 * 接口 [上报作弊日志↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2688) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/eventLog`
 * @更新时间 `2022-01-25 13:56:10`
 */
export interface PostExamEventLogResult {
  code: number
  message: string
  data: {
    result: boolean
  }
  requestId: string
}

/**
 * 接口 [轮询作弊日志↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2715) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/eventLog/more`
 * @更新时间 `2022-02-09 14:55:13`
 */
export interface PostExamEventLogMoreParams {
  userList: string[]
  /**
   * 首次查询传-1
   */
  lastTimestamp: number
  examId: string
}

/**
 * 接口 [轮询作弊日志↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2715) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `POST /v1/exam/eventLog/more`
 * @更新时间 `2022-02-09 14:55:13`
 */
export interface PostExamEventLogMoreResult {
  code: number
  message: string
  data: {
    timestamp: number
    list: {
      userId: string
      eventList: {
        action: string
        value: string
        timestamp: number
      }[]
    }[]
  }
  requestId: string
}

/**
 * 接口 [AIToken↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2724) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/aiToken`
 * @更新时间 `2022-01-26 16:55:30`
 */
export interface GetExamAiTokenParams {
  /**
   * 空表示只要AiToken
   */
  url?: string
}

/**
 * 接口 [AIToken↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2724) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /v1/exam/aiToken`
 * @更新时间 `2022-01-26 16:55:30`
 */
export interface GetExamAiTokenResult {
  code: number
  message: string
  data: {
    /**
     * http 请求的 token
     */
    aiToken: string
    /**
     * WebSocket 语音转文字的 token
     */
    signToken?: string
  }
  requestId: string
}

/**
 * 接口 [PandoraToken接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2742) 的 **请求类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /pandora/token`
 * @更新时间 `2022-02-15 11:20:31`
 */
export interface GetPandoraTokenParams {}

/**
 * 接口 [PandoraToken接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2742) 的 **返回类型**
 *
 * @分类 [在线考试接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_386)
 * @标签 `v1`
 * @请求头 `GET /pandora/token`
 * @更新时间 `2022-02-15 11:20:31`
 */
export interface GetPandoraTokenResult {
  code: string
  message: string
  data: {
    token: string
  }
  requestId: string
}

/**
 * 接口 [创建通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2778) 的 **请求类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `POST /api/channelchoice`
 * @更新时间 `2022-03-09 16:23:26`
 */
export interface PostApiChannelchoiceParams {
  template_id: string
  region: string
  region_name: string
  /**
   * 运营商
   */
  operator: string
  channel_id: string
  channel_name: string
}

/**
 * 接口 [创建通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2778) 的 **返回类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `POST /api/channelchoice`
 * @更新时间 `2022-03-09 16:23:26`
 */
export interface PostApiChannelchoiceResult {}

/**
 * 接口 [更新通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2787) 的 **请求类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `PUT /api/channelchoice/{id}`
 * @更新时间 `2022-03-09 16:23:49`
 */
export interface PutApiChannelchoiceIdParams {
  template_id: string
  region: string
  region_name: string
  operator: string
  channel_id: string
  channel_name: string
  id: string
}

/**
 * 接口 [更新通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2787) 的 **返回类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `PUT /api/channelchoice/{id}`
 * @更新时间 `2022-03-09 16:23:49`
 */
export interface PutApiChannelchoiceIdResult {}

/**
 * 接口 [列举通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2796) 的 **请求类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `GET /api/channelchoice`
 * @更新时间 `2022-03-09 16:24:34`
 */
export interface GetApiChannelchoiceParams {
  /**
   * 默认1
   */
  page: string
  /**
   * 默认10
   */
  page_size: string
  /**
   * global/local/<空串>
   */
  region?: string
  /**
   * 运营商
   */
  operator?: string
}

/**
 * 接口 [列举通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2796) 的 **返回类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `GET /api/channelchoice`
 * @更新时间 `2022-03-09 16:24:34`
 */
export interface GetApiChannelchoiceResult {
  page: number
  page_size: number
  total: number
  items: {
    id: string
    template_id: string
    region: string
    region_name: string
    operator: string
    channel_id: string
    channel_name: string
  }[]
}

/**
 * 接口 [删除通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2805) 的 **请求类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `DELETE /api/channelchoice/{id}`
 * @更新时间 `2022-03-08 15:01:24`
 */
export interface DeleteApiChannelchoiceIdParams {
  id: string
}

/**
 * 接口 [删除通道选择↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2805) 的 **返回类型**
 *
 * @分类 [短信接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_388)
 * @标签 `v2`
 * @请求头 `DELETE /api/channelchoice/{id}`
 * @更新时间 `2022-03-08 15:01:24`
 */
export interface DeleteApiChannelchoiceIdResult {}

/**
 * 接口 [互动直播获取令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/3069) 的 **请求类型**
 *
 * @分类 [V1互动直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_420)
 * @请求头 `GET /v1/live/auth_token`
 * @更新时间 `2022-05-26 16:01:21`
 */
export interface GetLiveAuthTokenParams {
  /**
   * string
   */
  userID: string
  /**
   * string
   */
  deviceID: string
}

/**
 * 接口 [互动直播获取令牌↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/3069) 的 **返回类型**
 *
 * @分类 [V1互动直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_420)
 * @请求头 `GET /v1/live/auth_token`
 * @更新时间 `2022-05-26 16:01:21`
 */
export interface GetLiveAuthTokenResult {
  code?: number
  message?: string
  data?: {
    accessToken?: string
    expiresAt?: number
  }
  requestId?: string
}

/**
 * 接口 [是否已填写过 七牛云账号是否注册等信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/3081) 的 **请求类型**
 *
 * @分类 [V1互动直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_420)
 * @请求头 `GET /v1/live/IsRegister`
 * @更新时间 `2022-08-08 15:06:29`
 */
export interface GetLiveIsRegisterParams {}

/**
 * 接口 [是否已填写过 七牛云账号是否注册等信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/3081) 的 **返回类型**
 *
 * @分类 [V1互动直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_420)
 * @请求头 `GET /v1/live/IsRegister`
 * @更新时间 `2022-08-08 15:06:29`
 */
export interface GetLiveIsRegisterResult {
  code?: number
  message?: string
  /**
   * true:已填写过，不用再次填写；false：没有填写过
   */
  data?: boolean
  requestId?: string
}

/**
 * 接口 [统计注册与否信息和账号↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/3084) 的 **请求类型**
 *
 * @分类 [V1互动直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_420)
 * @标签 `v1`
 * @请求头 `POST /v1/live/statistics`
 * @更新时间 `2022-08-08 16:02:09`
 */
export interface PostLiveStatisticsParams {
  isQiniuUser?: boolean
  userName?: string
}

/**
 * 接口 [统计注册与否信息和账号↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/3084) 的 **返回类型**
 *
 * @分类 [V1互动直播↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_420)
 * @标签 `v1`
 * @请求头 `POST /v1/live/statistics`
 * @更新时间 `2022-08-08 16:02:09`
 */
export interface PostLiveStatisticsResult {
  code?: number
  message?: string
  data?: null
  requestId?: string
}

/**
 * 接口 [面试列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1282) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `GET /v1/interview`
 * @更新时间 `2021-05-21 10:08:48`
 */
export interface GetInterviewParams {
  /**
   * 默认是10，每页数据条数
   */
  pageSize?: string
  /**
   * 默认是1，页码
   */
  pageNum?: string
}

/**
 * 接口 [面试列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1282) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `GET /v1/interview`
 * @更新时间 `2021-05-21 10:08:48`
 */
export interface GetInterviewResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: number
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      id: string
      title: string
      goverment: string
      career: string
      candidateId: string
      candidateName: string
      candidatePhone: string
      interviewerName: string
      interviewerPhone: string
      interviewerId: string
      startTime: number
      endTime: number
      status: string
      statusCode: number
      roleCode: number
      role: string
      isAuth: boolean
      authCode: string
      isRecorded: boolean
      /**
       * 小程序分享码
       */
      appletQrcode: string
      recorded: boolean
      /**
       * 录制结束后 若开启房间开启录制 会有录制URL
       */
      recordUrl: string
      options: string[]
      shareInfo: {
        url?: string
        icon?: string
        content?: string
      }
    }[]
  }
  requestId?: string
}

/**
 * 接口 [创建面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1283) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/interview`
 * @更新时间 `2021-04-23 11:41:59`
 */
export interface PostInterviewParams {
  /**
   * 标题
   */
  title: string
  /**
   * 开始时间，秒级别
   */
  startTime: string
  /**
   * 结束时间，秒级别
   */
  endTime: string
  /**
   * 公司部门
   */
  goverment: string
  /**
   * 职位
   */
  career: string
  /**
   * 是否开启入会密码 true/false
   */
  isAuth: string
  /**
   * 入会密码
   */
  authCode?: string
  /**
   * 是否进行录制 true/false
   */
  isRecorded: string
  /**
   * 应聘者姓名
   */
  candidateName: string
  /**
   * 应聘者手机号
   */
  candidatePhone: string
  /**
   * 面试官姓名（HR代订时需要填写）
   */
  interviewerName?: string
  /**
   * 面试官手机号（HR代订时需要填写）
   */
  interviewerPhone?: string
}

/**
 * 接口 [创建面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1283) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/interview`
 * @更新时间 `2021-04-23 11:41:59`
 */
export interface PostInterviewResult {
  code: number
  message: string
  data: {
    /**
     * 面试ID
     */
    id: string
  }
}

/**
 * 接口 [面试详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1284) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `GET /v1/interview/{interviewId}`
 * @更新时间 `2021-04-27 20:09:22`
 */
export interface GetInterviewInterviewIdParams {
  /**
   * {"userId":"xxx"} 做base64编码
   */
  interviewToken?: string
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [面试详情↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1284) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `GET /v1/interview/{interviewId}`
 * @更新时间 `2021-04-27 20:09:22`
 */
export interface GetInterviewInterviewIdResult {
  code?: number
  message?: string
  data?: {
    id?: string
    title?: string
    goverment?: string
    career?: string
    candidateId?: string
    candidateName?: string
    candidatePhone?: string
    interviewerName?: string
    interviewerPhone?: string
    interviewerId?: string
    startTime?: number
    endTime?: number
    status?: string
    statusCode?: number
    roleCode?: number
    role?: string
    isAuth?: boolean
    authCode?: string
    isRecorded?: boolean
    options?: {
      type: number
      title: string
      requestUrl: string
      method: string
    }[]
    shareInfo?: {
      url?: string
      icon?: string
      content?: string
    }
  }
}

/**
 * 接口 [结束面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1287) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/endInterview/{interviewId}`
 * @更新时间 `2021-04-27 14:42:08`
 */
export interface PostEndInterviewInterviewIdParams {
  /**
   * {"userId":"xxx"} 做base64编码
   */
  interviewToken?: string
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [结束面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1287) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/endInterview/{interviewId}`
 * @更新时间 `2021-04-27 14:42:08`
 */
export interface PostEndInterviewInterviewIdResult {
  code: number
  message: string
  data: {
    /**
     * 面试ID
     */
    id: string
  }
}

/**
 * 接口 [取消面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1288) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/cancelInterview/{inteviewId}`
 * @更新时间 `2021-04-23 02:18:28`
 */
export interface PostCancelInterviewInteviewIdParams {
  /**
   * 面试ID
   */
  inteviewId: string
}

/**
 * 接口 [取消面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1288) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/cancelInterview/{inteviewId}`
 * @更新时间 `2021-04-23 02:18:28`
 */
export interface PostCancelInterviewInteviewIdResult {
  code: number
  message: string
  data: {
    /**
     * 面试ID
     */
    id: string
  }
}

/**
 * 接口 [进入面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1289) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/joinInterview/{interviewId}`
 * @更新时间 `2021-11-16 11:19:52`
 */
export interface PostJoinInterviewInterviewIdParams {
  /**
   * {"userId":"xxx"} 做base64编码
   */
  interviewToken?: string
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [进入面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1289) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/joinInterview/{interviewId}`
 * @更新时间 `2021-11-16 11:19:52`
 */
export interface PostJoinInterviewInterviewIdResult {
  code: number
  message: string
  data: {
    interview: {
      id: string
      title: string
      goverment: string
      career: string
      candidateId: string
      candidateName: string
      candidatePhone: string
      interviewerName: string
      interviewerPhone: string
      interviewerId: string
      startTime: number
      endTime: number
      status: string
      statusCode: number
      roleCode: number
      role: string
      isAuth: boolean
      enableJoinAuth: string
      isRecorded: boolean
      options: {
        type: number
        title: string
        requestUrl: string
        method: string
      }[]
      shareInfo: {
        url: string
        icon: string
        content: string
      }
    }
    imConfig: {
      /**
       * IM聊天室ID
       */
      imGroupId: number
      /**
       * 七牛IM=2
       */
      type: string
    }
    /**
     * 当前进房用户信息
     */
    userInfo: {
      accountId: string
      nickname: string
      avatar: string
      phone: string
      profile: string
    }
    /**
     * 七牛云房间TOKEN
     */
    roomToken: string
    /**
     * 在线用户列表
     */
    onlineUserList: {
      accountId: string
      nickname: string
      avatar: string
      phone: string
      profile: string
    }[]
    /**
     * 全部用户列表
     */
    allUserList: {
      accountId: string
      nickname: string
      avatar: string
      phone: string
      profile: string
    }[]
  }
}

/**
 * 接口 [退出面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1290) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/leaveInterview/{interviewId}`
 * @更新时间 `2021-04-27 14:32:34`
 */
export interface PostLeaveInterviewInterviewIdParams {
  /**
   * {"userId":"xxx"} 做base64编码
   */
  interviewToken?: string
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [退出面试↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1290) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/leaveInterview/{interviewId}`
 * @更新时间 `2021-04-27 14:32:34`
 */
export interface PostLeaveInterviewInterviewIdResult {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [面试房间内心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1291) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `GET /v1/heartBeat/{interviewId}`
 * @更新时间 `2021-04-27 14:33:02`
 */
export interface GetHeartBeatInterviewIdParams {
  /**
   * {"userId":"xxx"} 做base64编码
   */
  interviewToken?: string
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [面试房间内心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1291) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `GET /v1/heartBeat/{interviewId}`
 * @更新时间 `2021-04-27 14:33:02`
 */
export interface GetHeartBeatInterviewIdResult {
  code: number
  message: string
  data: {
    /**
     * 心跳间隔请求时间
     */
    interval: number
    onlineUserList: {
      accountId: string
      nickname: string
      avatar: string
      phone: string
      profile: string
    }[]
  }
}

/**
 * 接口 [修改面试（不能修改面试状态）↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1292) 的 **请求类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/interview/{interviewId}`
 * @更新时间 `2021-04-26 17:48:28`
 */
export interface PostInterviewInterviewIdParams {
  /**
   * 标题
   */
  title: string
  startTime: string
  endTime: string
  goverment: string
  career: string
  isAuth: string
  authCode: string
  /**
   * true/flase
   */
  isRecorded: string
  candidateName: string
  candidatePhone: string
  interviewerName?: string
  interviewerPhone?: string
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [修改面试（不能修改面试状态）↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1292) 的 **返回类型**
 *
 * @分类 [v1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_284)
 * @标签 `v1`
 * @请求头 `POST /v1/interview/{interviewId}`
 * @更新时间 `2021-04-26 17:48:28`
 */
export interface PostInterviewInterviewIdResult {
  code: number
  message: string
  data: {
    id: string
  }
}

/**
 * 接口 [通用创建房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2283) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/createRoom`
 * @更新时间 `2022-04-18 18:07:59`
 */
export interface PostBaseCreateRoomParams {
  /**
   * 房间名称
   */
  title: string
  /**
   * 房间描述
   */
  desc?: string
  /**
   * 场景分类
   */
  type: string
  /**
   * 房间封面
   */
  image?: string
  /**
   * 自定义属性
   */
  attrs?: {
    'key[0]'?: string
    'value[0]'?: string
  }[]
  /**
   * 房间参数
   */
  params?: {
    'key[0]'?: string
    'value[0]'?: string
  }[]
}

/**
 * 接口 [通用创建房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2283) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/createRoom`
 * @更新时间 `2022-04-18 18:07:59`
 */
export interface PostBaseCreateRoomResult {
  message?: string
  data?: {
    roomInfo?: {
      image?: string
      title?: string
      creator?: string
      desc?: string
      status?: number
      type?: string
      roomId?: string
      /**
       * 当前房间人数
       */
      totalUsers?: number
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      params?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }
    userInfo?: {
      role?: string
      userId?: string
      avatar?: string
      nickname?: string
      phone?: string
      profile?: string
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }
    rtcInfo?: {
      roomToken?: string
      publishUrl?: string
      rtmpPlayUrl?: string
      flvPlayUrl?: string
      hlsPlayUrl?: string
    }
  }
  code?: number
  requestId?: string
}

/**
 * 接口 [通用加入房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2292) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/joinRoom`
 * @更新时间 `2022-08-08 16:44:51`
 */
export interface PostBaseJoinRoomParams {
  /**
   * 房间ID
   */
  roomId?: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  /**
   * 保留
   */
  params?: {
    key: string
    value: string
  }[]
}

/**
 * 接口 [通用加入房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2292) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/joinRoom`
 * @更新时间 `2022-08-08 16:44:51`
 */
export interface PostBaseJoinRoomResult {
  code?: number
  data?: {
    rtcInfo?: {
      roomToken?: string
      publishUrl?: string
      rtmpPlayUrl?: string
      flvPlayUrl?: string
      hlsPlayUrl?: string
    }
    imConfig: {
      /**
       * IM聊天室ID
       */
      imGroupId: string
      /**
       * 默认2
       */
      type: string
    }
    allUserList?: {
      userId: string
      nickname: string
      avatar: string
      phone: string
      role: string
      profile: string
    }[]
    userInfo?: {
      avatar?: string
      role?: string
      profile?: string
      phone?: string
      userId?: string
      nickname?: string
      attrs?: {
        key?: string
        value?: string
      }[]
    }
    roomInfo?: {
      title?: string
      status?: string
      roomId?: string
      image?: string
      /**
       * 场景类型
       */
      type?: string
      desc?: string
      creator?: string
      params?: {
        key?: string
        value?: string
      }[]
      attrs?: {
        key?: string
        value?: string
      }[]
      totalUsers?: number
    }
  }
  message?: string
  requestId?: string
}

/**
 * 接口 [通用离开房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2301) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/leaveRoom`
 * @更新时间 `2022-03-02 15:09:11`
 */
export interface PostBaseLeaveRoomParams {
  roomId: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
}

/**
 * 接口 [通用离开房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2301) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/leaveRoom`
 * @更新时间 `2022-03-02 15:09:11`
 */
export interface PostBaseLeaveRoomResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [通用房间列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2310) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/listRoom`
 * @更新时间 `2022-03-02 15:09:21`
 */
export interface GetBaseListRoomParams {
  /**
   * 默认是10，每页数据条数
   */
  pageSize?: string
  /**
   * 默认是1，页码
   */
  pageNum?: string
  /**
   * 场景类型 ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
}

/**
 * 接口 [通用房间列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2310) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/listRoom`
 * @更新时间 `2022-03-02 15:09:21`
 */
export interface GetBaseListRoomResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: number
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      roomId?: string
      title?: string
      image?: string
      status?: number
      desc?: string
      creator?: string
      type?: string
      params?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      totalUsers?: number
    }[]
  }
  requestId?: string
}

/**
 * 接口 [通用心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2319) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/heartBeat`
 * @更新时间 `2022-03-02 15:09:27`
 */
export interface GetBaseHeartBeatParams {
  roomId: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
}

/**
 * 接口 [通用心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2319) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/heartBeat`
 * @更新时间 `2022-03-02 15:09:27`
 */
export interface GetBaseHeartBeatResult {
  code?: number
  message?: string
  data?: {
    interval?: number
  }
  requestId?: string
}

/**
 * 接口 [通用获取完整房间信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2328) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getRoomInfo`
 * @更新时间 `2022-03-02 15:09:34`
 */
export interface GetBaseGetRoomInfoParams {
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  roomId: string
}

/**
 * 接口 [通用获取完整房间信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2328) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getRoomInfo`
 * @更新时间 `2022-03-02 15:09:34`
 */
export interface GetBaseGetRoomInfoResult {
  data?: {
    rtcInfo?: {
      publishUrl?: string
      rtmpPlayUrl?: string
      flvPlayUrl?: string
      hlsPlayUrl?: string
    }
    mics?: {
      userExtension?: string
      micId?: string
      attrs?: {
        key1?: string
        value1?: string
      }[]
      /**
       * JSON串
       */
      params?: string
    }[]
    userInfo?: {
      nickname?: string
      avatar?: string
      role?: string
      userId?: string
      phone?: string
      profile?: string
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }
    roomInfo?: {
      title?: string
      status?: number
      roomId?: string
      desc?: string
      type?: string
      image?: string
      creator?: string
      totalUsers?: number
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      params?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }
    allUserList?: {
      userId?: string
      profile?: string
      nickname?: string
      role?: string
      avatar?: string
      phone?: string
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }[]
  }
  code?: number
  requestId?: string
  message?: string
}

/**
 * 接口 [通用上麦接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2337) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/upMic`
 * @更新时间 `2022-06-15 15:38:26`
 */
export interface PostBaseUpMicParams {
  roomId: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  userExtension?: string
  /**
   * [{key:"xxx", value:"xxx"}]
   */
  attrs?: {
    key?: string
    value?: string
  }[]
  /**
   * [{key:"xxx", value:"xxx"}]
   */
  params?: {
    key?: string
    value?: string
  }[]
}

/**
 * 接口 [通用上麦接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2337) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/upMic`
 * @更新时间 `2022-06-15 15:38:26`
 */
export interface PostBaseUpMicResult {
  code?: number
  message?: string
  data?: {
    mics?: {
      userExtension?: string
      did?: string
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      params?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }[]
  }
  requestId?: string
}

/**
 * 接口 [通用更新房间属性↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2346) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/updateRoomAttr`
 * @更新时间 `2022-03-02 15:09:49`
 */
export interface PostBaseUpdateRoomAttrParams {
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  roomId?: string
  type?: string
  attrs?: {
    'key[0]'?: string
    'value[0]'?: string
  }[]
}

/**
 * 接口 [通用更新房间属性↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2346) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/updateRoomAttr`
 * @更新时间 `2022-03-02 15:09:49`
 */
export interface PostBaseUpdateRoomAttrResult {
  code?: number
  message?: string
  data?: {
    userInfo?: {
      userId?: string
      nickname?: string
      avatar?: string
      phone?: string
      profile?: string
      role?: string
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }
    roomInfo?: {
      roomId?: string
      status?: string
      title?: string
      desc?: string
      creator?: string
      image?: string
      type?: string
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      params?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      totalUsers?: number
    }
  }
  requestId?: string
}

/**
 * 接口 [通用更新麦位属性↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2355) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/updateMicAttr`
 * @更新时间 `2022-03-02 15:09:56`
 */
export interface PostBaseUpdateMicAttrParams {
  roomId: string
  uid: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  attrs: {
    'key[0]': string
    'value[0]': string
  }[]
}

/**
 * 接口 [通用更新麦位属性↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2355) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/updateMicAttr`
 * @更新时间 `2022-03-02 15:09:56`
 */
export interface PostBaseUpdateMicAttrResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [通用下麦接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2400) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/downMic`
 * @更新时间 `2022-06-15 15:36:19`
 */
export interface PostBaseDownMicParams {
  roomId: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  uid: string
}

/**
 * 接口 [通用下麦接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2400) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `POST /v1/base/downMic`
 * @更新时间 `2022-06-15 15:36:19`
 */
export interface PostBaseDownMicResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [通用获取房间麦位列表自定义数据接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2409) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getRoomMicInfo`
 * @更新时间 `2022-03-02 15:10:08`
 */
export interface GetBaseGetRoomMicInfoParams {
  roomId: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
}

/**
 * 接口 [通用获取房间麦位列表自定义数据接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2409) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getRoomMicInfo`
 * @更新时间 `2022-03-02 15:10:08`
 */
export interface GetBaseGetRoomMicInfoResult {
  code?: number
  message?: string
  data?: {
    roomInfo?: {
      attrs?: {
        'key[0]': string
        'value[0]': string
      }[]
      roomId?: string
    }
    mics?: {
      attrs?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
      userExtension?: string
      uid?: string
      params?: {
        'key[0]'?: string
        'value[0]'?: string
      }[]
    }[]
  }
  requestId?: string
}

/**
 * 接口 [通用查询房间自定义属性值↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2418) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getRoomAttr`
 * @更新时间 `2022-03-02 15:10:18`
 */
export interface GetBaseGetRoomAttrParams {
  roomId: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  /**
   * 没有则返回所有
   */
  attrKey?: string
}

/**
 * 接口 [通用查询房间自定义属性值↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2418) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getRoomAttr`
 * @更新时间 `2022-03-02 15:10:18`
 */
export interface GetBaseGetRoomAttrResult {
  code?: number
  message?: string
  data?: {
    attrs?: {
      'key[0]'?: string
      'value[0]'?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [通用查询麦位自定义属性值↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2427) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getMicAttr`
 * @更新时间 `2022-03-02 15:10:25`
 */
export interface GetBaseGetMicAttrParams {
  roomId: string
  uid: string
  /**
   * ktv classroom show movie onlineExam voiceChatRoom
   */
  type: string
  /**
   * 没有则返回所有
   */
  attrKey?: string
}

/**
 * 接口 [通用查询麦位自定义属性值↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2427) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/base/getMicAttr`
 * @更新时间 `2022-03-02 15:10:25`
 */
export interface GetBaseGetMicAttrResult {
  code?: number
  message?: string
  data?: {
    attrs?: {
      'key[0]'?: string
      'value[0]'?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [获取开房记录↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2823) 的 **请求类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/record/room`
 * @更新时间 `2022-04-22 14:18:10`
 */
export interface GetRecordRoomParams {
  type: string
  pageNum: string
  pageSize: string
}

/**
 * 接口 [获取开房记录↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2823) 的 **返回类型**
 *
 * @分类 [V1房间相关通用接口↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_371)
 * @标签 `v1`
 * @请求头 `GET /v1/record/room`
 * @更新时间 `2022-04-22 14:18:10`
 */
export interface GetRecordRoomResult {
  code: number
  message: string
  data: {
    total: number
    nextId: string
    cnt: number
    currentPageNum: number
    nextPageNum: number
    pageSize: number
    endPage: boolean
    list: {
      userId: string
      roomId: string
      type: string
      timestamp: string
      playUrl: string
    }[]
  }
  requestId: string
}

/**
 * 接口 [歌曲列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2364) 的 **请求类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/songList`
 * @更新时间 `2021-11-11 16:05:40`
 */
export interface PostKtvSongListParams {
  roomId: string
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [歌曲列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2364) 的 **返回类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/songList`
 * @更新时间 `2021-11-11 16:05:40`
 */
export interface PostKtvSongListResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: string
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      songId?: string
      name?: string
      album?: string
      image?: string
      author?: string
      kind?: string
      originUrl?: string
      accompanimentUrl?: string
      lyrics?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [已选歌曲列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2373) 的 **请求类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/selectedSongList`
 * @更新时间 `2021-11-11 16:05:27`
 */
export interface PostKtvSelectedSongListParams {
  roomId: string
  pageNum?: number
  pageSize?: string
}

/**
 * 接口 [已选歌曲列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2373) 的 **返回类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/selectedSongList`
 * @更新时间 `2021-11-11 16:05:27`
 */
export interface PostKtvSelectedSongListResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: string
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      songId?: string
      name?: string
      album?: string
      image?: string
      author?: string
      kind?: string
      /**
       * 点播者
       */
      demander?: string
      originUrl?: string
      accompanimentUrl?: string
      lyrics?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [歌曲操作↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2382) 的 **请求类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/operateSong`
 * @更新时间 `2021-11-03 12:04:24`
 */
export interface PostKtvOperateSongParams {
  /**
   * 房间ID
   */
  roomId: string
  /**
   * 歌曲id
   */
  songId: string
  /**
   * 操作类型（select、delete）
   */
  operateType: string
}

/**
 * 接口 [歌曲操作↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2382) 的 **返回类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/operateSong`
 * @更新时间 `2021-11-03 12:04:24`
 */
export interface PostKtvOperateSongResult {
  code?: number
  message?: string
  data?: boolean
  requestId?: string
}

/**
 * 接口 [获取歌曲信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2391) 的 **请求类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/songInfo`
 * @更新时间 `2021-11-11 16:05:06`
 */
export interface PostKtvSongInfoParams {
  /**
   * 房间ID
   */
  roomId: string
  /**
   * 歌曲Id
   */
  songId: string
}

/**
 * 接口 [获取歌曲信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2391) 的 **返回类型**
 *
 * @分类 [V1在线ktv场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_374)
 * @标签 `v1`
 * @请求头 `POST /v1/ktv/songInfo`
 * @更新时间 `2021-11-11 16:05:06`
 */
export interface PostKtvSongInfoResult {
  code?: number
  message?: string
  data?: {
    song?: {}
    songId?: string
    name?: string
    album?: string
    author?: string
    image?: string
    kind?: string
    originUrl?: string
    accompanimentUrl?: string
    lyrics?: string
  }
  requestId?: string
}

/**
 * 接口 [获取面试的对外页面URL（带InterviewTOKEN）↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1294) 的 **请求类型**
 *
 * @分类 [v1测试专用↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_291)
 * @标签 `v1`
 * @请求头 `GET /v1/test/{interviewId}`
 * @更新时间 `2021-04-27 16:19:40`
 */
export interface GetTestInterviewIdParams {
  /**
   * 面试ID
   */
  interviewId: string
}

/**
 * 接口 [获取面试的对外页面URL（带InterviewTOKEN）↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1294) 的 **返回类型**
 *
 * @分类 [v1测试专用↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_291)
 * @标签 `v1`
 * @请求头 `GET /v1/test/{interviewId}`
 * @更新时间 `2021-04-27 16:19:40`
 */
export interface GetTestInterviewIdResult {}

/**
 * 接口 [获取白板状态↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1298) 的 **请求类型**
 *
 * @分类 [v1.1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_295)
 * @请求头 `GET /v1/board/{interviewId}`
 * @更新时间 `2021-05-17 14:19:38`
 */
export interface GetBoardInterviewIdParams {
  /**
   * 面试房间Id
   */
  interviewId: string
}

/**
 * 接口 [获取白板状态↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1298) 的 **返回类型**
 *
 * @分类 [v1.1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_295)
 * @请求头 `GET /v1/board/{interviewId}`
 * @更新时间 `2021-05-17 14:19:38`
 */
export interface GetBoardInterviewIdResult {
  code?: number
  message?: string
  data?: {
    /**
     * 面试房间id
     */
    interview_id?: string
    /**
     * 白板id 与面试房间id一致
     */
    id?: string
    /**
     * board-open\board-close 之一
     */
    status?: string
    /**
     * 当前使用者id
     */
    current_user_id?: string
    /**
     * 白板创建（第一次被展开 时间戳）
     */
    created_at?: string
    /**
     * 末次状态更新时间 格式 2006-01-02 15:04:05.999999999 -0700 MST
     */
    updated_at?: string
  }
  requestId?: string
}

/**
 * 接口 [修改、创建白板↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1302) 的 **请求类型**
 *
 * @分类 [v1.1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_295)
 * @请求头 `POST /v1/board/{interviewId}`
 * @更新时间 `2021-05-17 14:15:02`
 */
export interface PostBoardInterviewIdParams {
  /**
   * cmd-open/cmd-close/cmd-reset
   */
  cmd: string
  /**
   * 面试房间
   */
  interviewId: string
}

/**
 * 接口 [修改、创建白板↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/1302) 的 **返回类型**
 *
 * @分类 [v1.1面试场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_295)
 * @请求头 `POST /v1/board/{interviewId}`
 * @更新时间 `2021-05-17 14:15:02`
 */
export interface PostBoardInterviewIdResult {
  code?: number
  message?: string
  data?: {
    /**
     * 面试房间id
     */
    interview_id?: string
    /**
     * 白板id 同面试房间id
     */
    id?: string
    /**
     * 白板状态 board-open\board-close
     */
    status?: string
    /**
     * 当前使用用户id
     */
    current_user_id?: string
    /**
     * 创建时间（第一次打开白板）
     */
    created_at?: string
    /**
     * 末次更新时间
     */
    updated_at?: string
  }
  requestId?: string
}

/**
 * 接口 [创建房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2220) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `POST /v1/repair/createRoom`
 * @更新时间 `2021-10-25 15:02:54`
 */
export interface PostRepairCreateRoomParams {
  /**
   * 房间名称
   */
  title: string
  /**
   * 只能是{"staff", "professor"}
   */
  role: string
}

/**
 * 接口 [创建房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2220) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `POST /v1/repair/createRoom`
 * @更新时间 `2021-10-25 15:02:54`
 */
export interface PostRepairCreateRoomResult {
  message?: string
  requestId?: string
  data?: {
    roomInfo?: {
      image?: string
      title?: string
      status?: number
      roomId?: string
    }
    userInfo?: {
      phone?: string
      avatar?: string
      profile?: string
      nickname?: string
      accountId?: string
    }
    rtcInfo?: {
      roomToken?: string
      publishUrl?: string
      rtmpPlayUrl?: string
      flvPlayUrl?: string
      hlsPlayUrl?: string
    }
    publishUrl?: string
    roomToken?: string
  }
  code?: number
}

/**
 * 接口 [加入房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2229) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `POST /v1/repair/joinRoom`
 * @更新时间 `2021-11-16 11:24:24`
 */
export interface PostRepairJoinRoomParams {
  /**
   * 房间ID
   */
  roomId: string
  /**
   * 只能是{"student", "professor", "staff"}
   */
  role: string
}

/**
 * 接口 [加入房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2229) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `POST /v1/repair/joinRoom`
 * @更新时间 `2021-11-16 11:24:24`
 */
export interface PostRepairJoinRoomResult {
  message?: string
  requestId?: string
  data?: {
    allUserList?: {
      accountId: string
      nickname: string
      avatar: string
      phone: string
      role: string
      profile: string
    }[]
    imConfig: {
      /**
       * IM聊天室ID
       */
      imGroupId: string
      /**
       * 默认2
       */
      type: string
    }
    roomInfo?: {
      status?: string
      field_4?: number
      roomId?: string
      title?: string
    }
    publishUrl?: string
    userInfo?: {
      accountId?: string
      profile?: string
      avatar?: string
      phone?: string
      nickname?: string
    }
    rtcInfo?: {
      roomToken?: string
      publishUrl?: string
      rtmpPlayUrl?: string
      flvPlayUrl?: string
      hlsPlayUrl?: string
    }
    roomToken?: string
  }
  code?: number
}

/**
 * 接口 [离开房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2238) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/leaveRoom/{roomID}`
 * @更新时间 `2021-09-18 15:18:40`
 */
export interface GetRepairLeaveRoomRoomIdParams {
  /**
   * 房间id
   */
  roomID: string
}

/**
 * 接口 [离开房间↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2238) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/leaveRoom/{roomID}`
 * @更新时间 `2021-09-18 15:18:40`
 */
export interface GetRepairLeaveRoomRoomIdResult {
  code?: number
  message?: string
  data?: string
  requestId?: string
}

/**
 * 接口 [房间列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2247) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/listRoom`
 * @更新时间 `2021-09-24 16:29:30`
 */
export interface GetRepairListRoomParams {
  /**
   * 默认是10，每页数据条数
   */
  pageSize?: string
  /**
   * 默认是1，页码
   */
  pageNum?: string
}

/**
 * 接口 [房间列表↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2247) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/listRoom`
 * @更新时间 `2021-09-24 16:29:30`
 */
export interface GetRepairListRoomResult {
  code?: number
  message?: string
  data?: {
    total?: number
    nextId?: string
    cnt?: number
    currentPageNum?: number
    nextPageNum?: number
    pageSize?: number
    endPage?: boolean
    list?: {
      roomId?: string
      title?: string
      image?: string
      status?: number
      options?: {
        /**
         * 角色值 student、professor、staff
         */
        role: string
        /**
         * 显示的名称  ”专家进入“
         */
        title: string
      }[]
    }[]
  }
  requestId?: string
}

/**
 * 接口 [心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2256) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/heartBeat/{roomId}`
 * @更新时间 `2021-09-22 15:31:26`
 */
export interface GetRepairHeartBeatRoomIdParams {
  roomId: string
}

/**
 * 接口 [心跳↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2256) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/heartBeat/{roomId}`
 * @更新时间 `2021-09-22 15:31:26`
 */
export interface GetRepairHeartBeatRoomIdResult {
  code?: number
  message?: string
  data?: {
    interval?: number
  }
  requestId?: string
}

/**
 * 接口 [刷新房间信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2265) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/getRoomInfo/{roomId}`
 * @更新时间 `2021-09-24 16:32:39`
 */
export interface GetRepairGetRoomInfoRoomIdParams {
  roomId: string
}

/**
 * 接口 [刷新房间信息↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2265) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `GET /v1/repair/getRoomInfo/{roomId}`
 * @更新时间 `2021-09-24 16:32:39`
 */
export interface GetRepairGetRoomInfoRoomIdResult {
  code?: number
  message?: string
  data?: {
    userInfo?: {
      accountId?: string
      nickname?: string
      avatar?: string
      phone?: string
      profile?: string
    }
    publishUrl?: string
    roomInfo?: {
      roomId?: string
      title?: string
      image?: string
      /**
       * 1 房间状态正常，0 房间已关闭
       */
      status?: number
    }
    allUserList?: {
      accountId?: string
      nickname?: string
      avatar?: string
      phone?: string
      role?: string
      profile?: string
    }[]
  }
  requestId?: string
}

/**
 * 接口 [电路板检测↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2517) 的 **请求类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `POST /v1/repair/circuitboard/check`
 * @更新时间 `2021-12-21 11:08:40`
 */
export interface PostRepairCircuitboardCheckParams {
  image: FileData
}

/**
 * 接口 [电路板检测↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/2517) 的 **返回类型**
 *
 * @分类 [V1检修场景↗](http://pili-yapi.aslan.qa.qiniu.io/project/51/interface/api/cat_368)
 * @标签 `v1`
 * @请求头 `POST /v1/repair/circuitboard/check`
 * @更新时间 `2021-12-21 11:08:40`
 */
export interface PostRepairCircuitboardCheckResult {
  code: number
  message: string
  data: {
    /**
     * 电路板得分
     */
    score: number
    /**
     * 是否是电路板：negatives/positives
     */
    label: string
  }
}

/* prettier-ignore-end */
