import React, {Component} from 'react';

var IntroPanel = React.createClass({
  getInitialState() {
    return {
      one:{
        "name": "Luke Skywalker",
        "birthYear": "19BBY",
        "eyeColor": "blue",
        "gender": "male",
        "hairColor": "blond",
        "height": 172,
        "mass": 77,
        "skinColor": "fair"
      },
      two:{
        "name": "Darth Vader",
        "birthYear": "41.9BBY",
        "eyeColor": "yellow",
        "gender": "male",
        "hairColor": "none",
        "height": 202,
        "mass": 136,
        "skinColor": "white"
      }
    };
  },
  render() {
    let nodes = [];
    Object.keys(this.state).forEach(function(item, i) {
      let data = this.state[item];
      nodes.push(<IntroCard key={i} data={data} />);
    }.bind(this))
    return (
      <div className="intro-panel">
        {nodes}
      </div>
    )
  }
});

var IntroCard = React.createClass({
  render() {
    return (
      <div className="intro-card card">
        <div className="intro-avatar"></div>
        <div className="intro-text">
          <p>{this.props.data.name}</p>
          <p>birth: {this.props.data.birthYear}</p>
          <p>eye color: {this.props.data.eyeColor}</p>
          <p>gender: {this.props.data.gender}</p>
          <p>hair color: {this.props.data.hairColor}</p>
          <p>height: {this.props.data.height}</p>
          <p>mass: {this.props.data.mass}</p>
          <p>skin color: {this.props.data.skinColor}</p>
        </div>
      </div>
    )
  }
});

export default IntroPanel;
