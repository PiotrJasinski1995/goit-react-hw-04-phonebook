import { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  static defaultProps = {
    message: '',
  };

  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

export default Notification;
