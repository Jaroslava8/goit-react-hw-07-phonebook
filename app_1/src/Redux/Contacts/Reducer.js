import { createReducer } from "@reduxjs/toolkit";
import { actions, ApiAddress } from "../Contacts";
import { combineReducers } from "@reduxjs/toolkit";

const filter = createReducer("", {
  [actions.changeFitler]: (_, { payload }) => payload,
});

const contacts = combineReducers({
  [ApiAddress.reducerPath]: ApiAddress.reducer,
  filter,
});

export default contacts;
