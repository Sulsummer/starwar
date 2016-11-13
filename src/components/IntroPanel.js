import React, {Component} from 'react';
import $ from 'jQuery';

var IntroPanel = React.createClass({
  getInitialState() {
    return {};
  },
  selectPerson(item, index) {
    this.props.selectPerson(item, index);
  },
  componentWillReceiveProps(nextProps) {
    let updateData = nextProps.updateData,
        that = this;
    Object.keys(updateData).forEach(function(key, i) {
      that.broadcastToIntroCard(key, updateData[key])
    }.bind(that))
  },
  broadcastToIntroCard(index, personFile) {
    this.refs[index].setPersonFile(personFile);
  },
  render() {
    let nodes = [];
    for(let i = 0; i < 2; i ++){
      nodes.push(<IntroCard key={i} allNames={this.props.allNames} selectPerson={this.selectPerson} index={i} ref={i}/>);
    }

    return (
      <div className="intro-panel">
        {nodes}
      </div>
    )
  }
});

var IntroCard = React.createClass({
  getInitialState() {
    return {personFile: null}
  },
  selectPerson(item) {
    this.props.selectPerson(item, this.props.index)
  },
  setPersonFile(personFile) {
    this.setState({personFile});
  },
  componentWillReceiveProps(nextProps){
    let state = this.state;
    state.personFile = nextProps.personFile
    this.setState(state);
  },
  render() {
    return (
      <div className="intro-card card">
        <div className="intro-avatar"></div>
        <div className="intro-text">
          <SwitchName allNames={this.props.allNames} selectPerson={this.selectPerson}/>
          <p>birth: {this.state.personFile && this.state.personFile.birthYear}</p>
        </div>
      </div>
    )
  }
});

var SwitchName = React.createClass({
  getInitialState() {
    return {
      name: 'Select a person'
    }
  },
  changeScreen(item) {
    this.setState({
      name: item.name
    });
    this.props.selectPerson(item);
    $(this.refs.switchList).fadeOut(100);
  },
  openSwithList() {
    $(this.refs.switchList).fadeIn(100);
  },
  render() {
    let allNames = this.props.allNames,
        lis = [];

    allNames.forEach(function(item, i) {
      lis.push(<li key={i} onClick={this.changeScreen.bind(this, item)}>{item.name}</li>);
    }.bind(this));

    return (
      <div className="switch-name-panel">
        <p className="switch-name-card screen" onClick={this.openSwithList}>
          {this.state.name}
        </p>
        <ul className="switch-name-list card" ref="switchList">
          {lis}
        </ul>
      </div>
    )
  }
});
SwitchName.defaultProps = {};

export default IntroPanel;
