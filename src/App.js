import React from 'react';
import { Route, NavLink, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import MainPage from './pages/MainPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ContactPage from './pages/ContactPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

import './App.css';
import './assets/animations.css';

class BaseApp extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const classes = (this.props.location.pathname === "/" ? 'App-header App-header-frontpage' : 'App-header');

    return (
      <div className="App">

        <header className={classes}>

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
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>

          </section>

        </header>

        <main className="App-main">
          <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={500}
            >
              <Switch location={location}>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/experience" component={ExperiencePage} />
                <Route path="/projects/" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )} />
        </main>

        <footer className="App-footer">
          <ul>
            <li><a href="https://www.linkedin.com/in/mika-hynna-07984a108/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href="https://github.com/ighea" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </footer>

      </div>
    );
  }
}

const App = withRouter(BaseApp);

export default App;
