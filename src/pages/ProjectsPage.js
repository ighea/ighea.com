import React from 'react';

import Project from '../components/Project.js';

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
      <a
        href={process.env.PUBLIC_URL + '/images/' + image_name}
        title={"Open large image of " + this.props.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={process.env.PUBLIC_URL + '/images/' + thumbnail_image_name} alt={this.props.alt} />
      </a>
    );
  }
}

export default ProjectsPage;