import contactsTypes from './contacts-types';

export const submitForm = value => ({
  type: contactsTypes.SUBMIT_FORM,
  payload: value,
});

export const searchVal = value => ({
  type: contactsTypes.SEARCH_VAL,
  payload: value,
});

export const deleteItem = value => ({
  type: contactsTypes.DELETE_ITEM,
  payload: value,
});

export const filterItems = value => ({
  type: contactsTypes.FILTER_ITEM,
  payload: value,
});
