import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import './App.css';

import MainPage from './pages/MainPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ProjectsPage from './pages/ProjectsPage.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_big_banner: true,
    }
  }

  handleNavigationEvent(value) {
    let state = this.state;
    state.show_big_banner = value;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">

        <Router>

          <header className={!this.state.show_big_banner?'App-header':'App-header App-header-large'}>

            <section className="App-header-main">

              <div>
                <h1>Mika Hynnä</h1>
                <p>Programmer, Web Developer and Tech Enthusiast!</p>
              </div>

              <nav>
                <ul>
                  <li><NavLink to="/" exact>Me!</NavLink></li>
                  <li><NavLink to="/experience">Experience</NavLink></li>
                  <li><NavLink to="/projects/">Projects</NavLink></li>
                </ul>
              </nav>

            </section>

          </header>

          <main>
            <Switch componentDidMount={() => console.log("SWITCH", this)}>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/experience" component={ExperiencePage} />
              <Route path="/projects/" component={ProjectsPage} />
            </Switch>
          </main>


          <footer className="App-footer">
            <ul>
              <li><a href="https://www.linkedin.com/in/mika-hynna-07984a108/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li><a href="https://github.com/ighea" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </footer>

        </Router>

      </div>
    );
  }
}

export default App;
