import React from 'react';

import './Project.css';

class Project extends React.Component {
  render() {
    return (
      <div className="Project">
        <h3>{this.props.title}</h3>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Project;
