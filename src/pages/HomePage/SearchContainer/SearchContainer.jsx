
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SearchInput from '_components/SearchInput';

import { setVisibilityFilter } from '_actions/books';

class SearchContainer extends PureComponent {
  componentDidMount() {
    const { location, history, filterValue } = this.props;
    if (filterValue) {
      location.search = `/?search=${filterValue}`;
    } else {
      location.search = '/?';
    }
    history.push(location.search);
  }

  handleChangeFilter = (e) => {
    const valueInput = e.target.value;
    const { onChangeFilter } = this.props;
    onChangeFilter(valueInput);
  }

  render() {
    const { filterValue } = this.props;
    return (
      <div>
        <form >
          <h4>Поиск</h4>
          <SearchInput
            onChange={this.handleChangeFilter}
            value={filterValue}
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
  location: PropTypes.object.isRequired,
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
