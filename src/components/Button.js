import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class Button extends PureComponent {
  render() {
    const { text, onClick } = this.props;
    return (
      <button type="button" className="button-cont" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
