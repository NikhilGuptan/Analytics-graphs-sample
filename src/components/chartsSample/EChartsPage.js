import React from "react";
import ReactECharts from "echarts-for-react";
import "./EChartsPage.css";

const EChartsPage = () => {
  // Bar Chart Data
  const barChartOption = {
    title: {
      text: "Bar Chart",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: ["A", "B", "C", "D", "E", "F", "G"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [30, 80, 45, 60, 20, 90, 50],
        type: "bar",
      },
    ],
  };

  // Line Chart Data
  const lineChartOption = {
    title: {
      text: "Line Chart",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: ["A", "B", "C", "D", "E", "F", "G"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [30, 80, 45, 60, 20, 90, 50],
        type: "line",
        smooth: true,
      },
    ],
  };

  // Pie Chart Data
  const pieChartOption = {
    title: {
      text: "Pie Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Category",
        type: "pie",
        radius: "50%",
        data: [
          { value: 30, name: "A" },
          { value: 80, name: "B" },
          { value: 45, name: "C" },
          { value: 60, name: "D" },
          { value: 20, name: "E" },
          { value: 90, name: "F" },
          { value: 50, name: "G" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  // Donut Chart Data (Pie chart with hole in the center)
  const donutChartOption = {
    title: {
      text: "Donut Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Category",
        type: "pie",
        radius: ["40%", "70%"], // Adjust the inner and outer radius to create the donut effect
        data: [
          { value: 40, name: "A" },
          { value: 60, name: "B" },
          { value: 50, name: "C" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="echarts-page">
      <h1 className="title">ECharts</h1>
      <p className="description">Here you can display charts using the ECharts library.</p>

      <div className="chart-container">
        {/* Bar Chart */}
        <div className="chart">
          <h3>Bar Chart</h3>
          <ReactECharts option={barChartOption} />
        </div>

        {/* Line Chart */}
        <div className="chart">
          <h3>Line Chart</h3>
          <ReactECharts option={lineChartOption} />
        </div>

        {/* Pie Chart */}
        <div className="chart">
          <h3>Pie Chart</h3>
          <ReactECharts option={pieChartOption} />
        </div>

        {/* Donut Chart */}
        <div className="chart">
          <h3>Donut Chart</h3>
          <ReactECharts option={donutChartOption} />
        </div>
      </div>
    </div>
  );
};

export default EChartsPage;
