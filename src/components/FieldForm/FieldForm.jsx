import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './FieldForm.scss';

@CSSModules(styles, { allowMultiple: true })
class FieldForm extends PureComponent {
  render() {
    const {
      data,
      label,
      handleChange,
      name,
      required,
    } = this.props;

    return (
      <div styleName="root">
        <label
          styleName="description"
          htmlFor={name}
        >
          {label} <br />
          <input
            styleName="input"
            type="text"
            name={name}
            value={data}
            required={required}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

FieldForm.propTypes = {
  label: PropTypes.string,
  data: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
};

export default FieldForm;
