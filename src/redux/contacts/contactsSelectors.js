import { createSelector } from "reselect";

export const getValueForSearch = (state) => state.contacts.filter;
export const getContact = (state) => state.contacts.contacts;

export const filterContactsByName = createSelector(
  [getContact, getValueForSearch],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
