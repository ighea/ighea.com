import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Project from 'components/Project.js';
import ExternalLink from 'components/ExternalLink.js';

class ProjectsPage extends React.Component {

  render() {
    return (
      <div className="ProjectsPage PageContent">

        <h2>Projects</h2>

        <p>Various noteworthy work and hobby projects I have been involved with.</p>

        <Project title="ighea.com - Everybody needs a web site!">
          <div>
            <p>Own sweet home!</p>
            <p>The best web site on the Internet - of course describing me.</p>
            <p>Written as a ReactJS single page application (SPA) out of curiosity and for some actual practise during the hot summer of year 2019.</p>
          </div>
          <div>
            <Image image="ighea.com.jpg" alt="ighea.com frontpage from middle 2019" />
          </div>
        </Project>

        <Project title="Pizza-online.fi - Online food ordering platform">
          <div>
            <p>Between years 2012 and 2019 I worked for Delivery Hero Finland Oy and was, among other things, on charge of developing and maintaining their main product which updated base originated from my spare time project.</p>
            <p>Customers were able to order from hundreds of restaurants by simply typing in their delivery address or using GEO location. Re-ordering was only matter of couple clicks on the site.</p>
            <p>For legacy reasons and lack of proper solutions at the time the project was written using custom PHP framework that included the necessary custom legacy support features that were mandatory for the project to prosper.</p>
            <p>Frontend side was written with HTML5, Twitter-Bootstrap v3, Javascript, jQuery and PHP.</p>
          </div>
          <div>
            <Image image="pizza-online.fi.jpg" alt="Pizza-online.fi frontpage from 2019" />
          </div>
        </Project>

        <Project title="Pizzaportaali.fi - Management portal for vendor customers">
          <div>
            <p>During my employment on Delivery Hero Finland Oy around early 2014 I was tasked to build a portal for our vendor customers where it would be easily possible to do mundane tasks and view essential vendor information and releaf some pressure from customer care.</p>
            <p>This lead to Pizzaportaali.fi to be born. Vendors were easily able to manage their sellable product states and view statistics and settlement information.</p>
            <p>Frontend side was written with HTML5, Twitter-Bootstrap v4, Javascript, jQuery and PHP.</p>
          </div>
          <div>
            <Image image="pizzaportaali.fi.jpg" alt="Pizzaportaali.fi frontpage from 2018" />
          </div>
        </Project>

        <Project title="Fiidmi.fi - Public food ordering API">
          <div>
            <p>I have worked on backend food ordering API and it&acute;s documentation pages that powered Windows Phone, Symbian OS, Android and iOS apps.</p>
            <p>At some point of time the API was available for everyone to use and implement their own ordering applications.</p>
            <p>The API backend was written using PHP and our custom MVC framework. The documentation web site was powered by Ruby on Rails.</p>
          </div>
          <div>
            <Image image="fiidmi.fi.jpg" alt="Fiidmi.fi frontpage from 2019" />
          </div>
        </Project>

        <Project title="POManager.fi - Full-fledged platform content management and statistics tool">
          <div>
            <p>When I was hired to Delivery Hero Finland Oy (called SLM Finland Oy at that point of time) my first task was to start creating a replacement for the old and clunky content management system.</p>
            <p>My approach to solving issues and implementing features by first understanding the actual core needs led to visually crude platform with superior usability and task completion times for customer care, operations and sales departments.</p>
            <p>After being replaced with a newer generic solution it&acute;s usability, targeted features and power is deeply missed.</p>
            <p>Frontend side was written with HTML5, Javascript, jQuery and PHP. Backend used was custom PHP framework and it featured cron task which were written depending on the use case either with ruby or PHP.</p>
          </div>
          <div>
            <Image image="pomanager.fi.jpg" alt="POManager.fi order search view from 2019" />
          </div>
        </Project>

        <Project title="LightCourier HTML5">
          <div>
            <p>LightCourier HTML5 is a HTML5/JavaScript port of a Microsoft XNA based game written in C#.</p>
            <p>The idea is to stay out of darkness long enough to survive from a lamp post to another past each level.</p>
            <p>The original game was created during 48h game development festival and I did the keyboard smashing. This port was published at 25.01.2011 and seems to be still (8.6.2019) working well on more modern Firefox browser.</p>
            <p>
              See on <ExternalLink href="https://github.com/ighea/lightcourier-html5" title="Take a peek at the code stuff on the GitHub."><FontAwesomeIcon icon={["fab", "github"]} />&nbsp;GitHub</ExternalLink> or <ExternalLink href="https://ighea.github.io/lightcourier-html5/" title="Opens to new window. Usable only with desktop or laptop.">try it out</ExternalLink> (keyboard required)!
            </p>
          </div>
          <div>
            <Image image="lightcourier-html5.png" alt="Starting menu of LightCourier HTML5" />
          </div>
        </Project>

        <Project title="SaunaVisio utility program">
          <div>
            <p>SaunaVisio utility program (or SaunaVisio-aputyökalu in Finnish) was a script for timing media to be recorded and downloading media from SaunaVisio web interface and later it became a full-fledged application for SaunaVisio IPTV solution content management.</p>
            <p>The program featured a download manager, fast TV-program search and ability to set TV-programs to be recorded automatically by pre-defined filters.</p>
            <p>Written in 2008 using python and PyGTK for GUI.</p>
            <p>See on <ExternalLink href="https://github.com/ighea/saunavisio-utility-program" title="Take a peek at the code stuff on the GitHub."><FontAwesomeIcon icon={["fab", "github"]} />&nbsp;GitHub</ExternalLink>.
            </p>
          </div>
          <div>
            <Image image="saunavisio-gui.jpg" alt="SaunaVisio GUI main screen" />
          </div>
        </Project>

        <Project title="Teddi - Adventures of Teddi-bear">
          <div>
            <p>Teddi is a rushed game made out of a rushed attempt to create a 2D game engine.</p>
            <p>Initially aimed as a entry to a game competition. Results were horendous due to lack of time and actual good ideas what the game would be about. At least the screenshot shows my aptitude for graphical design...</p>
            <p>Written in 2007 using C++ and libSDL v1.2.</p>
            <p>See on <ExternalLink href="https://github.com/ighea/teddi" title="Take a peek at the code stuff on the GitHub."><FontAwesomeIcon icon={["fab", "github"]} />&nbsp;GitHub</ExternalLink>.
            </p>
          </div>
          <div>
            <Image image="teddi-mainmenu.png" alt="Teddi main menu screen" />
          </div>
        </Project>

        <Project title="Simetra - An another Alien Phobia clone">
          <div>
            <p>The Simetra is an Alien Phobia game in which you simply try to survive as long as possible by killing aliens spawning from sides of the screen.</p>
            <p>Scores can be tracked either by kills or survival time. Features a shotgun power-up and health kits that spawn randomly.</p>
            <p>Written in 2006 using C and libSDL v1.2 and friends for drawing graphics, text and sounds.</p>
            <p>See on <ExternalLink href="https://github.com/ighea/simetra" title="Take a peek at the code stuff on the GitHub."><FontAwesomeIcon icon={["fab", "github"]} />&nbsp;GitHub</ExternalLink>.
            </p>
          </div>
          <div>
            <Image image="simetra-gameplay.png" alt="Simetra gameplay" />
          </div>
        </Project>

      </div>
    );
  }

}

class Image extends React.Component {
  render() {

    const image_name = this.props.image;

    const regexp = /(.*)\.(.+)/;
    const match = regexp.exec(image_name);
    const thumbnail_image_name = match[1] + "_thumbnail." + match[2];

    return (
      <ExternalLink
        href={process.env.PUBLIC_URL + '/images/' + image_name}
        title={"Open large image of " + this.props.alt}
      >
        <img src={process.env.PUBLIC_URL + '/images/' + thumbnail_image_name} alt={this.props.alt} />
      </ExternalLink>
    );
  }
}

export default ProjectsPage;