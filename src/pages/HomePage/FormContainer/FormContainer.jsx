
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { addBooks } from '_actions/books';

import Form from './Form';

class FormContainer extends PureComponent {
  render() {
    return (
      <Fragment>
        <Form addBooks={this.props.addBooks} books={this.props.books} />
      </Fragment>
    );
  }
}

FormContainer.propTypes = {
  addBooks: PropTypes.func,
  books: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  books,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { addBooks },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
