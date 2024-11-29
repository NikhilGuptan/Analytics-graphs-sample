import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import RechartsPage from "./components/chartsSample/RechartsPage";
import ChartJSPage from "./components/chartsSample/ChartJSPage";
import D3Page from "./components/chartsSample/D3Page";
import VictoryPage from "./components/chartsSample/VictoryPage";
import ReactVisPage from "./components/chartsSample/ReactVisPage";
import EChartsPage from "./components/chartsSample/EChartsPage";
import HighchartsDrilldown from "./components/chartsSample/HighchartsPage";

const App = () => {
  const [selectedButton, setSelectedButton] = useState("");
  console.log("selectedButton---------->",selectedButton)

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#f4f4f4" }}>
          <Link
            to="/recharts"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("Recharts")}
              style={{
                backgroundColor: selectedButton === "Recharts" ? "green" : "transparent",
                color: selectedButton === "Recharts" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              Recharts
            </button>
          </Link>

          <Link
            to="/chartjs"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("ChartJS")}
              style={{
                backgroundColor: selectedButton === "ChartJS" ? "green" : "transparent",
                color: selectedButton === "ChartJS" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              Chart.js
            </button>
          </Link>

          <Link
            to="/d3"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("D3")}
              style={{
                backgroundColor: selectedButton === "D3" ? "green" : "transparent",
                color: selectedButton === "D3" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              D3.js
            </button>
          </Link>

          <Link
            to="/react-vis"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("ReactVis")}
              style={{
                backgroundColor: selectedButton === "ReactVis" ? "green" : "transparent",
                color: selectedButton === "ReactVis" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              React Vis Charts
            </button>
          </Link>

          <Link
            to="/echarts"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("ECharts")}
              style={{
                backgroundColor: selectedButton === "ECharts" ? "green" : "transparent",
                color: selectedButton === "ECharts" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              ECharts
            </button>
          </Link>

          <Link
            to="/victory"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("Victory")}
              style={{
                backgroundColor: selectedButton === "Victory" ? "green" : "transparent",
                color: selectedButton === "Victory" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              Victory
            </button>
          </Link>

          <Link
            to="/highcharts"
            style={{
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <button
              onClick={() => handleClick("highcharts")}
              style={{
                backgroundColor: selectedButton === "highcharts" ? "green" : "transparent",
                color: selectedButton === "highcharts" ? "white" : "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "2px solid green",
                cursor: "pointer",
              }}
            >
              Highcharts with DrillDwon
            </button>
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/recharts" element={<RechartsPage />} />
          <Route path="/chartjs" element={<ChartJSPage />} />
          <Route path="/d3" element={<D3Page />} />
          <Route path="/highcharts" element={<HighchartsDrilldown />} />
          <Route path="/victory" element={<VictoryPage />} />
          <Route path="/echarts" element={<EChartsPage />} />
          <Route path="/react-vis" element={<ReactVisPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
