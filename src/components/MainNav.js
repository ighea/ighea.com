import React from 'react';

import MainNavDesktop from './MainNavDesktop.js';
import MainNavMobile from './MainNavMobile.js';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    if(this.state.width < 800) {
      return (
        <MainNavMobile links={this.props.links} />
      );
    } else {
      return (
        <MainNavDesktop links={this.props.links} />
      );
    }
  }

}

export default MainNav;