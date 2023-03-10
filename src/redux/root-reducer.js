import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";

 const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;