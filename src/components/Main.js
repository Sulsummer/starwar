require('normalize.css/normalize.css');
require('styles/App.scss');

import React, {Component} from 'react';


import IntroPanel from './IntroPanel.js';
import InfoPanel  from './InfoPanel.js';


class AppComponent extends Component {
  render() {
    return (
      <div className="container">
        <nav><h5>Star Wars</h5></nav>
        <div className="row">
          <IntroPanel />
          <InfoPanel />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
