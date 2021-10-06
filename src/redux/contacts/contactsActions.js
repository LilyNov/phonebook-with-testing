import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const addContact = createAction(
  "contacts/addContact",
  (name, number) => {
    return {
      payload: { id: uuid(), name, number },
    };
  }
);
export const deleteContact = createAction("contacts/deleteContact");
export const filterContacts = createAction("contacts/filterContacts");
