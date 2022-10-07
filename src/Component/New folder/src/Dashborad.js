import React from 'react'

import ReactApexChart from 'react-apexcharts'

class Graph extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        
        {
          name: 'Child Attendence',
          type: 'column',
          data: [ 0, 4.1, 4.9, 6.5, 8.5],
        },
        {
          name: 'Staff Count',
          type: 'line',
          data: [ 0, 43, 54, 65, 76],
        },
      ],
      options: {
        
        stroke: {
          width: [2, 1, 9],
        },
        title: {
          text: '< Apr 4 - Apr 10 >',
          align: 'left',
          offsetX: 90,
        },
        xaxis: {
          categories: ["Mon (Mar 28)", "Tue (Mar 28)", "Wed (Mar 28)", "Thu (Mar 28)", "Fri (Mar 28)"],
        },
        yaxis: [
          {
          },
          {
            opposite: false,
           
          },
        ],
        legend: {
          horizontalAlign: 'left',
          offsetX: 20,
        },
      },
    }
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='line'
          height={500}
        />
      </div>
    )
  }
}

export default Graph
