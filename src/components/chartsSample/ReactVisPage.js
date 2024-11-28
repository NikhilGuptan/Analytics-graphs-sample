import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  LineMarkSeries,
  RadialChart
} from "react-vis";
import "react-vis/dist/style.css";
import "./ReactVisPage.css";

const ReactVisPage = () => {
  const data = [
    { x: 0, y: 30 },
    { x: 1, y: 80 },
    { x: 2, y: 45 },
    { x: 3, y: 60 },
    { x: 4, y: 20 },
    { x: 5, y: 90 },
    { x: 6, y: 50 }
  ];

  const pieData = [
    { angle: 30, label: "A" },
    { angle: 80, label: "B" },
    { angle: 45, label: "C" },
    { angle: 60, label: "D" },
    { angle: 20, label: "E" },
    { angle: 90, label: "F" },
    { angle: 50, label: "G" }
  ];

  const donutData = [
    { angle: 40, label: "A" },
    { angle: 60, label: "B" },
    { angle: 50, label: "C" }
  ];

  return (
    <div className="react-vis-page">
      <h1 className="title">React Vis Charts</h1>
      <p className="description">Here you can display charts using the React Vis library.</p>

      <div className="chart-container">
        {/* Bar Chart */}
        <div className="chart">
          <h3>Bar Chart</h3>
          <XYPlot width={300} height={300} xType="ordinal">
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={data} />
          </XYPlot>
        </div>

        {/* Line Chart */}
        <div className="chart">
          <h3>Line Chart</h3>
          <XYPlot width={300} height={300}>
            <XAxis />
            <YAxis />
            <LineMarkSeries data={data} />
          </XYPlot>
        </div>

        {/* Pie Chart */}
        <div className="chart">
          <h3>Pie Chart</h3>
          <RadialChart
            width={300}
            height={300}
            data={pieData}
            colorType="category"
            showLabels
          />
        </div>

        {/* Donut Chart (Using RadialChart with innerRadius) */}
        <div className="chart">
          <h3>Donut Chart</h3>
          <RadialChart
            width={300}
            height={300}
            data={donutData}
            colorType="category"
            showLabels
            innerRadius={70} // Set inner radius for donut effect
          />
        </div>
      </div>
    </div>
  );
};

export default ReactVisPage;
