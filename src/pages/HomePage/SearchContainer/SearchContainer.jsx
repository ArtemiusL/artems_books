
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchInput from '_components/SearchInput';

import { setVisibilityFilter } from '_actions/books';

class SearchContainer extends PureComponent {
  handleChangeFilter = (e) => {
    const valueInput = e.target.value;
    const { onChangeFilter } = this.props;
    onChangeFilter(valueInput);
  }

  render() {
    return (
      <div>
        <form >
          <h4>Поиск</h4>
          <SearchInput
            onChange={this.handleChangeFilter}
            value={this.props.filterValue}
            placeholder="Что ищем?"
          />
        </form>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  onChangeFilter: PropTypes.func,
  filterValue: PropTypes.string,
};

const mapStateToProps = state => ({
  filterValue: state.visibilityFilter,
});

const mapDispatchProps = dispatch => ({
  onChangeFilter: (value) => {
    dispatch(setVisibilityFilter(value));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(SearchContainer);
