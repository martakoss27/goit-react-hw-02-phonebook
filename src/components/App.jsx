import React, { Component } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    console.log(this);

    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleSubmit} />
          <h2>Contacts list</h2>
          <Contacts
            contacts={this.state.contacts}
            removeContact={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
