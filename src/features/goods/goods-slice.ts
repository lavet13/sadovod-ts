import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
  nanoid,
  SerializedError,
} from '@reduxjs/toolkit';

import axios, { AxiosError } from 'axios';

import { RootState } from '../../app/store';

import { ErrorResponse } from '../../utils/error/error.utils';

export type Good = {
  id: string;
  price: string;
  sizes: number[];
  description: string;
  photo: string;
};

export type MyError = ErrorResponse | Error | SerializedError | null;

export type GoodsState = {
  readonly error?: MyError;
  readonly status: 'idle' | 'loading' | 'failed';
};

const additionalState: GoodsState = {
  status: 'loading',
  error: null,
};

export const isErrorResponse = (error: any): error is ErrorResponse => {
  return (error as ErrorResponse).errorMessage !== undefined;
};

export const isError = (error: any): error is Error => {
  return (error as Error).message !== undefined;
};

const goodsAdapter = createEntityAdapter<Good>();

const initialState = goodsAdapter.getInitialState(additionalState); // { ids, entities, status, error }

// thunks
export const fetchGoods = createAsyncThunk<
  Good[],
  void,
  { rejectValue: ErrorResponse }
>('goods/fetchGoods', async (_, thunkAPI) => {
  try {
    const response = await axios.get<Good[]>(
      `${import.meta.env.VITE_JSON_SERVER_URL}/goods`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

type GoodData = Omit<Good, 'id'>;
export const addNewGood = createAsyncThunk<
  Good,
  GoodData,
  { rejectValue: ErrorResponse }
>('goods/addNewGood', async (goodData, thunkAPI) => {
  try {
    const good: Good = { id: nanoid(), ...goodData };

    const response = await axios.post<Good>(
      `${import.meta.env.VITE_JSON_SERVER_URL}/goods`,
      good,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const editGood = createAsyncThunk<
  Good,
  Good,
  { rejectValue: ErrorResponse }
>('goods/editGood', async (good, thunkAPI) => {
  try {
    const response = await axios.put<Good>(
      `${import.meta.env.VITE_JSON_SERVER_URL}/goods/${good.id}`,
      good,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteGood = createAsyncThunk<
  { goodId: string },
  string,
  { rejectValue: ErrorResponse }
>('goods/deleteGood', async (goodId, thunkAPI) => {
  try {
    const response = await axios.delete<Good>(
      `${import.meta.env.VITE_JSON_SERVER_URL}/goods/${goodId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    console.log(response);

    return { goodId };
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    if (!error.response) {
      throw err;
    }

    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    goodsErrorsReset(state) {
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGoods.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        goodsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        if (action.payload) {
          state.status = 'failed';
          state.error = action.payload;
        } else {
          state.status = 'failed';
          state.error = action.error;
        }
      })

      .addCase(addNewGood.fulfilled, (state, action) => {
        state.error = null;
        goodsAdapter.addOne(state, action.payload);
      })
      .addCase(addNewGood.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
      })

      .addCase(editGood.fulfilled, (state, action) => {
        const { id, ...changes } = action.payload;

        state.error = null;
        goodsAdapter.updateOne(state, { id, changes });
      })
      .addCase(editGood.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
      })

      .addCase(deleteGood.fulfilled, (state, action) => {
        const { goodId } = action.payload;

        state.error = null;
        goodsAdapter.removeOne(state, goodId);
      })
      .addCase(deleteGood.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
      });
  },
});

export default goodsSlice.reducer;
export const { goodsErrorsReset } = goodsSlice.actions;

// built-in selectors
export const { selectAll: selectGoods, selectById: selectGoodById } =
  goodsAdapter.getSelectors((state: RootState) => state.goods);

// selectors
export const selectGoodsReducer = (state: RootState) => state.goods;

export const selectGoodsStatus = createSelector(
  [selectGoodsReducer],
  goodsSlice => goodsSlice.status
);

export const selectGoodsError = createSelector(
  [selectGoodsReducer],
  goodsSlice => goodsSlice.error
);

export const selectGoodsEntities = createSelector(
  [selectGoodsReducer],
  goodsSlice => goodsSlice.entities
);

export const selectGoodIds = createSelector([selectGoods], goods =>
  goods.map(good => good.id)
);

// selector factory
// export const makeSelectGoodById = () => {
//   const selectGoodById = createSelector(
//     [selectGoodsEntities, (_, goodId: string) => goodId],
//     (entities, goodId) => entities[goodId]
//   );

//   return selectGoodById;
// };

// const selectTodoById = (state, todoId) => state.todos[todoId]
