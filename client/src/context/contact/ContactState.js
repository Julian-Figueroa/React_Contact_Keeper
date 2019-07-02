import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  REMOVE_ALERT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT
} from '../types';

const ContactState = props => {
  const initState = {
    contacts: [
      {
        id: 1,
        name: 'Arnoldo Viafara',
        email: 'arnold@email.com',
        phone: '111-1111-111',
        type: 'professional'
      },
      {
        id: 2,
        name: 'Maikel Fonseca',
        email: 'paken@email.com',
        phone: '222-2222-222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Antonhy De Avila',
        email: 'anthony@email.com',
        phone: '333-3333-333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initState);

  //Add Contact

  //Delete Contact

  //Set current Contact

  //Clear current contact

  //Update contact

  // Filter contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
