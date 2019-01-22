import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './BookCard.scss';

@CSSModules(styles, { allowMultiple: true })
class BookCard extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    books: PropTypes.array,
  };

  render() {
    const { books, match } = this.props;
    const book = books.filter(item => (Number(match.params.id) === item.id));

    return book.map(item => (
      <div styleName="root">
        <div key={item.id} styleName="card">
          <div styleName="cardOptions">
            <span>Книга: {item.title}</span> <br />
            <span>Автор: {item.author}</span> <br />
            <span>Описание: {item.description}</span> <br />
          </div>
          <div styleName="blockImage">
            <img styleName="picture" src={item.imgUrl} alt="картинка" />
          </div>
        </div>
        <div styleName="blockLink">
          <Link to="/" styleName="link">На главную</Link>
        </div>
      </div>
    ),
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books,
});

export default withRouter(connect(mapStateToProps)(BookCard));

