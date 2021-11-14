import { createAction } from '@reduxjs/toolkit';

// export const submitForm = value => ({
//   type: contactsTypes.SUBMIT_FORM,
//   payload: value,
// });
export const submitForm = createAction('form/submit');

// export const deleteItem = value => ({
//   type: contactsTypes.DELETE_ITEM,
//   payload: value,
// });
export const deleteItem = createAction('list/delete');

// export const filterItems = value => ({
//   type: contactsTypes.FILTER_ITEM,
//   payload: value,
// });
export const filterItems = createAction('list/filter');
