import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FloorreducerState {
  floors: boolean[];
}
const initialState: FloorreducerState = {
  floors: [false, false, false, false, false],
};

export const floorreducer = createSlice({
  name: "floorreducer",
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<{ index: number }>) => {
      state.floors[action.payload.index] = !state.floors[action.payload.index];
    },
  },
});
export const { changeAccess } = floorreducer.actions;
export default floorreducer.reducer;
