import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'
  type InitialState = {
    numberOfIcecreams: number
  }
const initialState : InitialState= {
    numberOfIcecreams : 10
}

const iceCreamSlice =  createSlice({
    name:'icecream',
    initialState,
    reducers : {
        ordered : (state:InitialState)=>{
            state.numberOfIcecreams--;
        },
        restocked : (state:InitialState,action:PayloadAction<number>)=>{
          state.numberOfIcecreams+=action.payload;
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(cakeOrdered, (state)=> {
            state.numberOfIcecreams--;
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered , restocked} = iceCreamSlice.actions