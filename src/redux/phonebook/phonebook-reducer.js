import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './phonebook-types';
import { addContact, deleteContact, filterContacts } from './phonebook-actions';
// import {actions} from './phonebook-actions';


const items = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});


// const initialState = {
//     contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
// };

// const contactItems = (state = initialState.contacts, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             const availableContact = state.find(contact =>  contact.name.toLowerCase() === payload.name.toLowerCase())

//             if (availableContact) {
//                 alert(`${payload.name} is already in contacts.`);
//                 return [...state];
//             };

            
//             window.localStorage.setItem('contacts', JSON.stringify([payload, ...state]));
//             // console.log(payload)
//             return [payload, ...state];

        
//         case types.DELETE:

//             const newContacts = state.filter(({ id }) => id !== payload);
//             window.localStorage.setItem('contacts', JSON.stringify(newContacts));
            
//             return [...newContacts];
        
//         default:
//             return state;
//     };
// };

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER:
//             return payload;

//         default:
//             return state;
//     };
// };


