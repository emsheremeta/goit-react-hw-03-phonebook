import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Please, add the name! ');
      return;
    }
    const result = this.props.onSubmit(this.state);
    if (result) {
      this.reset();
    }
  };

  onChange = event => {
    console.log(event);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            size={35}
            placeholder="Put your name here"
            onChange={this.onChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={styles.label}>Number</label>
          <input
            className={styles.input}
            size={35}
            placeholder="Put your number here"
            onChange={this.onChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={styles.button} onClick={this.onSubmit}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
