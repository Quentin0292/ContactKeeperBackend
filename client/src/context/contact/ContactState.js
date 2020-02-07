import React, { userReducer } from 'react';
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
        id: 1,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '111-111-3333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = userReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contant

  // Clear current contact

  // Update  contact

  // Filter contact

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
