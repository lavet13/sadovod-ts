import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  nanoid,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios, { AxiosError } from 'axios';

export type Good = {
  id: string;
  price: number;
  sizes: number[];
  description: string;
};

export type ErrorResponse = {
  statusCode?: string;
  message: string;
};

export type Goods = { [id: string]: Good };

export type GoodsState = {
  readonly error: ErrorResponse | null;
  readonly status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const additionalState: GoodsState = {
  status: 'idle',
  error: null,
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
      `${import.meta.env.VITE_JSON_SERVER_URL}/goods`
    );
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    const responseData: ErrorResponse = {
      statusCode: error.code,
      message: error.message,
    };
    console.log(responseData);
    return thunkAPI.rejectWithValue(responseData);
  }
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    // goodDeleted: goodsAdapter.removeOne,
    // goodsUpdated: goodsAdapter.updateOne,
    // goodsAdded: {
    //   reducer(state, action: PayloadAction<Good>) {
    //     goodsAdapter.addOne(state, action.payload);
    //   },
    //   prepare(price: number, sizes: number[], description: string) {
    //     return { payload: { id: nanoid(), price, sizes, description } };
    //   },
    // },
    // goodsFailed(state, action: PayloadAction<Error>) {
    //   state.error = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGoods.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'idle';
        goodsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        if (action.payload) {
          state.status = 'failed';
          state.error = action.payload;
        }
      });
  },
});

export default goodsSlice.reducer;

// pre-built-in selectors
export const { selectAll: selectGoods, selectById: selectGoodById } =
  goodsAdapter.getSelectors((state: RootState) => state.goods);

// selectors
export const selectGoodsStatus = (state: RootState) => state.goods.status;
export const selectGoodsError = (state: RootState) => state.goods.error;

export const selectGoodIds = createSelector([selectGoods], goods =>
  goods.map(good => good.id)
);
