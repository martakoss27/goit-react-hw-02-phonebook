import React from 'react';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button type="button" onClick={() => removeContact(contact.id)}>
            REMOVE
          </button>
        </li>
      ))}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
