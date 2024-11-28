import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryPie, VictoryTheme, VictoryContainer } from "victory";
import "./VictoryPage.css";

const VictoryPage = () => {
  // Data for charts
  const data = [
    { x: "A", y: 30 },
    { x: "B", y: 80 },
    { x: "C", y: 45 },
    { x: "D", y: 60 },
    { x: "E", y: 20 },
    { x: "F", y: 90 },
    { x: "G", y: 50 },
  ];

  const pieData = [
    { x: "A", y: 30 },
    { x: "B", y: 80 },
    { x: "C", y: 45 },
    { x: "D", y: 60 },
    { x: "E", y: 20 },
    { x: "F", y: 90 },
    { x: "G", y: 50 },
  ];

  // Bar Chart
  const barChart = (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryBar data={data} />
    </VictoryChart>
  );

  // Line Chart
  const lineChart = (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryLine data={data} />
    </VictoryChart>
  );

  // Pie Chart
  const pieChart = (
    <VictoryPie data={pieData} colorScale="qualitative" animate />
  );

  // Donut Chart
  const donutChart = (
    <VictoryPie
      data={pieData}
      colorScale="qualitative"
      innerRadius={100}
      animate
    />
  );

  return (
    <div className="victory-page">
      <h1 className="title">Victory.js</h1>
      <p className="description">Here you can display charts using the Victory library.</p>

      <div className="chart-container">
        {/* Bar Chart */}
        <div className="chart">
          <h3>Bar Chart</h3>
          {barChart}
        </div>

        {/* Line Chart */}
        <div className="chart">
          <h3>Line Chart</h3>
          {lineChart}
        </div>

        {/* Pie Chart */}
        <div className="chart">
          <h3>Pie Chart</h3>
          {pieChart}
        </div>

        {/* Donut Chart */}
        <div className="chart">
          <h3>Donut Chart</h3>
          {donutChart}
        </div>
      </div>
    </div>
  );
};

export default VictoryPage;
