import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';


import styles from './Input.scss';

@CSSModules(styles, { allowMultiple: true })
class Input extends PureComponent {
  render() {
    const {
      name,
      value,
      onChange,
      onBlur,
      onKeyPress,
    } = this.props;

    return (
      <div styleName="root">
        <input
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default Input;
