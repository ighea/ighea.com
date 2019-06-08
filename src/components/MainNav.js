import React from 'react';
import { NavLink } from "react-router-dom";

import './MainNav.css';

class MainNav extends React.Component {

  render() {
    return (
      <nav className="MainNav">
        <ul>
          <li><NavLink to="/" exact>Me!</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects/">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }

}

export default MainNav;