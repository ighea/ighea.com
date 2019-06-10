import React from 'react';
import { NavLink } from "react-router-dom";

import './MainNavDesktop.css';

class MainNavDesktop extends React.Component {

  render() {
    return (
      <nav className="MainNavDesktop">
        <ul>
          {this.props.links.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                exact={(item.exact === true ? true : false)}
                title={item.title}
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

export default MainNavDesktop;
