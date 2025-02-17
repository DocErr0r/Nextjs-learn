'use client'
import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { BaseApi } from '../slices/apiSlice';

import userReducer from '../slices/userSlice';
// import blogReducer from '../slices/blogApiSlice';
import { authListener } from './authListner';

const store = configureStore({
  reducer: {
    user: userReducer,
    // blog: blogReducer,

    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefaultmiddeleware) => getDefaultmiddeleware({ serializableCheck: false }).concat(BaseApi.middleware),
});

setupListeners(store.dispatch)
authListener(store);

export default store;