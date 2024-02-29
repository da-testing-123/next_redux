import { configureStore } from "@reduxjs/toolkit";

import guidReducer from "./reducer";

export const store = configureStore({
  reducer: {
    guid: guidReducer,
  },
});
export interface RootState {
  guid: {
    guid: string;
  };
}
