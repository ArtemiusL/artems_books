import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { removeBook, editBook } from '_actions/books';
import Card from '_components/Card';

class BooksContainer extends PureComponent {
  createBookBlock = books => (
    books.map(item => (
      <Card
        removeBook={this.props.removeBook}
        editingBook={this.props.editBook}
        id={item.id}
        key={item.id}
        title={item.title}
        author={item.author}
        description={item.description}
        imgUrl={item.imgUrl}
      />
    ),
    ));

  searchBooks = () => (
    this.props.books.filter((item) => {
      let counter = 0;
      Object.values(item).map((value) => {
        if (typeof value !== 'number') {
          if (value.toLowerCase().indexOf(this.props.visibilityFilter.toLowerCase()) !== -1) {
            counter += 1;
          }
        }
        return false;
      });
      return counter > 0;
    })
  );

  render() {
    const filterBooks = this.searchBooks();
    const bookBlocks = this.createBookBlock(filterBooks);

    return (
      <Fragment>
        { bookBlocks }
      </Fragment>
    );
  }
}

BooksContainer.propTypes = {
  books: PropTypes.array,
  removeBook: PropTypes.func,
  editBook: PropTypes.func,
  visibilityFilter: PropTypes.string,
};

const mapStateToProps = ({ books, visibilityFilter }) => ({
  books,
  visibilityFilter,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { removeBook, editBook },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
