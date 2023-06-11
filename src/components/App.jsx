import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedLS = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedLS);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const find = this.state.contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );

    find
      ? alert(find.name + ' is already in contacts.')
      : this.setState({ contacts: [...contacts, newContact] });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleFilter = this.getVisibleFilter();

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList
          contacts={visibleFilter}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
