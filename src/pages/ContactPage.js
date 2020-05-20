import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mailto from 'react-protected-mailto'

import image from 'assets/images/desk.jpg';

import ExternalLink from 'components/ExternalLink.js';
import LazyImage from 'components/LazyImage.js';

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
      <div className="PageContent">

        <h2>Contact</h2>

        <div style={styles.container}>
          <section style={styles.content}>

            <p>Here are various ways you may attempt to take contact with me. On most web services I go by with username/nickname <b>ighea</b> if you wish to try your luck.</p>

            <h3><FontAwesomeIcon icon="user-circle" /> Poke on IRC</h3>
            <p>You can find me on IRC on Freenode, IRCNet and QuakeNet networks by nick <b>ighea</b>.</p>

            <h3><FontAwesomeIcon icon={['fab', 'linkedin' ]} /> Hail through LinkedIn</h3>
            <p>Don&acute;t be afraid! Send me a message on <ExternalLink href="https://www.linkedin.com/in/mika-hynn%C3%A4-07984a108/">LinkedIn</ExternalLink>!</p>

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
            <LazyImage src={image} alt="A random desktop space." />
          </section>
        </div>

      </div>
    )
  }

}

export default ContactPage;
