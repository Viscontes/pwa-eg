import React, { Component } from 'react';

import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount = () => {
    this.props.onRequestRobots();
  };

  filterRobots = robots => {
    return robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { robots, onSearchField, isPending } = this.props;

    return isPending ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={onSearchField} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots(robots)} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
