import {
  GetAdminCensorConfigParams,
  GetAdminCensorConfigResult,
  GetAdminCensorLiveParams,
  GetAdminCensorLiveResult,
  GetAdminCensorRecordParams,
  GetAdminCensorRecordResult,
  GetServerAuthAdminTokenParams,
  GetServerAuthAdminTokenResult,
  PostAdminCensorAuditParams,
  PostAdminCensorAuditResult,
  PostAdminCensorConfigParams,
  PostAdminCensorConfigResult,
  PostAdminCensorStopliveLiveIdParams, PostAdminCensorStopliveLiveIdResult,
  PostManagerLoginParams,
  PostManagerLoginResult,
  request
} from '@/api';

export class AdminApi {
  /**
   * 服务端获取管理员token
   * @param params
   */
  static getServerAuthAdminToken(params: GetServerAuthAdminTokenParams) {
    return request.get<GetServerAuthAdminTokenResult, GetServerAuthAdminTokenResult>('/server/auth/admin/token', { params });
  }

  /**
   * 强制关闭直播间
   * @param params
   */
  static postAdminCensorStopliveLiveId(params: PostAdminCensorStopliveLiveIdParams) {
    return request.post<PostAdminCensorStopliveLiveIdResult, PostAdminCensorStopliveLiveIdResult>(`/admin/censor/stoplive/${params.live_id}`, params);
  }

  /**
   * 修改审核设置信息
   * @param params
   */
  static postAdminCensorConfig(params: PostAdminCensorConfigParams) {
    return request.post<PostAdminCensorConfigResult, PostAdminCensorConfigResult>('/admin/censor/config', params);
  }

  /**
   * 获取审核设置信息
   * @param params
   */
  static getAdminCensorConfig(params?: GetAdminCensorConfigParams) {
    return request.get<GetAdminCensorConfigResult, GetAdminCensorConfigResult>('/admin/censor/config', { params });
  }

  /**
   * 审核图片
   * @param params
   */
  static postAdminCensorAudit(params: PostAdminCensorAuditParams) {
    return request.post<PostAdminCensorAuditResult, PostAdminCensorAuditResult>('/admin/censor/audit', params);
  }

  /**
   * 查看待审核直播间/已审核直播间
   * @param params
   */
  static getAdminCensorLive(params: GetAdminCensorLiveParams) {
    return request.get<GetAdminCensorLiveResult, GetAdminCensorLiveResult>('/admin/censor/live', { params });
  }

  /**
   * 查看待审核图片/已审核图片详情
   * @param params
   */
  static getAdminCensorRecord(params: GetAdminCensorRecordParams) {
    return request.get<GetAdminCensorRecordResult, GetAdminCensorRecordResult>('/admin/censor/record', { params });
  }

  /**
   * 管理员登录
   * @param params
   */
  static postManagerLogin(params: PostManagerLoginParams) {
    return request.post<PostManagerLoginResult, PostManagerLoginResult>('/manager/login', params);
  }
}
