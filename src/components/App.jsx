import React, { Component } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  //nanoid = nanoid();

  //FORM
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    Notiflix.Notify.success('New contact succesfully added!');
    form.reset();
  };

  //CONTACTS
  handleClick = id => {
    const { contacts } = this.state;
    const contactToRemove = contacts.find(contact => contact.id === id);

    if (contactToRemove) {
      this.setState(prev => ({
        contacts: prev.contacts.filter(contact => contact.id !== id),
      }));

      Notiflix.Notify.success(`${contactToRemove.name} has been removed`);
    }
  };
  //FILTER
  handleFilterChange = evt => {
    console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    console.log(this);
    const { contacts, filter } = this.state;
    //const filterSearch = contacts.filter(contact =>
    // contact.name.toLowerCase().includes(filter.toLowerCase())
    //);
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleSubmit} />
          <h2>Contacts list</h2>
          <Filter onChange={this.handleFilterChange} filter={filter} />
          <Contacts
            contacts={this.state.contacts}
            removeContact={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
