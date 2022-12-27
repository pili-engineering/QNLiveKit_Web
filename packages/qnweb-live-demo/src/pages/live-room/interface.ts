/**
 * 聊天消息
 */
export interface ChatMessage {
  action: 'liveroom-welcome' | 'liveroom-pubchat';
  data: {
    action: 'liveroom-welcome' | 'liveroom-pubchat';
    content: string;
    msgID: string;
    sendUser: {
      im_password: string;
      avatar: string;
      extends: Record<any, any>;
      im_userid: string;
      im_username: string;
      nick: string;
      user_id: string;
    };
    senderRoomId: string;
  };
}

/**
 * 弹幕消息
 */
export interface BarrageMessage {
  action: 'living_danmu';
  data: {
    content: string;
    sendUser: {
      im_password: string;
      avatar: string;
      extends: Record<any, any>;
      im_userid: string;
      im_username: string;
      nick: string;
      user_id: string;
    };
    senderRoomID: string;
  };
}

/**
 * 礼物消息
 */
export interface GiftMessage {
  action?: 'gift_notify';
  data?: {
    user_id?: string;
    live_id?: string;
    gift_id?: number;
    amount?: number;
  };
}
