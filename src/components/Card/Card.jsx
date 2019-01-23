import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from './Input';

import styles from './Card.scss';

@CSSModules(styles, { allowMultiple: true })
class Card extends PureComponent {
  state = {
    isEditingTitle: false,
    isEditingAuthor: false,
    isEditingDescription: false,
  };

  handleClick = () => {
    const { removeBook, id } = this.props;
    removeBook(id);
  }

  handleEditingTitle = () => {
    this.setState({
      isEditingTitle: !this.state.isEditingTitle,
    });
  }

  handleEditingAuthor = () => {
    this.setState({
      isEditingAuthor: !this.state.isEditingAuthor,
    });
  }

  handleEditingDescription = () => {
    this.setState({
      isEditingDescription: !this.state.isEditingDescription,
    });
  }

  handleKeyUp = (evt) => {
    if (evt.key === 'Enter') {
      this.updateInput(evt);
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const { editingBook, id } = this.props;
    editingBook(id, { [name]: value.replace(/^\s+/g, '') });
  }

  updateInput = ({ target: { name, value } }) => {
    const { editingBook, id } = this.props;
    const data = value.trim();
    if (data) {
      editingBook(id, { [name]: data });

      switch (name) {
        case 'title':
          this.handleEditingTitle();
          break;
        case 'author':
          this.handleEditingAuthor();
          break;
        case 'description':
          this.handleEditingDescription();
          break;
        default:
          break;
      }
    }
  }

  createInput = (value, name) => (
    <Input
      name={name}
      value={value}
      onChange={this.handleChange}
      onBlur={this.updateInput}
      onKeyPress={this.handleKeyUp}
    />
  )

  render() {
    return (
      <div styleName="root">
        <div styleName="container">
          <div styleName="book">
            <div styleName="card">
              <span styleName="options" onDoubleClick={this.handleEditingTitle}>
                <b>Книга:</b> {this.state.isEditingTitle ? this.createInput(this.props.title, 'title') : this.props.title}
              </span> <br />
              <span styleName="options" onDoubleClick={this.handleEditingAuthor}>
                <b>Автор:</b> {this.state.isEditingAuthor ? this.createInput(this.props.author, 'author') : this.props.author}
              </span> <br />
              <span styleName="options" onDoubleClick={this.handleEditingDescription}>
                <b>Описание:</b> {this.state.isEditingDescription ? this.createInput(this.props.description, 'description') : this.props.description}
              </span>
              <br />
              <img styleName="picture" src={this.props.imgUrl} alt="картинка" />
              <br />
              <button styleName="delete" onClick={this.handleClick}>Удалить</button>
            </div>
            <div>
              <Link to={`/Bookcard/${this.props.id}`}>Подробнее</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  removeBook: PropTypes.func,
  editingBook: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  id: PropTypes.number,
};

export default CSSModules(Card, styles);
