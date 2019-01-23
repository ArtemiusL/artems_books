import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import FieldForm from '_components/FieldForm';

import styles from './Form.scss';

const constantFields = [
  {
    id: 1,
    fieldName: 'title',
    label: 'Название книги',
    required: true,
  },
  {
    id: 2,
    fieldName: 'author',
    label: 'Автор книги',
    required: true,
  },
  {
    id: 3,
    fieldName: 'description',
    label: 'Описание книги',
    required: true,
  },
  {
    id: 4,
    fieldName: 'imgUrl',
    label: 'Ссылка на обложку книги',
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
      {
        name: 'imgUrl',
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
          handleChange={this.updateInput}
          data={currentField.value}
          required={item.required}
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
    return fields.some(item => item.value === '');
  }

  resetFiledsValue = fields => (
    fields.map((item) => {
      const newItem = { ...item, value: '' };
      return newItem;
    })
  );

  handleClickAdd = (evt) => {
    evt.preventDefault();
    const { fields } = this.state;
    const { addBook, books } = this.props;
    if (!(this.isEmptyFields())) {
      const id = books.length ? books[books.length - 1].id + 1 : 1;
      const book = {
        id,
        title: fields[0].value,
        author: fields[1].value,
        description: fields[2].value,
        imgUrl: fields[3].value,
      };

      addBook(book);
      const newFields = this.resetFiledsValue(fields);
      this.setState({
        fields: newFields,
      });
    }
  }

  render() {
    return (
      <div styleName="root">
        <div>
          <h1 styleName="title">Книжная библиотека</h1>
          <form
            styleName="form"
            onSubmit={this.handleClickAdd}
          >
            {this.createForm()}
            <button styleName="button" type="submit">
              Добавить книгу
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  addBook: PropTypes.func,
  books: PropTypes.array,
};

export default Form;
