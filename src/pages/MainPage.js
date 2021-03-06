import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainPage extends React.Component {

  render() {
    const year_of_birth = 1986;
    const age = (new Date()).getFullYear() - year_of_birth;

    return (
      <div className="MainPage PageContent">

        <h2>Welcome to the awesome collection of self-praise about ME!</h2>

        <p>Cheerious!</p>

        <p>My name is <b>Mika Hynnä</b>, I am {age} years old technologically aligned fellow currently living in Finland.</p>

        <p>I have always been keenly interested in solving logical problems, playing with building blocks and doing research on new topics.</p>

        <p>I jumped on the GNU/Linux <FontAwesomeIcon icon={['fab', 'linux' ]} /> bandwagon on early 2000s and haven&acute;t regretted that choise. Nowadays GNU/Linux powers all my home and work platforms.</p>

        <p>These pages contain some examples of things I have done since I found QBasic from Windows 95´s installation media.</p>

        <p>Enjoy!</p>

      </div>
    )
  }

}

export default MainPage;