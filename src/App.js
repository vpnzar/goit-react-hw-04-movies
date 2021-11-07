import './App.css';
import { useState, useEffect, useMemo } from 'react';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const formSubmitHandle = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    const result = contacts.some(value => value.name === contact.name);
    if (!result) {
      setContacts([...contacts, contact]);
    } else alert(`${contact.name} is already in contacts`);
  };

  const inputSearchChange = e => setFilter(e.target.value);

  const inputContactSearch = useMemo(() => {
    let searchValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue),
    );
  }, [filter, contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandle} />
      <h1>Contacts</h1>
      <Filter value={filter} onChange={inputSearchChange} />
      <ContactList contacts={inputContactSearch} onDeleteId={deleteContact} />
    </div>
  );
}

export default App;
