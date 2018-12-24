import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { remBook } from '_actions/books';

import Page from '_components/Page';

class BookPage extends PureComponent {
  createBookBlock = () => {
    const { book } = this.props;
    return book.map(item => (
      <Page
        removeBook={this.props.remBook}
        id={item.id}
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

BookPage.propTypes = {
  book: PropTypes.array,
  remBook: PropTypes.func,
};

const mapStateToProps = ({ books }) => ({
  book: books,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { remBook },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
