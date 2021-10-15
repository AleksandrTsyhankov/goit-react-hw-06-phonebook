import React from 'react';
import s from './ContactStyles.module.css';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { connect } from 'react-redux'
// import { useEffect } from 'react';


function ContactList({ contacts, deleteContact }) {
        return (
            <>
                <ul className={s.contactsList}>
                    {contacts.map(contact => (
                        <li
                            key={contact.id}
                            className={s.contactsListItem}
                        > {contact.name}: {contact.number}

                            <span
                                onClick={() => deleteContact(contact.id)}
                                className={s.delBtn}
                            >-</span>
                        </li>
                    ))}
                </ul>
            </>
        );
};

const fillterContacts = (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));
    return filteredContacts;
};

// const mapStateToProps = state => {
//     const { filter, contactItems } = state.phonebook;
//     const filteredContacts = fillterContacts(contactItems, filter);

//     return {
//         contacts: filteredContacts,
//     };
// };

const mapStateToProps = ({ phonebook: { filter, items } }) => ({
   contacts:  fillterContacts(items, filter)
});

const mapDispatchToProps = dispatch => ({
    deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);