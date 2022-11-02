import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class Button extends PureComponent {
  render() {
    const { text } = this.props;
    return (
      <div className="button-cont flex">
        <p>{text}</p>
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
