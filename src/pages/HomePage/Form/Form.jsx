/* eslint-disable */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { addBooks } from '_actions/books';

import styles from './Form.scss';

const constantFields = [
  {
    id: 1,
    fieldName: 'title',
    label: 'Введите название книги',
    required: true,
  },
  {
    id: 2,
    fieldName: 'author',
    label: 'Введите автора книги',
    required: true,
  },
  {
    id: 3,
    fieldName: 'description',
    label: 'Введите описание книги',
    required: true,
  },
];

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  state = {
    title: '',
    author: '',
    description: '',
  }

  changeInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClickAdd = () => {
    const { title, author, description } = this.state;
    const { addBooks, book } = this.props;
    const id = book.length ? book[book.length - 1].id + 1 : 0;
    addBooks(id, title, author, description);
    this.setState({
      title: '',
      author: '',
      description: '',
    });
  }

  render() {
    return (
      <div styleName="root">
        <form styleName="form">
        <h1>Книжная библиотека</h1>
          <div>
            <input
              name='title'
              value={this.state.title}
              onChange={this.changeInput}
            >
            </input>
            <input
              name='author'
              value={this.state.author}
              onChange={this.changeInput}
            >
            </input>
            <input
              name='description'
              value={this.state.description}
              onChange={this.changeInput}
            >
            </input>
          </div>
        </form>
        <button onClick={this.handleClickAdd}>
          Добавить книгу
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  addBooks: PropTypes.func,
  book: PropTypes.array,
};

const mapStateToProps = ({ books }) => ({
  book: books,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { addBooks },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
