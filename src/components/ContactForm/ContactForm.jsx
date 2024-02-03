import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as Styled from './styled';

class ContactForm extends Component {
  static propTypes = {
    onHandleSubmit: PropTypes.func,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleFormSubmit = event => {
    const { onHandleSubmit } = this.props;

    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    onHandleSubmit(name, number);
  };

  render() {
    return (
      <Styled.ContactFormStyled onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
        />
        <button type="submit">Add contact</button>
      </Styled.ContactFormStyled>
    );
  }
}

export default ContactForm;
