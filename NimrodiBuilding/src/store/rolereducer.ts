import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import optionalroles from "../data/roles.json";


export interface RolerducerState {
    currentRole: string;
    ListRoles:string[];
}
const initialState: RolerducerState = {
    currentRole:"Unknown Personnel" ,
    ListRoles:optionalroles
};

export const rolereducer = createSlice({
  name: "rolereducer",
  initialState,
  reducers: {
    setRole:(state, action: PayloadAction<{ index: number }>) =>{
        if(action.payload.index <= state.ListRoles.length){
            state.currentRole =  state.ListRoles[action.payload.index]
        }
    }
  },
});
export const { setRole } = rolereducer.actions;
export default rolereducer.reducer;
