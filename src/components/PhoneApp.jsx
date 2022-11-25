import React from 'react';
import ContactFilter from './phonebook/ContactFilter';
import Form from './phonebook/Form';
import { nanoid } from 'nanoid';
import styles from './phonebook/Phonebook.module.css';
import ContactList from './phonebook/ContactList';

class PhoneApp extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('did mount');

    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update');
    if (this.state.contacts !== prevState.contacts) {
      console.log('upd');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  onSubmit = data => {
    console.log(data);
    const { name, number } = data;

    if (
      this.state.contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      ).length === 0
    ) {
      const id = nanoid();
      const contact = {
        id: id,
        name: name,
        number: number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
      return true;
    } else {
      alert('This contact already exist');
      return false;
    }
  };

  onDelete = id => {
    // const id = event.target.parentElement.id;
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    return (
      <div>
        <h1 className={styles.text}>Phonebook</h1>

        <Form onSubmit={this.onSubmit}></Form>

        <h2 className={styles.contactText}>Contacts</h2>

        <ContactFilter
          filter={this.state.filter}
          onChange={this.onChange}
        ></ContactFilter>
        <ContactList
          contacts={this.getFilteredContacts()}
          filter={this.state.filter}
          onDelete={this.onDelete}
        ></ContactList>
      </div>
    );
  }
}
export default PhoneApp;
