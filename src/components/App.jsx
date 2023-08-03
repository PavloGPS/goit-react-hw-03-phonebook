import React, { Component } from 'react';
import CreateContactForm from './CreateContactForm/CreateContactForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'John Doe', number: '111-11-11' },
      { id: 'id-6', name: 'Jane Smith', number: '222-22-22' },
      { id: 'id-7', name: 'Michael Johnson', number: '333-33-33' },
      { id: 'id-8', name: 'Emily Brown', number: '444-44-44' },
      { id: 'id-9', name: 'William Davis', number: '555-55-55' },
      { id: 'id-10', name: 'Olivia Martinez', number: '666-66-66' },
      { id: 'id-11', name: 'James Jones', number: '777-77-77' },
      { id: 'id-12', name: 'Emma Garcia', number: '888-88-88' },
      { id: 'id-13', name: 'Daniel Miller', number: '999-99-99' },
      { id: 'id-14', name: 'Sophia Lopez', number: '000-00-00' },
      { id: 'id-15', name: 'Liam Wilson', number: '123-45-67' },
      { id: 'id-16', name: 'Ava Lee', number: '987-65-43' },
      { id: 'id-17', name: 'Noah Martin', number: '876-54-32' },
      { id: 'id-18', name: 'Isabella Allen', number: '765-43-21' },
      { id: 'id-19', name: 'Lucas Hall', number: '654-32-10' },
      { id: 'id-20', name: 'Mia Young', number: '321-09-87' },
      { id: 'id-21', name: 'Ethan Hill', number: '210-98-76' },
      { id: 'id-22', name: 'Emma Reed', number: '111-22-33' },
      { id: 'id-23', name: 'Logan Wood', number: '444-55-66' },
      { id: 'id-24', name: 'Olivia Fisher', number: '777-88-99' },
      { id: 'id-25', name: 'Aiden Clark', number: '999-00-11' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };
  addContact = newContact => {
    const nameIsAlreadyInContacts = this.state.contacts.some(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (nameIsAlreadyInContacts) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  setFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLocaleLowerCase() });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };
  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <CreateContactForm onCreateContact={this.addContact} />
        <Section title="Contacts">
          <Filter value={filter} onChangeFilterValue={this.setFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteBtnClick={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
