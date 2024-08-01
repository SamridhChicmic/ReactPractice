import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TokenSlice from "./Token/TokenSlice";

const rootPersistConfig={
    key:'root',
    storage,
    whitelist:['TokenSlice']
}
const reducers=combineReducers({
    TokenSlice
})
const persistedReducer = persistReducer(rootPersistConfig, reducers);
const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })
        return middlewares;
      },
})
const persistor = persistStore(store);
export {store,persistor}