import React from 'react';

const baseDivStyles = {
  display: "block",
}

const boxStyles = {
  display: "inline-block",
  verticalAlign: "top",
  marginRight: "30pt",
}

class NotFoundPage extends React.Component {


  render() {
    return (
      <div className="PageContent">

        <h2>404 - Page Not Found</h2>

        <div style={baseDivStyles}>
          <div style={boxStyles}>

            <p>
              It looks like the page you have requested was not found. <b>*sad face*</b>
            </p>

            <p>All hope is not lost!</p>

            <p>
              As here is something random from Youtube for you to enjoy!
            </p>

          </div>

          <iframe title="Youtube video" width="500" height="315" src="https://www.youtube-nocookie.com/embed/mPVC2UJRAbc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={boxStyles}></iframe>

        </div>

      </div>
    );
  }
}

export default NotFoundPage;
