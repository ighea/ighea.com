import React from 'react';

class MainPage extends React.Component {

  render() {

    const age = (new Date()).getFullYear() - 1986;

    return (
      <div className="MainPage PageContent">

        <h2>Welcome to the awesome collection of self-praise about ME!</h2>

        <p>Cheerious!</p>

        <p>My name is <b>Mika Hynnä</b> I am {age} years old technologically aligned fellow currently living in Finland.</p>

        <p>I have always been keenly interested in solving logical problems, playing with building blocks and doing research on new topics.</p>

        <p>I jumped on the GNU/Linux bandwagon on early 2000s and haven&acute;t regretted that choise. Even, when the first attempts with various distributions were not very successful due hardware support issues.</p>

        <p>These pages contain some examples of things I have done since I found QBasic from Windows 95´s installation media.</p>

        <p>Enjoy!</p>

      </div>
    )
  }

}

export default MainPage;