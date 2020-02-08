import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactEditForm from '../contacts/ContactEditForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
