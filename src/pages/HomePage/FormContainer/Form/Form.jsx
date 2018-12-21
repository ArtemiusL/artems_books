import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import FieldForm from '_components/FieldForm';

import styles from './Form.scss';

const constantFields = [
  {
    fieldName: 'title',
    label: 'Введите название книги',
    required: true,
  },
  {
    fieldName: 'author',
    label: 'Введите автора книги',
    required: true,
  },
  {
    fieldName: 'description',
    label: 'Введите описание книги',
    required: true,
  },
];

@CSSModules(styles, { allowMultiple: true })
class Form extends PureComponent {
  state = {
    fields: [
      {
        name: 'title',
        value: '',
      },
      {
        name: 'author',
        value: '',
      },
      {
        name: 'description',
        value: '',
      },
    ],
  }

  createForm = () => {
    const {
      fields,
    } = this.state;
    return constantFields.map((item) => {
      const { fieldName } = item;
      const currentFieldIndex = fields.map(field => field.name).indexOf(fieldName);
      if (currentFieldIndex === -1) {
        return null;
      }
      const currentField = fields[currentFieldIndex];
      return (
        <FieldForm
          key={item.id}
          id={item.id}
          name={item.fieldName}
          handleChangeInput={this.updateInput}
          data={currentField.value}
          {...item}
        />
      );
    });
  }

  updateInput = ({ target: { name, value } }) => {
    const { fields } = this.state;
    const getNewState = () => (
      fields.map((item) => {
        if (item.name === name) {
          const newItem = { ...item, value };
          return newItem;
        }
        return item;
      })
    );
    const newFields = getNewState();

    this.setState({
      fields: newFields,
    });
  }

  isEmptyFields = () => {
    const { fields } = this.state;
    if (fields[0].value === '' || fields[1].value === '' || fields[2].value === '') {
      return true;
    }
    return false;
  }

  handleClickAdd = () => {
    const { fields } = this.state;
    const { addBooks, books } = this.props;
    const id = books.length ? books[books.length - 1].id + 1 : 0;
    if (!(this.isEmptyFields())) {
      addBooks(id, fields[0].value, fields[1].value, fields[2].value);
      const getNewState = () => (
        fields.map((item) => {
          const newItem = { ...item, value: '' };
          return newItem;
        })
      );
      const newFields = getNewState();

      this.setState({
        fields: newFields,
      });
    }
  }

  render() {
    return (
      <div styleName="root">
        <form styleName="form">
          <h1>Книжная библиотека</h1>
          {this.createForm()}
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
  books: PropTypes.array,
};

export default Form;