export interface RoomStoreState {
	roomClient?: unknown | null;
}

export type RoomStoreAction = {
	type: 'PATCH';
	payload: RoomStoreState;
};
