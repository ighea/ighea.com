import React from 'react';

import image from '../assets/images/ighea_spi.jpg';

import TitledCommaSeparatedWordList from '../components/TitledCommaSeparatedWordList.js';

const styles = {};

styles.image = {
  float: "right",
  marginLeft: "40pt",
  marginBottom: "30pt",
  height: "auto",
  maxWidth: "100%",
}

class ExperiencePage extends React.Component {

  render() {
    return (
      <div className="PageContent">

        <h2>Experience</h2>

        <img src={image} alt="Oled showing Ighea powered by Raspberry PI3." style={styles.image} />

        <p>On my not-so-long but eventful career I have worked on development, depmoyment, testing and quality assuring of various project, solutions and 3rd party partners.</p>

        <p>Through work and hobbies I have tinkered at least with the following programming languages, frameworks and techniques:</p>

        <TitledCommaSeparatedWordList
          title="Languages"
          items={[
            "PHP", "Ruby", "Python", "Java", "C#", "Object Pascal", "C++", "C", "Visual Basic"
          ]}
        />

        <TitledCommaSeparatedWordList
          title="Databases"
          items={[
            "MariaDB", "MySQL", "PostgreSQL", "SQLite", "Memcached", "Redis"
          ]}
        />

        <TitledCommaSeparatedWordList
          title="Frameworks"
          items={[
            "Ruby on Rails", "Sinatra", "Custom PHP MVC framework"
          ]}
        />

        <TitledCommaSeparatedWordList
          title="Concepts"
          items={[
            "MVC", "SPA web sites", "micro services", "PaaS", "SaaS"
          ]}
        />

        <TitledCommaSeparatedWordList
          title="Other"
          items={[
            "Involved in two system migrations. Worked with and implemented supports for various 3rd party APIs."
          ]}
        />

      </div>
    );
  }
}

export default ExperiencePage;