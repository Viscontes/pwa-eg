import React, { PureComponent } from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';

class Header extends PureComponent {
  render() {
    whyDidYouUpdate(React);
    return <h1 className="f2">RoboFriends</h1>;
  }
}

export default Header;
