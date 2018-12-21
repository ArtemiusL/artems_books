import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Page from '_components/Page';

class BookPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Page list={this.props.book} />
      </Fragment>
    );
  }
}

BookPage.propTypes = {
  book: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  book: books,
});

export default connect(mapStateToProps)(BookPage);
