import { useState } from 'react';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const options = { name, number };
  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();

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
    props.onSubmit(options);
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

export default ContactForm;
