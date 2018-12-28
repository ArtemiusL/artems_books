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
    isVisiblyTitle: true,
    isVisiblyAuthor: true,
    isVisiblyDescription: true,
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
      isVisiblyTitle: !this.state.isVisiblyTitle,
    });
  }

  handleEditingAuthor = () => {
    this.setState({
      isEditingAuthor: !this.state.isEditingAuthor,
      isVisiblyAuthor: !this.state.isVisiblyAuthor,
    });
  }

  handleEditingDescription = () => {
    this.setState({
      isEditingDescription: !this.state.isEditingDescription,
      isVisiblyDescription: !this.state.isVisiblyDescription,
    });
  }

  handleBlur = ({ target: { name, value } }) => {
    const { editingBook, id } = this.props;
    editingBook(id, { [name]: value });
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

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  createInput = (value, name) => (
    <Input
      name={name}
      value={value}
      onChange={this.handleChange}
      onBlur={this.handleBlur}
    />
  )

  render() {
    return (
      <div styleName="root">
        <div styleName="bookCard">
          <span id="title" styleName="options" onDoubleClick={this.handleEditingTitle}>{this.state.isVisiblyTitle && this.props.title } </span>
          {this.state.isEditingTitle && this.createInput(this.state.title, 'title')} <br />
          <span id="author" styleName="options" onDoubleClick={this.handleEditingAuthor}>{this.state.isVisiblyAuthor && this.props.author} </span>
          {this.state.isEditingAuthor && this.createInput(this.state.author, 'author')} <br />
          <div id="description" styleName="options" onDoubleClick={this.handleEditingDescription}>{this.state.isVisiblyDescription && this.props.description} </div>
          {this.state.isEditingDescription && this.createInput(this.state.description, 'description')} <br />
          <button styleName="delete" onClick={this.handleClick}>Удалить</button>
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
