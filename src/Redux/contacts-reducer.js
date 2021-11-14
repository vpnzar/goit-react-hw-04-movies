import { createReducer } from '@reduxjs/toolkit';

const initState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsReducer = createReducer(initState, {
  'form/submit': (state, { payload }) => [...state, payload],
  'list/delete': (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  'list/filter': (_, { payload }) => payload,
});

// const itemsReducer = (state = initState, { type, payload }) => {
//   console.log(payload);
//   console.log(type);

//   switch (type) {
//     case contactsTypes.SUBMIT_FORM:
//       return [...state, payload];

//     case contactsTypes.DELETE_ITEM:
//       return state.filter(contact => contact.id !== payload);

//     case contactsTypes.FILTER_ITEM:
//       return payload !== null
// ? state.filter(contact =>
//             contact.name.toLowerCase().includes(payload.toLowerCase()),
//           )
//         : state;

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactsTypes.SEARCH_VAL:
//       return payload;

//     default:
//       return state;
//   }
// };
