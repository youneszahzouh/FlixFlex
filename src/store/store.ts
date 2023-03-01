import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { movieApi } from "./api/movieApi";
import { tvSeriesApi } from "./api/tvSeriesApi";
export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [tvSeriesApi.reducerPath]: tvSeriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
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
