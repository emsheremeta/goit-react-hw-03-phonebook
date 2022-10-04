import React from "react";

class Contact extends React.Component { 
  render() {
    const {id, name, number} = this.props.contact;

    return (
        <li className="Phonebook__contactList" id={id}>{name}: {number}
        <button className="Phonebook__button__contact" onClick ={this.props.onDelete}>Delete</button>
        </li>
        
    );
  }
}

export default Contact;