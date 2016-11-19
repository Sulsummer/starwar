require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


import IntroPanel from './IntroPanel.js';
import InfoPanel  from './InfoPanel.js';


var AppComponent = React.createClass({
  componentWillMount() {
    this.broadPersonList();
  },
  getInitialState() {
    return {};
  },
  broadPersonList() {
    let personNameList = [{
          'name': 'Luke Skywalker',
          'id': 'cGVvcGxlOjE='
        },
        {
          'name': 'C-3PO',
          'id': 'cGVvcGxlOjI='
        },
        {
          'name': 'R2-D2',
          'id': 'cGVvcGxlOjM='
        },
        {
          'name': 'Darth Vader',
          'id': 'cGVvcGxlOjQ='
        }];
    this.setState({personNameList});
  },
  $$broadPersonFileToIntro(personFileAndIndex) {
    this.setState({personFileAndIndex});
  },
  $$broadPersonFileToInfro(personFileAndIndex) {

  },
  $$returnStaticPersonFileData() {
    return [{
          "name": "Luke Skywalker",
          "birthYear": "19BBY",
          "eyeColor": "blue",
          "gender": "male",
          "hairColor": "blond",
          "height": 172,
          "mass": 77,
          "skinColor": "fair",
          "created": "2014-12-09T13:50:51.644Z",
          "edited": "2014-12-20T21:17:56.891Z",
          "id": "cGVvcGxlOjE="
        },
        {
          "name": "C-3PO",
          "birthYear": "112BBY",
          "eyeColor": "yellow",
          "gender": "n/a",
          "hairColor": "n/a",
          "height": 167,
          "mass": 75,
          "skinColor": "gold",
          "created": "2014-12-10T15:10:51.357Z",
          "edited": "2014-12-20T21:17:50.309Z",
          "id": "cGVvcGxlOjI="
        },
        {
          "name": "R2-D2",
          "birthYear": "33BBY",
          "eyeColor": "red",
          "gender": "n/a",
          "hairColor": "n/a",
          "height": 96,
          "mass": 32,
          "skinColor": "white, blue",
          "created": "2014-12-10T15:11:50.376Z",
          "edited": "2014-12-20T21:17:50.311Z",
          "id": "cGVvcGxlOjM="
        },
        {
          "name": "Darth Vader",
          "birthYear": "41.9BBY",
          "eyeColor": "yellow",
          "gender": "male",
          "hairColor": "none",
          "height": 202,
          "mass": 136,
          "skinColor": "white",
          "created": "2014-12-10T15:18:20.704Z",
          "edited": "2014-12-20T21:17:50.313Z",
          "id": "cGVvcGxlOjQ="
        }];
  },
  emitPI(personAndIndex){
    let PFList = this.$$returnStaticPersonFileData(),
        pf     = null;
    PFList.forEach(function(personFile, i) {
      if (personFile.id === personAndIndex.id) {
        pf = personFile;
        return;
      }
    });

    let personFileAndIndex = {
      personFile: pf,
      index: personAndIndex.index
    };

    this.$$broadPersonFileToIntro(personFileAndIndex);
    // this.$$broadPersonFileToInfo(personFileAndIndex);
  },



  render() {
    return (
      <div className="container">
        <nav><h5>Star Wars</h5></nav>
        <div className="row">
          <IntroPanel personNameList={this.state.personNameList} emitPI={this.emitPI}
                      personFileAndIndex={this.state.personFileAndIndex}/>
          <InfoPanel/>
        </div>
      </div>
    );
  }
})

AppComponent.defaultProps = {
};

export default AppComponent;
