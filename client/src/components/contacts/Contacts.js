import React, { Fragment, useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';
import Contactitem from './Contactitem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map(contact => (
        <Contactitem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
