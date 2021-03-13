import './App.css';
import React, { Component } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuid } from 'uuid';
import { config } from "react-spring";



class App extends Component {
  state = {
    offsetRadius: 10,
    showNavigation: true,
    config: config.slow,
    goToSlide: 0,
  };

  slides = [
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    },
    {
      key: uuid(),
      content: <div className="home">hi</div>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };


  render() {
    return (
      <div className="carousel">
        <Carousel
          slides={this.slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          goToSlide={this.state.goToSlide}
        />
      </div>
    );
  }
}

export default App;
