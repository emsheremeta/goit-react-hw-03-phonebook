import React from "react";

class ContactFilter extends React.Component { 
  render() {
    return (
        <div>
      <label className="Phonebook__label__contacts"> 
      Find contacts by name: 
      </label>
        <input className="Phonebook__input__constacts"
        
  type="text"
  name="filter"
  value={this.props.filter}
  onChange={this.props.onChange}
/>
        
        </div>
    );
  }
}

export default ContactFilter;