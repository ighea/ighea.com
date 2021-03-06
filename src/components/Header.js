import React from 'react';

import MainNav from 'components/MainNav.js';

import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0,
    }
  }

  handleScroll = (event) =>  {
    const pos = event.pageY || window.scrollY || ( /*chrome?*/ event.path && event.path[1] && event.path[1].scrollY) || 0;
    this.setState({ scrollY: pos });
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    const header_moved = (this.state.scrollY > 50);
    return (
      <section className={[ "Header", (header_moved ? "Header-past-beginning" : "") ].join(' ')}>
        <div>
          <h1>Mika Hynnä</h1>
          <p>Programmer, Web Developer and Tech Enthusiast!</p>
        </div>
        <MainNav links={this.props.links}
        />
      </section>
    )
  }
}

export default Header;

