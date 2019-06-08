import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mailto from 'react-protected-mailto'

import image from '../assets/images/desk.jpg';

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

class ContactPage extends React.Component {

  render() {
    return (
      <div className="MainPage PageContent">

        <h2>Contact</h2>

        <div style={styles.container}>
          <section style={styles.content}>
            <h3><FontAwesomeIcon icon="user-circle" /> Poke on IRC</h3>
            <p>You can find me on IRC on Freenode, IRCNet and QuakeNet networks by nick <b>ighea</b>.</p>

            <h3><FontAwesomeIcon icon={['fab', 'linkedin' ]} /> Hail through LinkedIn</h3>
            <p>Don&acute;t be afraid! Send me a message on <a href="https://www.linkedin.com/in/mika-hynna-07984a108/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>

            <h3><FontAwesomeIcon icon="envelope" /> Send e-mail</h3>
            <p>
              to address <Mailto
                email='mika.hynna@ighea.com'
                headers={
                  {subject:'Question from the website ighea.com'}
                }
              />
            </p>
          </section>

          <section style={styles.image}>
            <img src={image} alt="Oled showing Ighea powered by Raspberry PI3." />
          </section>
        </div>

      </div>
    )
  }

}

export default ContactPage;
