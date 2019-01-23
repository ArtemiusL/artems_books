import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import image from '_images/search.png';

import styles from './SearchInput.scss';

@CSSModules(styles, { allowMultiple: true })
class SearchInput extends PureComponent {
  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <img
            styleName="icon"
            src={image}
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
