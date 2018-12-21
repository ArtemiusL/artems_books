/* eslint-disable */
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
      handleChangeInput,
      name,
    } = this.props;

    return (
      <div styleName="root">
        <label>{label}<br />
          <input
            type="text"
            name={name}
            required
            value={data}
            onChange={handleChangeInput}
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
  handleChangeInput: PropTypes.func,
};

export default FieldForm;
