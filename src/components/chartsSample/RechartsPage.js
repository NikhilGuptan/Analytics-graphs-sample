import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import "./RechartsPage.css";

const RechartsPage = () => {
  const data = [
    { name: "Apples", value: 30 },
    { name: "Oranges", value: 20 },
    { name: "Bananas", value: 40 },
    { name: "Grapes", value: 10 },
  ];

  const lineData = [
    { name: "Jan", apples: 30, bananas: 20 },
    { name: "Feb", apples: 40, bananas: 25 },
    { name: "Mar", apples: 35, bananas: 30 },
    { name: "Apr", apples: 50, bananas: 40 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

  return (
    <div className="recharts-page">
      <h1 className="title">Recharts Page</h1>
      <p className="description">Here you can display charts using the Recharts library.</p>

      <div className="chart-container">
        {/* Pie Chart */}
        <div className="chart">
          <h3>Pie Chart</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Line Chart */}
        <div className="chart">
          <h3>Line Chart</h3>
          <LineChart
            width={400}
            height={300}
            data={lineData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="apples" stroke="#8884d8" />
            <Line type="monotone" dataKey="bananas" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="chart">
          <h3>Bar Chart</h3>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Area Chart */}
        <div className="chart">
          <h3>Area Chart</h3>
          <AreaChart
            width={400}
            height={300}
            data={lineData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorApples" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBananas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="apples"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorApples)"
            />
            <Area
              type="monotone"
              dataKey="bananas"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorBananas)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default RechartsPage;
