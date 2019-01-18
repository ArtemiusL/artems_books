import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BookCard extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    books: PropTypes.array,
  };

  render() {
    const { books, match } = this.props;
    const book = books.filter(item => (Number(match.params.id) === item.id));

    return book.map(item => (
      <div key={item.id}>
        <span>{item.title}</span> <br />
        <span>{item.author}</span> <br />
        <span>{item.description}</span> <br />
        <img src={item.imgUrl} alt="картинка" />
      </div>
    ),
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books,
});

export default withRouter(connect(mapStateToProps)(BookCard));

