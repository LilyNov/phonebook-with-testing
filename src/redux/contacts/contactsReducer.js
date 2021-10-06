import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import defaultContacts from "../../defaultContacts";
import { addContact, deleteContact, filterContacts } from "./contactsActions";

const contacts = createReducer(defaultContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
