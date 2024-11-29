import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Drilldown from 'highcharts/modules/drilldown';

// Initialize the drilldown module
// Drilldown(Highcharts);

const drilldownData = {
  drilldown: {
    series: [
      // 2021 Drilldowns
      {
        id: '2021',
        name: 'Months in 2021',
        data: [
          { name: 'January', y: 50, drilldown: '2021-Jan' },
          { name: 'February', y: 40, drilldown: '2021-Feb' },
          { name: 'March', y: 60, drilldown: '2021-Mar' },
        ],
      },
      {
        id: '2021-Jan',
        name: 'Weeks in January 2021',
        data: [
          { name: 'Week 1', y: 10, drilldown: '2021-Jan-W1' },
          { name: 'Week 2', y: 15, drilldown: '2021-Jan-W2' },
          { name: 'Week 3', y: 25, drilldown: '2021-Jan-W3' },
        ],
      },
      {
        id: '2021-Feb',
        name: 'Weeks in February 2021',
        data: [
          { name: 'Week 1', y: 20 },
          { name: 'Week 2', y: 10 },
          { name: 'Week 3', y: 10 },
        ],
      },
      {
        id: '2021-Mar',
        name: 'Weeks in March 2021',
        data: [
          { name: 'Week 1', y: 30 },
          { name: 'Week 2', y: 20 },
          { name: 'Week 3', y: 10 },
        ],
      },

      // 2022 Drilldowns
      {
        id: '2022',
        name: 'Months in 2022',
        data: [
          { name: 'January', y: 70, drilldown: '2022-Jan' },
          { name: 'February', y: 60, drilldown: '2022-Feb' },
          { name: 'March', y: 50, drilldown: '2022-Mar' },
        ],
      },
      {
        id: '2022-Jan',
        name: 'Weeks in January 2022',
        data: [
          { name: 'Week 1', y: 25 },
          { name: 'Week 2', y: 20 },
          { name: 'Week 3', y: 25 },
        ],
      },
      {
        id: '2022-Feb',
        name: 'Weeks in February 2022',
        data: [
          { name: 'Week 1', y: 20 },
          { name: 'Week 2', y: 20 },
          { name: 'Week 3', y: 20 },
        ],
      },
      {
        id: '2022-Mar',
        name: 'Weeks in March 2022',
        data: [
          { name: 'Week 1', y: 15 },
          { name: 'Week 2', y: 10 },
          { name: 'Week 3', y: 25 },
        ],
      },

      // 2023 Drilldowns
      {
        id: '2023',
        name: 'Months in 2023',
        data: [
          { name: 'January', y: 80, drilldown: '2023-Jan' },
          { name: 'February', y: 90, drilldown: '2023-Feb' },
          { name: 'March', y: 100, drilldown: '2023-Mar' },
        ],
      },
      {
        id: '2023-Jan',
        name: 'Weeks in January 2023',
        data: [
          { name: 'Week 1', y: 30 },
          { name: 'Week 2', y: 40 },
          { name: 'Week 3', y: 50 },
        ],
      },
      {
        id: '2023-Feb',
        name: 'Weeks in February 2023',
        data: [
          { name: 'Week 1', y: 35 },
          { name: 'Week 2', y: 30 },
          { name: 'Week 3', y: 25 },
        ],
      },
      {
        id: '2023-Mar',
        name: 'Weeks in March 2023',
        data: [
          { name: 'Week 1', y: 50 },
          { name: 'Week 2', y: 40 },
          { name: 'Week 3', y: 60 },
        ],
      },
    ],
  },
};

const createChartOptions = (type) => ({
  chart: {
    type: type, // Dynamic chart type
  },
  title: {
    text: `Highcharts Drilldown - ${type.charAt(0).toUpperCase() + type.slice(1)} Chart`,
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    title: {
      text: 'Values',
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y}',
      },
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
  },
  series: [
    {
      name: 'Years',
      colorByPoint: true,
      data: [
        {
          name: '2021',
          y: 500,
          drilldown: '2021',
        },
        {
          name: '2022',
          y: 600,
          drilldown: '2022',
        },
        {
          name: '2023',
          y: 700,
          drilldown: '2023',
        },
      ],
    },
  ],
  ...drilldownData,
});

const HighchartsDrilldown = () => {
  const chartTypes = ['column', 'pie', 'line', 'area']; // Define the chart types

  return (
    <div>
      <h2>Highcharts Drilldown Example with Multiple Chart Types</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {chartTypes.map((type, index) => (
          <div key={index} style={{ width: '45%', marginBottom: '20px' }}>
            <HighchartsReact highcharts={Highcharts} options={createChartOptions(type)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighchartsDrilldown;
