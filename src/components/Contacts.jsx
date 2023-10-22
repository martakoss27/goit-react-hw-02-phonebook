import React from 'react';

export const Contacts = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          <button type="button" onClick={removeContact}>
            REMOVE
          </button>
        </li>
      ))}
    </ul>
  );
};
