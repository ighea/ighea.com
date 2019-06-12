import React from 'react';

/*
This is implementation of LazyImage with only one singleton observer.
For some reason this loses viewport if page is refreshed using
the browser button or F5.
*/

class LazyImageIntersectionObserver {

  constructor() {

    if(LazyImageIntersectionObserver.instance){
      return LazyImageIntersectionObserver.instance;
    }

    LazyImageIntersectionObserver.instance = this;

    this.isSupported = ('IntersectionObserver' in window);

    if(!this.supported()) {
      return;
    }

    const options = {
      rootMargin: "200px 0px 200px 0px",
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {

      for(const entry of entries) {

        console.log(entry, entry.target, entry.intersectionRatio, entry.isIntersecting);

        if(!entry.isIntersecting) {
          return;
        }

        console.log("observed!: ", entry.target);

        // element observed and root margins intersects
        this.unobserve(entry.target);

        entry.target.component_instance.makeVisible();
      }
    }, options);

  }

  supported() {
    return this.isSupported;
  }

  observe(element_data) {

    if(!this.supported()) {
      return;
    }

    const element = element_data.element;
    element.component_instance = element_data.component_instance;

    console.log("observing: ", element);

    this.intersectionObserver.observe(element);
  }

  unobserve(element) {

    if(!this.supported()) {
      return;
    }
    console.log("unobserving: ", element);
    this.intersectionObserver.unobserve(element);
  }

}

const intersectionObserverSingleton = new LazyImageIntersectionObserver();
Object.freeze(intersectionObserverSingleton);


class LazyImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.myRef = React.createRef();
  }

  componentDidMount() {

    if(!intersectionObserverSingleton.supported()) {
      this.makeVisible();
      return;
    }

    this.observe();
  }

  makeVisible() {
    this.setState({ visible: true });
  }

  componentWillUnmount() {
    this.unobserve();
  }

  observe() {
    intersectionObserverSingleton.supported() && intersectionObserverSingleton.observe({
      element: this.myRef.current,
      component_instance: this
    });
  }

  unobserve() {
    intersectionObserverSingleton.supported() && intersectionObserverSingleton.unobserve(this.myRef.current);
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
