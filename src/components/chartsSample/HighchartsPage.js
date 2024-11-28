import React from "react";
// import Highcharts from "highcharts";
import HighchartsReact,{Highcharts} from "react-highcharts";
import "./HighchartsPage.css";


const HighchartsPage = () => {
  // Bar Chart Configuration
  const barChartConfig = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Bar Chart",
    },
    xAxis: {
      categories: ["A", "B", "C", "D", "E"],
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        name: "Values",
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  // Line Chart Configuration
  const lineChartConfig = {
    chart: {
      type: "line",
    },
    title: {
      text: "Line Chart",
    },
    xAxis: {
      categories: ["A", "B", "C", "D", "E"],
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        name: "Values",
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  // Pie Chart Configuration
  const pieChartConfig = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Pie Chart",
    },
    series: [
      {
        name: "Share",
        data: [
          { name: "A", y: 10 },
          { name: "B", y: 20 },
          { name: "C", y: 30 },
          { name: "D", y: 40 },
        ],
      },
    ],
  };

  // Donut Chart Configuration
  const donutChartConfig = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Donut Chart",
    },
    plotOptions: {
      pie: {
        innerSize: "50%", // Makes it a donut chart
      },
    },
    series: [
      {
        name: "Share",
        data: [
          { name: "A", y: 10 },
          { name: "B", y: 20 },
          { name: "C", y: 30 },
          { name: "D", y: 40 },
        ],
      },
    ],
  };

  return (
    <div className="highcharts-page">
      <h1>Highcharts Page</h1>
      <p>Here you can display charts using the Highcharts library.</p>

      <div className="chart-container">
        <div className="chart">
          <h3>Bar Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={barChartConfig} />
        </div>
        <div className="chart">
          <h3>Line Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={lineChartConfig} />
        </div>
        <div className="chart">
          <h3>Pie Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={pieChartConfig} />
        </div>
        <div className="chart">
          <h3>Donut Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={donutChartConfig} />
        </div>
      </div>
    </div>
  );
};

export default HighchartsPage;
