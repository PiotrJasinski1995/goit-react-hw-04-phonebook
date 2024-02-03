import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

class Contact extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onHandleDeleteContact: PropTypes.func,
  };

  handleDeleteContact = () => {
    const { name, onHandleDeleteContact } = this.props;

    onHandleDeleteContact(name);
  };

  render() {
    const { name, number } = this.props;

    return (
      <Styled.ContactStyled>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={this.handleDeleteContact}>
          Delete
        </button>
      </Styled.ContactStyled>
    );
  }
}

export default Contact;
