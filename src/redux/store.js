// // import {configureStore} from '@reduxjs/toolkit';
// // import counterReducer from './counterSlice';

// // export default configureStore({
// //   reducer: {
// //     counter: counterReducer,
// //   },
// // });

// // REDUX-PERSIST TRIAL
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// // REDUX-PERSIST
// // import storage from 'redux-persist/lib/storage';
// import logger from "redux-logger";
// import { combineReducers } from "redux";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import appReducer from "./appReducer";
// import themeReducer from "./slices/themeSlice";
// import ageReducer from "./slices/ageSlice";

// const rootReducer = combineReducers({
//   app: appReducer,
//   age: ageReducer,
//   mytheme: themeReducer,
// });

// // persist config obj
// // blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage: AsyncStorage,
//   blacklist: ["age"], //blacklisting a store attribute name, will not persist that store attribute.
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const store = configureStore({
// //   reducer: persistedReducer,
// // });
// const store = configureStore({
//   reducer: persistedReducer,
//   // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   // .concat(logger)
// });

// export const persistor = persistStore(store);
// export default store;

import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga"
import AsyncStorage from "@react-native-async-storage/async-storage";
// import rootSaga from "./sagas"
import rootReducer from "./reducers/index";
import { persistStore, persistReducer } from "redux-persist";

// const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  //blacklist:[ 'wishList'/*  'cart' */] //Add reducer if you don`t want to presist it
};
// const middleWares = [sagaMiddleware];

//1
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer
  // applyMiddleware(...middleWares)
);
let persistor = persistStore(store);
// sagaMiddleware.run(rootSaga)

export default { store, persistor };
