import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from "redux-thunk";
export default configureStore({
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk,logger),
});
