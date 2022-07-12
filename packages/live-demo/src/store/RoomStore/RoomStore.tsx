import React, { useContext, useReducer } from 'react';

import { RoomStoreState, RoomStoreAction } from './type';

export const roomStoreContext = React.createContext<{
  state: RoomStoreState,
  dispatch: React.Dispatch<RoomStoreAction>
}>({
  state: {},
  dispatch: () => ({})
});

export const roomStoreReducer: React.Reducer<RoomStoreState, RoomStoreAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'PATCH':
      return {
        ...state,
        ...action.payload
      };
    default:
      throw new Error();
  }
};

export const RoomStore: React.FC<{
  value?: RoomStoreState
}> = (props) => {
  const { children, value } = props;
  const [state, dispatch] = useReducer(roomStoreReducer, { ...value });

  return <roomStoreContext.Provider value={{ state, dispatch }}>
    {children}
  </roomStoreContext.Provider>;
};

export const useRoomStore = (): {
  state: RoomStoreState,
  dispatch: React.Dispatch<RoomStoreAction>
} => {
  return useContext(roomStoreContext);
};
