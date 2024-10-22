import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

  type InitialState = {
    singleUser : {
      data:any,
      loading:boolean,
      error : string | undefined;
    };
    loading: boolean;
    user : any;
    error : string | undefined;
  }
const initialState : InitialState= {
  singleUser: {
    data: null,
    loading:false,
    error:''
  },
    loading : false,
    user : [],
    error:''
}

   export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    return axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>res.data)
  })
  
  export const fetchUserById =createAsyncThunk('user/fetchUserById',(userId:string)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res)=>res.data)
  })

const userSlice =  createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers(builder) {
      builder.addCase(fetchUsers.pending , state => {
        state.loading = true
      }).addCase(fetchUsers.fulfilled , (state, action:any) => {
        state.loading = false;
        state.user = action.payload
      }).addCase(fetchUsers.rejected , (state,action:any) => {
        state.loading = false;
        state.error = action.error.message
      });

      builder.addCase(fetchUserById.pending , state => {
        state.singleUser.loading = true
      }).addCase(fetchUserById.fulfilled , (state, action) => {
        state.singleUser.loading = false;
        state.singleUser.data = action.payload
      }).addCase(fetchUserById.rejected , (state,action) => {
        state.singleUser.loading = false;
        state.singleUser.error = action.error.message
      })
    }
})

export default userSlice.reducer
// module.exports.cakeActions = userSlice.actions