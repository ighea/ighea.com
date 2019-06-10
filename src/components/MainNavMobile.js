import React from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MainNavMobile.css';

class MainNavMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }
  }

  handleMenuButtonClicked(event) {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleNavigationEntryClicked(event) {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div className="MainNavMobile">
        <button className="MenuButton" onClick={(e) => this.handleMenuButtonClicked(e)}>
          <FontAwesomeIcon icon={this.state.menuOpen ? "times" : "bars"} />
        </button>
        <MainNavMobileMenu links={this.props.links} menuOpen={this.state.menuOpen} onMenuEntryClicked={(e) => this.handleNavigationEntryClicked(e)} />
      </div>
    );
  }

}

class MainNavMobileMenu extends React.Component {
  render() {
    if(!this.props.menuOpen) {
      return null;
    }
    return (
      <nav className="MainNavMobileMenu">
        <ul>
          {this.props.links.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                exact={(item.exact === true ? true : false)}
                title={item.title}
                onClick={(e) => this.props.onMenuEntryClicked(e)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default MainNavMobile;
