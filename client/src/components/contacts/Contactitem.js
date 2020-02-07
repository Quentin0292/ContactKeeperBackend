import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const Contactitem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const handleDelete = () => {
    // deleteContact come from contactContext
    deleteContact(id);
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge ${
            type === 'professional' ? 'badge-success' : 'badge-primary'
          }`}
        >
          {/* uppercase just the first charactere  */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

Contactitem.prototype = {
  contact: PropTypes.object.isRequired
};

export default Contactitem;
