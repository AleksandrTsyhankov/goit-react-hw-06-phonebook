import { useState } from 'react';
import s from './ContactStyles.module.css';
// import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux'
import { addContact } from '../../redux/phonebook/phonebook-actions';

// console.log(phonebookActions)

function ContactForm({ contacts, handleSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const clearState = () => {
        setName('');
        setNumber('');

        return;
    }

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

     const handleSubmitForm = e => {
         e.preventDefault();

         const availableContact = contacts.find(contact =>  contact.name.toLowerCase() === name.toLowerCase())

            if (availableContact) {
                alert(`${contacts.name} is already in contacts.`);
                return;
            };
       

        handleSubmit(name, number);
        clearState();
    }


return ( 
<>
            <form className={s.form} onSubmit={handleSubmitForm}>
                <label className={s.label} >Name</label>
                    <input
                    className={s.inputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                    value={name}
                    />

                    <label className={s.label} >Number</label>
                    <input
                    className={s.inputTel}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                    value={number}
                />

                <button
                    className={s.btn}
                    type="submit"
                >
                    Add contact
                </button>
                </form>
</>
        );
}

const mapStateToProps = ({ phonebook }) => ({
    contacts: phonebook.items
});

const mapDispatchToProps = dispatch => ({
    handleSubmit: ( name, number ) => dispatch(addContact([name, number]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);