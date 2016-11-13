require('normalize.css/normalize.css');
require('styles/App.scss');

import React, {Component} from 'react';


import IntroPanel from './IntroPanel.js';
import InfoPanel  from './InfoPanel.js';


var AppComponent = React.createClass({
  getInitialState() {
    return {
      allNames: [{
          "id": "cGVvcGxlOjE=",
          "name": "Luke Skywalker"
        },{
          "id": "cGVvcGxlOjI=",
          "name": "C-3PO"
        }],
      allPeople: [{
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
        }]
    };
  },
  /*
   * 模拟获取对应id的person
   * @param item { id, name}
   * @param index ref to which intro card
   */
  selectPerson(item, index) {
    this.state.allPeople.forEach(function(person, i) {
      if (item.id === person.id) {
        let persons = this.state.persons || [];
        if (!persons[index]){
          persons.push(person);
        }
        else if (persons[index].id !== person.id) {
          persons[index] = person;
        }

        this.broadcastToIntroPanel(person, index);

        this.setState({persons});
      }
    }.bind(this));

  },
  broadcastToIntroPanel(person, index) {
    let introPanel = this.state.introPanel || {};
    introPanel[index] = person;
    this.setState({introPanel});
  },




  render() {
    return (
      <div className="container">
        <nav><h5>Star Wars</h5></nav>
        <div className="row">
          <IntroPanel allNames={this.state.allNames} selectPerson={this.selectPerson}
          updateData={this.state.introPanel}/>
          <InfoPanel persons={this.state.persons}/>
        </div>
      </div>
    );
  }
})

AppComponent.defaultProps = {
};

export default AppComponent;
