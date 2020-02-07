import React, { useReducer } from 'react';
import uuid from 'uuid'; // for generating random id
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personnal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-111-1111',
        type: 'personnal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '111-111-3333',
        type: 'professional'
      },
      {
        id: 4,
        name: 'Barry White',
        email: 'barry@gmail.com',
        phone: '211-211-3333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contact

  // Set current contant

  // Clear current contact

  // Update  contact

  // Filter contact

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
