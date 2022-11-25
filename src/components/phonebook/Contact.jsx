import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { id, name, number } = this.props.contact;

    return (
      <li className={styles.contactList} id={id}>
        {name}: {number}
        <button
          className={styles.buttonContact}
          onClick={() => this.props.onDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Contact;

Contact.propTypes = {
  contacts: PropTypes.objectOf(PropTypes.string.isRequired),
  onDelete: PropTypes.func.isRequired,
};
