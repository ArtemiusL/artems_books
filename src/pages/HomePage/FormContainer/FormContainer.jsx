
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { addBook } from '_actions/books';

import Form from './Form';

class FormContainer extends PureComponent {
  render() {
    return (
      <Fragment>
        <Form addBook={this.props.addBook} books={this.props.books} />
      </Fragment>
    );
  }
}

FormContainer.propTypes = {
  addBook: PropTypes.func,
  books: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  books,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { addBook },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
