import { configureStore } from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";

import persistedReducer from "./root-reducer.js";

export const store = configureStore({
    reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          // look explanation https://stackoverflow.com/questions/73259876/a-non-serializable-value-was-detected-in-an-action
          // serializableCheck: {
          //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          // },
    }),
});

export const persistor = persistStore(store);