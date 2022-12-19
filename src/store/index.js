import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './reducers/basketReducer';
import { productReducer } from './reducers/productReducer';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({ reducer: { product: productReducer, user: userReducer, basket: basketReducer } });
