// import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Redux/contacts-actions';
import s from './ContactList.module.css';
// import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteItem }) => {
  const [contactsLocal, setLocalContacts] = useState([]);
  console.log(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);
    setLocalContacts(parsedContacts);
  }, [contacts]);

  return (
    <div className={s.ContactsList}>
      <ul>
        {contactsLocal.map(({ name, id, number }) => (
          <li key={id}>
            <p>{name + ': ' + number}</p>
            <button
              onClick={() => {
                onDeleteItem(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onDeleteId: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    // onDeleteId: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: id => dispatch(actions.deleteItem(id)),
    // onFilterItems: e => dispatch(actions.filterItems(e.nativeEvent.data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
