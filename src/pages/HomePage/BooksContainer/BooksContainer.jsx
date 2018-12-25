import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { removeBook, editBook } from '_actions/books';

import Book from '_components/Book';

class BooksContainer extends PureComponent {
  createBookBlock = () => {
    const { books } = this.props;

    return books.map(item => (
      <Book
        removeBook={this.props.removeBook}
        editingBook={this.props.editBook}
        id={item.id}
        key={item.id}
        title={item.title}
        author={item.author}
        description={item.description}
      />
    ),
    );
  }

  render() {
    const BookBlock = this.createBookBlock();

    return (
      <Fragment>
        {BookBlock}
      </Fragment>
    );
  }
}

BooksContainer.propTypes = {
  books: PropTypes.array,
  removeBook: PropTypes.func,
  editBook: PropTypes.func,
};

const mapStateToProps = ({ books }) => ({
  books,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { removeBook, editBook },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
