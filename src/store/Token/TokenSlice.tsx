import { createSlice } from "@reduxjs/toolkit";
const Token=createSlice({
    name:'token',
    initialState:{token:null,uid:null},
    reducers:{
        updateToken:(state,action)=>({
             ...state,
             token:action.payload.token
        }),
        updateUID:(state,action)=>({
           ...state,
           uid:action.payload.uid
        })
    }
})
export const {updateToken,updateUID}=Token.actions
export default Token.reducer