import { combineReducers } from '@reduxjs/toolkit';

import goodsSlice from '../features/goods/goodsSlice';

export const rootReducer = combineReducers({
  goods: goodsSlice,
});
