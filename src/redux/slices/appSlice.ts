import { LocaleCode } from '@/src/commons/types';
import { createSlice } from '@reduxjs/toolkit';

export type AppStateType = {
	locale: LocaleCode;
	showGlobalSearch: boolean;
};

const initialData: AppStateType = { locale: 'vi', showGlobalSearch: false };

const appSlice = createSlice({
	name: 'app',
	initialState: initialData,
	reducers: {
		changeLocale(state, action) {
			state.locale = action.payload;
			return state;
		},
		setGlobalSearch(state, action) {
			state.showGlobalSearch = action.payload;
			return state;
		},
	},
});

const { actions, reducer } = appSlice;
export const { changeLocale } = actions;
export const appReducer = reducer;
export default appSlice;
