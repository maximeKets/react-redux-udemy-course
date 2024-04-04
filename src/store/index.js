import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice.js";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {loggerMiddleware} from "./middlewares/logger-middleware.js"

const persistConfig = {
    key: "root",
    version: 1,
    storage, 
    whiteList : ['EXPENSE']
}

const rootReducers = combineReducers({
    EXPENSE: expenseSlice.reducer,

})

const persisReducers = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persisReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).prepend(loggerMiddleware.middleware),
})

const persistor = persistStore(store)

export { store, persistor };
