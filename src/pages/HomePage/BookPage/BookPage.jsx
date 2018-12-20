import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Page from '_components/Page';

class BookPage extends PureComponent {
  renderBookPage = () => {
    const { book } = this.props;
    console.log(book);
    return <Page list={book} />;
  }

  render() {
    return (
      <Fragment>
        {this.renderBookPage()}
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
