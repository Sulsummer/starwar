import React, {Component} from 'react';
import $ from 'jQuery';
import Highcharts from 'highcharts';

class InfoPanel extends Component {
  render() {
    return(
      <div className="info-panel">
        <StatisticPanel />
        <TabPanel />
      </div>
    )
  }
}

class StatisticPanel extends Component {
  hide(which) {
    let ref = 'statisticCard' + which;
    $(this.refs[ref]).fadeOut(200);
  }
  render() {
    return(
      <div className="statistic-panel">
        <div className="statistic-card card" ref="statisticCard1">
          <div className="statistic-card-hide-btn" onClick={this.hide.bind(this, 1)}></div>
          <p>1</p>
        </div>
        <div className="statistic-card card" ref="statisticCard2">
          <div className="statistic-card-hide-btn" onClick={this.hide.bind(this, 2)}></div>
          <p>2</p>
        </div>
      </div>
    )
  }
}

class TabPanel extends Component {
  render() {
    return (
      <div className="tab-panel card">
        <TabList count="5"/>
        <TabDashboard />
      </div>
    )
  }
}

var TabList = React.createClass({
  componentWillMount() {
    this.setState({
      a: 1,
      b: 2
    })
  },
  render() {
    let lis = [];
    Object.keys(this.state).forEach(function(item, i) {
      lis.push(<li key={i}>{item}</li>);
    });
    return (
      <ul className="tab-panel-list">
        {lis}
      </ul>
    )
  }
})

class TabDashboard extends Component {
  componentDidMount() {
    Highcharts.chart(this.refs.dashboard, {
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });

    $('.highcharts-credits').remove();
  }

  render() {
    return (
      <div className="tab-panel-dashboard">
        <div ref="dashboard"></div>
      </div>
    )
  }
}

export default InfoPanel;