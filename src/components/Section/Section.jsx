import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

class Section extends Component {
  static defaultProps = {
    title: '',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;

    return (
      <Styled.SectionStyled>
        <h2>{title}</h2>
        {children}
      </Styled.SectionStyled>
    );
  }
}

export default Section;
