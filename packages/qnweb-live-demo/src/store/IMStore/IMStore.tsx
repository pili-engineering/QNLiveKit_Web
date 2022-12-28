import React, { useContext, useReducer } from 'react';

import { IMStoreAction, IMStoreState } from './type';

export const imStoreContext = React.createContext<{
	state: IMStoreState;
	dispatch: React.Dispatch<IMStoreAction>;
}>({
	state: {},
	dispatch: () => ({})
});

export const imStoreReducer: React.Reducer<IMStoreState, IMStoreAction> = (
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

export const IMStore: React.FC<{
	value?: IMStoreState;
}> = (props) => {
	const { children, value } = props;
	const [state, dispatch] = useReducer(imStoreReducer, {
		...value
	});

	return (
		<imStoreContext.Provider value={{ state, dispatch }}>
			{children}
		</imStoreContext.Provider>
	);
};

export const useIMStore = (): {
	state: IMStoreState;
	dispatch: React.Dispatch<IMStoreAction>;
} => {
	return useContext(imStoreContext);
};
