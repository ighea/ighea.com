import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.css';
import './assets/animations.css';

import MainNav from './components/MainNav.js';

import MainPage from './pages/MainPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ContactPage from './pages/ContactPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUserCircle, faEnvelope);

class BaseApp extends React.Component {

  render() {

    const isFrontPage = (this.props.location.pathname === "/");
    const frontpageDefinationClass = (isFrontPage ? 'frontpage' : '');

    return (
      <div className="App">

        <header className={[ "App-header", frontpageDefinationClass ].join(" ")}>
          <section className="App-header-main">
            <div>
              <h1>Mika Hynnä</h1>
              <p>Programmer, Web Developer and Tech Enthusiast!</p>
            </div>
            <MainNav />
          </section>
        </header>

        <main className={[ "App-main", frontpageDefinationClass ].join(" ")}>
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
            <li>
              <a href="https://www.linkedin.com/in/mika-hynna-07984a108/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin' ]} />&nbsp;Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/ighea" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github' ]} />&nbsp;GitHub
              </a>
            </li>
          </ul>
        </footer>

      </div>
    );
  }
}

const App = withRouter(BaseApp);

export default App;
