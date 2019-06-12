import React from 'react';

class LazyImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.myRef = React.createRef();

    if('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        if(entries[0].intersectionRatio <= 0) {
          return;
        }
        // element observed and root margins intersects
        this.setState({ visible: true });
        this.unobserve();
      }, {
        rootMargin: "20%"
      });
    } else {
      this.setState({ visible: true });
    }

  }

  observe() {
    this.intersectionObserver && this.intersectionObserver.observe(this.myRef.current);
  }

  unobserve() {
    this.intersectionObserver && this.intersectionObserver.unobserve(this.myRef.current);
  }

  componentDidMount() {
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
        srcset={this.props.srcset}
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