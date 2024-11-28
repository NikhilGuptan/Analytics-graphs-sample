import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { Pie, Line, Bar, Doughnut } from "react-chartjs-2";
import "./ChartJSPage.css";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const ChartJSPage = () => {
  // Sample data for charts
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chartjs-page">
      <h1 className="title">Chart.js Page</h1>
      <p className="description">Here you can display charts using the Chart.js library.</p>
      
      <div className="chart-container">
        <div className="chart">
          <h3>Pie Chart</h3>
          <Pie data={data} options={options} />
        </div>

        <div className="chart">
          <h3>Line Chart</h3>
          <Line data={data} options={options} />
        </div>

        <div className="chart">
          <h3>Bar Chart</h3>
          <Bar data={data} options={options} />
        </div>

        <div className="chart">
          <h3>Doughnut Chart</h3>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartJSPage;
