import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import { setSearchField, requestRobots } from '../store/actions';
import './App.css';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount = () => {
    this.props.onRequestRobots();
  };

  render() {
    const { robots, searchField, onSearchField, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={onSearchField} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.isPending
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
