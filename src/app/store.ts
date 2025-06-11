import { configureStore } from "@reduxjs/toolkit";
import fileTreeSliceStore from '../app/feature/fileTreeSlice'
export const store = configureStore({
  reducer: {
    treeSlice : fileTreeSliceStore
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
