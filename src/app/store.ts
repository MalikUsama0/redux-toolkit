import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'
import { apiSlice } from "./apiSlice";

import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

 const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream : iceCreamReducer,
    user : userReducer
 })

 const persistConfig = {
    key:"root",
    storage,
    version:1,
    blacklist: ['icecream'],// it will ignore to persist this reducer
    whitelist : ['user', 'cake']  // it will persist these reducers
 }

 const persistedState = persistReducer(persistConfig , rootReducers)

const store = configureStore({
    reducer : {
      persistedState,
      [apiSlice.reducerPath]: apiSlice.reducer,
    
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
      }).concat(apiSlice.middleware),
})

export default store;
export const persistore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch