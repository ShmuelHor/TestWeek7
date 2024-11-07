import { configureStore } from "@reduxjs/toolkit";

import floorreducer from "./floorreducer";
import rolereducer from "./rolereducer";

export const store = configureStore({
  reducer: {
    floorreducer:floorreducer,
    rolereducer:rolereducer
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;