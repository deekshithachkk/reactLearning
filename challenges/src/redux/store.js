import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cake/CakeReducer';

export default configureStore({
  reducer: cakeReducer
  
});