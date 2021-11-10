import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Redux/contacts-actions';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

function ContactForm(props) {
  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();
  const id = uuidv4();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contact = { name, number, id };

  const handleChangeEvent = e => {
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    // props.onSubmit(contact);
    props.onSubmitForm(contact);
    name.value = '';
    number.value = '';
  };

  return (
    <div className={s.Phonebook}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputNameId}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={inputNameId}
          onChange={handleChangeEvent}
        />
        <label htmlFor={inputNumberId}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={inputNumberId}
          onChange={handleChangeEvent}
        />
        <button type="submit">Add contacts</button>
      </form>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     submitVal: state.contacts.items,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: contact => dispatch(actions.submitForm(contact)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
