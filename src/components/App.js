import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import MainPage from './MainPage';
import { setSearchField, requestRobots } from '../store/actions';

class App extends PureComponent {
  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchField: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
