import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    let localContacts = [];

    try {
      localContacts = JSON.parse(localStorage.getItem('contacts'));
    } catch (error) {
      console.error('Error: ', error);
    }

    if (localContacts?.length > 0) {
      this.setState({
        contacts: localContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;

    if (contacts?.length > 0) {
      if (contacts.length !== prevContacts.length) {
        console.log('Local storage changed');
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    } else {
      console.log('Remove from local storage');
      localStorage.removeItem('contacts');
    }
  }

  handleFormSubmit = (name, number) => {
    const { contacts } = this.state;
    const nameContacts = contacts.map(contact => contact.name.toLowerCase());

    nameContacts.indexOf(name.toLowerCase()) !== -1
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              id: nanoid(),
              name,
              number,
            },
          ],
        }));
  };

  handleFilter = filter => {
    this.setState({
      filter,
    });
  };

  handleDeleteContact = name =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <MainHeading>Phonebook App</MainHeading>
        <Section title="Phonebook">
          <ContactForm onHandleSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length === 0 ? (
            <Notification message="No contacts in phonebook" />
          ) : (
            <>
              <Filter filter={filter} onHandleFilter={this.handleFilter} />
              <ContactList
                contacts={contacts}
                filter={filter}
                onHandleDeleteContact={this.handleDeleteContact}
              />
            </>
          )}
        </Section>
      </>
    );
  }
}

export default App;
