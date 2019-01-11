import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import Input from './Input';

import styles from './Book.scss';

@CSSModules(styles, { allowMultiple: true })
class Book extends PureComponent {
  state = {
    isEditingTitle: false,
    isEditingAuthor: false,
    isEditingDescription: false,
    title: this.props.title,
    author: this.props.author,
    description: this.props.description,
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

  updateInput = (name, value) => {
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

  handleBlur = ({ target: { name, value } }) => {
    this.updateInput(name, value);
  }

  handleKeyUp = (evt) => {
    if (evt.key === 'Enter') {
      this.updateInput(evt.target.name, evt.target.value);
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.replace(/^\s+/g, ''),
    });
  }

  createInput = (value, name) => (
    <Input
      name={name}
      value={value}
      onChange={this.handleChange}
      onBlur={this.handleBlur}
      onKeyPress={this.handleKeyUp}
    />
  )

  render() {
    return (
      <div styleName="root">
        <div styleName="bookCard">
          <div styleName="bookOptions">
            <span styleName="options" onDoubleClick={this.handleEditingTitle}>
              {this.state.isEditingTitle ? this.createInput(this.state.title, 'title') : this.props.title}
            </span> <br />
            <span styleName="options" onDoubleClick={this.handleEditingAuthor}>
              {this.state.isEditingAuthor ? this.createInput(this.state.author, 'author') : this.props.author}
            </span> <br />
            <span styleName="options" onDoubleClick={this.handleEditingDescription}>
              {this.state.isEditingDescription ? this.createInput(this.state.description, 'description') : this.props.description}
            </span>
            <br />
            <button styleName="delete" onClick={this.handleClick}>Удалить</button>
          </div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  removeBook: PropTypes.func,
  editingBook: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default CSSModules(Book, styles);
