import React from "react";
import Contact from "./Contact";

class ContactList extends React.Component { 
  render() {
    
    return (
        <div>
            {this.props.contacts.length !== 0 &&
            this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter.toLowerCase())).map((contact) => {
             return (
               <Contact contact = {contact}
               onDelete={this.props.onDelete}>
                
               </Contact>
             )
           })}
    
        </div>
    );
  }
}

export default ContactList;