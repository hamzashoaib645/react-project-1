import React from 'react'

import ReactApexChart from 'react-apexcharts'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: 'Child Attendence',
          type: 'column',
          data: [0, 33, 44, 55, 66],
        },
        {
          name: 'Staff Count',
          type: 'line',
          data: [0, 29, 39, 49, 59],
        },
      ],
      options: {
        stroke: {
          width: [1, 2, 2],
        },
        title: {
          text: 'Apr 4 - Apr 10',
          align: 'left',
          offsetX: 110,
        },
        xaxis: {
          categories: ["Mon (Mar 28)", "Tue (Mar 28)", "Wed (Mar 28)", "Thu (Mar 28)", "Fri (Mar 28)"],
        },
        yaxis: [
          {},
          {},
        ],
      },
    }
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          height={500}
        />
      </div>
    )
  }
}

export default Dashboard
