export interface IMStoreState {
  /**
   * im类型
   * 1: 融云
   * 2: 七牛
   */
  type?: number;
  /**
   * imToken
   */
  imToken?: string;
  /**
   * im群组id
   */
  imGroupId?: string;
  /**
   * im用户名
   */
  imUsername?: string;
  /**
   * im用户密码
   */
  imPassword?: string;
  /**
   * im用户id
   */
  imUid?: string;
  /**
   * im的appKey
   */
  appKey?: string;
  /**
   * imClient
   */
  imClient?: unknown | null;
}

export type IMStoreAction = {
  type: 'PATCH';
  payload: IMStoreState;
}
