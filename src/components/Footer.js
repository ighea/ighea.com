import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExternalLink from 'components/ExternalLink.js';

import './Footer.css';

function Footer(props) {
  return (
    <footer className="Footer">
      <ul>
        <li>
          <ExternalLink href="https://www.linkedin.com/in/mika-hynna-07984a108/">
            <FontAwesomeIcon icon={['fab', 'linkedin' ]} />&nbsp;Linkedin
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/ighea">
            <FontAwesomeIcon icon={['fab', 'github' ]} />&nbsp;GitHub
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;