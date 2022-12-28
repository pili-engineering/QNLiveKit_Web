import { BarrageMessage, ChatMessage, GiftMessage } from './interface';

interface Message {
	action?: string;

	[key: string]: any;
}

export const isChatMessage = (message: Message): message is ChatMessage => {
	return (
		message.action === 'liveroom-welcome' ||
		message.action === 'liveroom-pubchat'
	);
};

export const isBarrageMessage = (
	message: Message
): message is BarrageMessage => {
	return message.action === 'living_danmu';
};

export const isGiftMessage = (message: Message): message is GiftMessage => {
	return message.action === 'gift_notify';
};
