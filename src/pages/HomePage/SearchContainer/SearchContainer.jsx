import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import SearchInput from '_components/SearchInput';
import { setVisibilityFilter } from '_actions/books';

import styles from './SearchContainer.scss';

@CSSModules(styles, { allowMultiple: true })
class SearchContainer extends PureComponent {
  updateUrl(valueInput) {
    const { history } = this.props;
    let searchUrl;
    if (valueInput) {
      searchUrl = `/?search=${valueInput}`;
    }
    history.push(searchUrl);
  }

  handleChangeFilter = (e) => {
    const valueInput = e.target.value;
    const { onChangeFilter } = this.props;
    this.updateUrl(valueInput);
    onChangeFilter(valueInput);
  }

  render() {
    const { filterValue } = this.props;

    return (
      <div styleName="root">
        <div styleName="containerSearch">
          <SearchInput
            onChange={this.handleChangeFilter}
            value={filterValue}
            placeholder="Что ищем?"
          />
        </div>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  onChangeFilter: PropTypes.func,
  filterValue: PropTypes.string,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  filterValue: state.visibilityFilter,
});

const mapDispatchProps = dispatch => ({
  onChangeFilter: (value) => {
    dispatch(setVisibilityFilter(value));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(SearchContainer));
