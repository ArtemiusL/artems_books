import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Page.scss';

const Page = ({ list }) => (
  <div styleName="root">
    <h3>Список книг</h3>
    <div>
      {list.map(book => (
        <div key={book.id}>
          <label htmlFor="title"> Название книги
            <p id="title">{book.title}</p>
          </label>
          <label htmlFor="author">Автор
            <p id="author">{book.author}</p>
          </label>
          <label htmlFor="description"> Описание
            <p id="description">{book.description}</p>
          </label>
        </div>
      ))}
    </div>
  </div>
);

Page.propTypes = {
  list: PropTypes.array,
};

export default CSSModules(Page, styles);
