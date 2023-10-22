import React, { Component } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  //nanoid = nanoid();

  //FORM
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const {
      name: { value: name },
    } = form.elements;
    const newContact = {
      id: nanoid(),
      name,
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
    const deleteContact = contacts.find(contact => contact.id === id);

    if (deleteContact) {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
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
