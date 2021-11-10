import './App.css';
// import { useState, useEffect, useMemo } from 'react';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
// import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  //   const result = contacts.some(value => value.name === contact.name);
  //   if (!result) {
  //     setContacts([...contacts, contact]);
  //   } else alert(`${contact.name} is already in contacts`);
  // };

  // const inputSearchChange = e => setFilter(e.target.value);

  // const inputContactSearch = useMemo(() => {
  //   let searchValue = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(searchValue),
  //   );
  // }, [filter, contacts]);

  // useEffect(() => {
  //   const contactsLocal = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsLocal);
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
