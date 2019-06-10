import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.css';
import 'assets/animations.css';

import Header from 'components/Header.js';
import Footer from 'components/Footer.js';

import Page from 'pages/Page.js';
import MainPage from 'pages/MainPage.js';
import ExperiencePage from 'pages/ExperiencePage.js';
import ProjectsPage from 'pages/ProjectsPage.js';
import ContactPage from 'pages/ContactPage.js';
import NotFoundPage from 'pages/NotFoundPage.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUserCircle, faEnvelope, faBars, faTimes);

class BaseApp extends React.Component {

  render() {

    const isFrontPage = (this.props.location.pathname === "/");
    const frontpageDefinationClass = (isFrontPage ? 'frontpage' : '');

    return (
      <div className="App">

        <header className={[ "App-header", frontpageDefinationClass ].join(" ")}>
          <Header links={[
              {
                name: "Me!",
                path: "/",
                title: "The front page and about me!",
                exact: true,
              },
              {
                name: "Experience",
                path: "/experience/",
                title: "Some parts of my wast experience",
              },
              {
                name: "Projects",
                path: "/projects/",
                title: "Projects I have done or tinkered with",
              },
              {
                name: "Contact",
                path: "/contact/",
                title: "Attempt to contact me",
              },
            ]}
          />
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
                <Route exact path="/" render={props => (
                  <Page {...props} component={MainPage} title="Programmer, Web Developer and Tech Enthusiast!" />
                )} />
                <Route exact path="/experience/" render={props => (
                  <Page {...props} component={ExperiencePage}  title="Experience"  />
                )} />
                <Route exact path="/projects/" render={props => (
                  <Page {...props} component={ProjectsPage}  title="Projects"  />
                )} />
                <Route exact path="/contact/" render={props => (
                  <Page {...props} component={ContactPage}  title="Contact"  />
                )} />
                <Route render={props => (
                  <Page {...props} component={NotFoundPage}  title="404 - Page Not Found"  />
                )} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )} />
        </main>

        <Footer />

      </div>
    );
  }
}

const App = withRouter(BaseApp);

export default App;
