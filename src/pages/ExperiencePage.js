import React from 'react';

import image from '../assets/images/ighea_spi.jpg';

import TitledCommaSeparatedWordList from '../components/TitledCommaSeparatedWordList.js';

const styles = {};
styles.container = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
}
styles.content = {
  flexGrow: 2,
  width: "200px",
}
styles.image = {
  flexGrow: 1,
  width: "200px",
  marginLeft: "40pt",
  marginRight: "40pt",
}

class ExperiencePage extends React.Component {

  render() {
    return (
      <div className="PageContent">

        <h2>Experience</h2>

        <div style={styles.container}>

          <section style={styles.content}>

            <p>On my not-so-long but eventful career I have worked on development, deployment, testing and quality assuring of various project, solutions and with 3rd party partners.</p>

            <h3>Working history</h3>

            <p>From the start of <b>2012</b> until middle of the <b>2019</b> I was employed by <b>Delivery Hero Finland Oy</b> as <b>ICT Specialist</b>. My work consisted of development, maintenance and support of various in-house appliances, and after a while even consisting the main product <b>Pizza-online.fi</b>.</p>

            <p>Through work and hobbies I have tinkered at least with the following programming languages, frameworks, support tools and techniques:</p>

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
              title="Testing systems"
              items={[
                "PHPUnit", "cucumber (ruby)", "pytest (python)"
              ]}
            />

            <TitledCommaSeparatedWordList
              title="Ticket and product management"
              items={[
                "Jira", "redmine"
              ]}
            />

            <TitledCommaSeparatedWordList
              title="A/B testing tools"
              items={[
                "Visual Website Optimizer (VWO)", "Optimizely"
              ]}
            />

            <TitledCommaSeparatedWordList
              title="Other"
              items={[
                "Involved in two system migrations. Worked with and implemented supports for various 3rd party APIs, including payment systems and processors."
              ]}
            />
            <p>Over ten years of experience on GNU/Linux. Built <a href="http://www.linuxfromscratch.org/" target="_blank" rel="noopener noreferrer" title="Go to external site.">Linux From Scratch</a> successfully!</p>
          </section>

          <section style={styles.image}>
            <img src={image} alt="Oled showing Ighea powered by Raspberry PI3." />
          </section>
        </div>

      </div>
    );
  }
}

export default ExperiencePage;