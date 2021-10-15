import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
// import logger from 'redux-logger';
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

// console.log(process.env)
// const middleware = [...MiddlewareArray, logger]

const store = configureStore({
    reducer: {
    phonebook: phonebookReducer,
},
    devTools: process.env.NODE_ENV === 'development',
});

export default store;