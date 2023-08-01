import undoable from 'redux-undo';
import { combineReducers } from '@reduxjs/toolkit';

import goodsSlice from '../features/goods/goods-slice';

export const rootReducer = combineReducers({
  goods: goodsSlice,
});
