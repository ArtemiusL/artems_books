import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Page.scss';

@CSSModules(styles, { allowMultiple: true })
class Page extends PureComponent {
  handleRemoveBook = () => {
    const { removeBook, id } = this.props;
    // eslint-disable-next-line
    debugger;
    removeBook(id);
  }

  render() {
    return (
      <div styleName="root">
        <label htmlFor="title"> Название книги:
          <p id="title">{this.props.title}</p>
        </label> <br />
        <label htmlFor="author"> Автор:
          <p id="author">{this.props.author}</p>
        </label> <br />
        <label htmlFor="description"> Описание:
          <p id="description">{this.props.description}</p>
        </label>
        <button onClick={this.handleRemoveBook}>remove</button>
      </div>
    );
  }
}


Page.propTypes = {
  removeBook: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default CSSModules(Page, styles);
