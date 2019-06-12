import React from 'react';

class LazyImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.myRef = React.createRef();

    this.isObserverSupported = ('IntersectionObserver' in window);

    this.intersectionObserver = null;
  }

  loadImage() {
    this.setState({ visible: true });
  }

  observe() {
    this.isObserverSupported && this.intersectionObserver && this.intersectionObserver.observe(this.myRef.current);
  }

  unobserve() {
    this.isObserverSupported && this.intersectionObserver && this.intersectionObserver.disconnect(this.myRef.current);
  }

  componentDidMount() {
    if(!this.isObserverSupported) {
      this.loadImage();
      return;
    }

    const options = {
      rootMargin: "200px 0px 200px 0px"
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      for(const entry of entries) {
        if(entry.intersectionRatio <= 0) {
          return;
        }
        // element observed and root margins intersects
        this.unobserve();
        this.loadImage();
      }
    }, options);

    this.observe();
  }

  componentWillUnmount() {
    this.unobserve();
  }

  render() {
    return (
      <img
        ref={this.myRef}
        src={this.state.visible ? this.props.src : ""}
        srcSet={this.state.visible ? this.props.srcset : ""}
        width={this.props.width}
        height={this.props.height}
        sizes={this.props.sizes}
        alt={this.props.alt}
        title={this.props.title}
      />
    );
  }
}

export default LazyImage;