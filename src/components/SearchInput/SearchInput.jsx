import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './SearchInput.scss';

@CSSModules(styles, { allowMultiple: true })
class SearchInput extends PureComponent {
  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <img
            styleName="icon"
            src="https://api.icons8.com/download/0c1134f592bf842c2b6b34fc071b57f23d397885/windows10/PNG/512/Very_Basic/search-512.png"
            alt="Поиск"
          />
          <input
            styleName="search"
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchInput;
