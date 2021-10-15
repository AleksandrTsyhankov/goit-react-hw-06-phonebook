import { createAction } from '@reduxjs/toolkit';
// import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', text => ({
    payload: {
        id: uuidv4(),
        name: text[0],
        number: text[1]
    }
}));
export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');
