import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Container } from './App.styled';

const initialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialState
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    toast.success('Contact deleted');
  };

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    const find = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );

    if (find) {
      toast.error(`Contact ${find.name} is already in contacts.`);
      return;
    }
    toast.success('Contact added');
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleFilter = getVisibleFilter();

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAdd={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList contacts={visibleFilter} onDeleteContact={deleteContact} />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

// class App extends Component {
//   state = {
//     contacts: [
//       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// componentDidMount() {
//   const savedLS = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(savedLS);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(_, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// handleAddContact = (name, number) => {
//   const { contacts } = this.state;
//   const newContact = { id: nanoid(), name, number };
//   const find = this.state.contacts.find(
//     element => element.name.toLowerCase() === name.toLowerCase()
//   );

//   find
//     ? alert(find.name + ' is already in contacts.')
//     : this.setState({ contacts: [...contacts, newContact] });
// };

// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleFilter = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// render() {
//   const visibleFilter = this.getVisibleFilter();

//     return (
//       <Container>
//         <h2>Phonebook</h2>
//         <ContactForm onAdd={this.handleAddContact} />
//         <h2>Contacts</h2>
//         <Filter onChange={this.changeFilter} value={this.state.filter} />
//         <ContactList
//           contacts={visibleFilter}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }

export default App;
