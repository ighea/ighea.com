import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mailto from 'react-protected-mailto'

import image from '../assets/images/desk.jpg';

const styles = {};

styles.image = {
  float: "right",
  marginLeft: "40pt",
  marginBottom: "30pt",
  height: "auto",
  maxWidth: "50%",
}

class ContactPage extends React.Component {

  render() {
    return (
      <div className="MainPage PageContent">

        <h2>Contact</h2>

        <img src={image} alt="Oled showing Ighea powered by Raspberry PI3." style={styles.image} />

        <section>
          <h3><FontAwesomeIcon icon="user-circle" /> Poke on IRC</h3>
          <p>You can find me on IRC on Freenode, IRCNet and QuakeNet networks by nick <b>ighea</b>.</p>
        </section>

        <section>
          <h3><FontAwesomeIcon icon={['fab', 'linkedin' ]} /> Hail through LinkedIn</h3>
          <p>Don&acute;t be afraid! Send me a message on <a href="https://www.linkedin.com/in/mika-hynna-07984a108/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
        </section>

        <section>
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

      </div>
    )
  }

}

export default ContactPage;
