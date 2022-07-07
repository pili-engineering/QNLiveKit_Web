export interface UserStoreState {
  /**
   * 用户id
   */
  accountId?: string;
  /**
   * 用户昵称
   */
  nickname?: string;
  /**
   * 用户头像
   */
  avatar?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 登录token
   */
  loginToken?: string;
  /**
   * 互动直播令牌
   */
  accessToken?: string;
}

export type UserStoreAction = {
  type: 'PATCH';
  payload: UserStoreState;
};
