import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './SearchInput.scss';

@CSSModules(styles, { allowMultiple: true })
class SearchInput extends PureComponent {
  render() {
    return (
      <div styleName="root">
        <input
          {...this.props}
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default CSSModules(SearchInput, styles);
