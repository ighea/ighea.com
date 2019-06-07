import React from 'react';


import TitledCommaSeparatedWordList from '../components/TitledCommaSeparatedWordList.js';

class ExperiencePage extends React.Component {

  render() {
    return (
      <div className="PageContent">

        <h2>Experience</h2>

        <p>Through work and hobbies I have tinkered at least with the following programming languages, frameworks and techniques.</p>

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