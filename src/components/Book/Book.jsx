import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Book.scss';

@CSSModules(styles, { allowMultiple: true })
class Book extends PureComponent {
  handleClick = () => {
    const { removeBook, id } = this.props;
    removeBook(id);
  }

  handleEditingBook = (evt) => {
    const { editingBook, id } = this.props;
    editingBook(id, evt.target.id);
  }

  render() {
    return (
      <div styleName="root">
        <span name="title" onDoubleClick={this.handleEditingBook}>{this.props.title} </span>
        <span name="author">{this.props.author} </span>
        <span name="description">{this.props.description} </span>
        <button onClick={this.handleClick}>remove</button>
      </div>
    );
  }
}


Book.propTypes = {
  removeBook: PropTypes.func,
  editingBook: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default CSSModules(Book, styles);
