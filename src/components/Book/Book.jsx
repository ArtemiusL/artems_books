import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Book.scss';

@CSSModules(styles, { allowMultiple: true })
class Book extends PureComponent {
  state = {
    isEditingTitle: false,
    isEditingAuthor: false,
    isEditingDescription: false,
    value: '',
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

  handleBlur = ({ target: { name, value } }) => {
    const { editingBook, id } = this.props;
    editingBook(id, { [name]: value });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      value,
    });
  }

  createInput = (value, name) => (
    <input
      name={name}
      placeholder={value}
      value={this.state.value}
      onChange={this.handleChange}
      onBlur={this.handleBlur}
    />
  )

  render() {
    return (
      <div styleName="root">
        <div styleName="bookCard">
          <span id="title" onDoubleClick={this.handleEditingTitle}>{this.props.title} </span>
          {this.state.isEditingTitle && this.createInput(this.props.title, 'title')} <br />
          <span id="author" onDoubleClick={this.handleEditingAuthor}>{this.props.author} </span>
          {this.state.isEditingAuthor && this.createInput(this.props.author, 'author')} <br />
          <span id="description" onDoubleClick={this.handleEditingDescription}>{this.props.description} </span>
          {this.state.isEditingDescription && this.createInput(this.props.description, 'description')} <br />
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
