import React, { useContext, useReducer } from 'react';

import { UserStoreAction, UserStoreState } from './type';

export const userStoreContext = React.createContext<{
  state: UserStoreState,
  dispatch: React.Dispatch<UserStoreAction>
}>({
  state: {},
  dispatch: () => ({})
});

export const userStoreReducer: React.Reducer<UserStoreState, UserStoreAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'PATCH':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const UserStore: React.FC<{
  value?: UserStoreState
}> = props => {
  const { children, value } = props;
  const [state, dispatch] = useReducer(userStoreReducer, { ...value });

  return <userStoreContext.Provider value={{ state, dispatch }}>
    {children}
  </userStoreContext.Provider>;
};

export const useUserStore = (): {
  state: UserStoreState,
  dispatch: React.Dispatch<UserStoreAction>
} => {
  return useContext(userStoreContext);
};
