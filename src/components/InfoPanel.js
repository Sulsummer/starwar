import React, {Component} from 'react';
import $ from 'jQuery';
import Highcharts from 'highcharts';

class InfoPanel extends Component {
  render() {
    return(
      <div className="info-panel">
        <StatisticPanel />
        <TabPanel persons={this.props.persons}/>
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
    let persons = this.props.persons,
        flag    = false;
    if (!persons || persons.length !== 2) {
      // debugger
      return (
        <div className="tab-panel card">
          404
        </div>
      );
    }

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
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
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