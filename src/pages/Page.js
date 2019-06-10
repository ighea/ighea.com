import React from 'react';

class Page extends React.Component {

  componentDidMount() {

    const title = this.props.title;

    let full_title = process.env.REACT_APP_SITE_TITLE;

    if(title) {
      full_title = title + " - " + full_title;
    }

    document.title = full_title;

  }

  render() {

    const PageComponent = this.props.component;

    return (
      <PageComponent />
    );
  }
}

export default Page;
