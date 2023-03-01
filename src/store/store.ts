import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { discoverApi } from "./api/discoverApi";
import { movieApi } from "./api/movieApi";
import { tvSeriesApi } from "./api/tvSeriesApi";
export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [tvSeriesApi.reducerPath]: tvSeriesApi.reducer,
    [discoverApi.reducerPath]: discoverApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(discoverApi.middleware)
      .concat(tvSeriesApi.middleware)
      .concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
