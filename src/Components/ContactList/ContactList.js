import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteId }) => {
  return (
    <div className={s.ContactsList}>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <p>{name + ': ' + number}</p>
            <button onClick={() => onDeleteId(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteId: PropTypes.func.isRequired,
};

export default ContactList;
