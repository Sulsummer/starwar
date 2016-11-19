import React from 'react';
import $ from 'jQuery';

var IntroPanel = React.createClass({

  render() {
    let nodes = [];
    for(let i = 0; i < 2; i ++){
      nodes.push(<IntroCard key={i} personNameList={this.props.personNameList}
                            index={i} emitPI={this.props.emitPI}
                            personFileAndIndex={this.props.personFileAndIndex} />);
    }

    return (
      <div className="intro-panel">
        {nodes}
      </div>
    )
  }
});

var IntroCard = React.createClass({
  componentWillReceiveProps(nextProps) {
    let pFI = nextProps.personFileAndIndex;
    if (pFI && pFI.index === this.props.index) {
      this.setState({personFile: pFI.personFile});
    }
  },
  emitPI(personId) {
    let personAndIndex = {id: personId, index: this.props.index};
    this.props.emitPI(personAndIndex);
  },
  render() {
    return (
      <div className="intro-card card">
        <div className="intro-avatar"></div>
        <div className="intro-text">
          <SwitchName personNameList={this.props.personNameList} emitPI={this.emitPI}/>
          <p>birth: {this.state && this.state.personFile && this.state.personFile.birthYear}</p>
        </div>
      </div>
    )
  }
});

var SwitchName = React.createClass({
  getInitialState() {
    return {screen: 'Select a person'}
  },
  handleLiClick(personName) {
    this.setState({screen: personName.name});
    this.props.emitPI(personName.id);
  },
  /*
   * 这个地方不够react，但是暂时没有深入考虑如何写更react
   * 习惯于jquery的dom操作，感觉这样写起来更快
   */
  handleScreenClick() {
    $(document.body).off('click.ul.personNameList');
    let $ul = $(this.refs.ul)
    $ul.show(100);
    $(document.body).on('click.ul.personNameList', function() {
      $ul.hide(100);
    });
  },
  $$setNameList() {
    let personNameList = this.props.personNameList,
        lis            = [];
    personNameList.forEach(function(personName, i) {
      lis.push(<li key={i} onClick={this.handleLiClick.bind(this, personName)}>{personName.name}</li>);
    }.bind(this));
    return lis;
  },
  render() {
    let lis = this.$$setNameList();
    return (
      <div className="switch-name-panel">
        <p className="switch-name-card screen" onClick={this.handleScreenClick}>
          {this.state.screen}
        </p>
        <ul className="switch-name-list card" ref="ul">
          {lis}
        </ul>
      </div>
    )
  }
});
SwitchName.defaultProps = {};

export default IntroPanel;
