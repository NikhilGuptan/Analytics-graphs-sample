import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./D3Page.css";

const D3Page = () => {
  const barChartRef = useRef();
  const pieChartRef = useRef();
  const lineChartRef = useRef();
  const doughnutChartRef = useRef();

  useEffect(() => {
    const data = [30, 80, 45, 60, 20, 90, 50];
    const labels = ["A", "B", "C", "D", "E", "F", "G"];

    const clearSVG = (ref) => {
      d3.select(ref.current).select("svg").remove();
    };

    // Bar Chart
    clearSVG(barChartRef);
    const barWidth = 300;
    const barHeight = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const barSvg = d3
      .select(barChartRef.current)
      .append("svg")
      .attr("width", barWidth)
      .attr("height", barHeight);

    const x = d3
      .scaleBand()
      .domain(labels)
      .range([margin.left, barWidth - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([barHeight - margin.bottom, margin.top]);

    barSvg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(labels[i]))
      .attr("y", (d) => y(d))
      .attr("height", (d) => y(0) - y(d))
      .attr("width", x.bandwidth())
      .attr("fill", "steelblue");

    barSvg
      .append("g")
      .attr("transform", `translate(0,${barHeight - margin.bottom})`)
      .call(d3.axisBottom(x));

    barSvg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Pie Chart
    clearSVG(pieChartRef);
    const pieWidth = 300;
    const pieHeight = 300;
    const radius = Math.min(pieWidth, pieHeight) / 2;

    const pieSvg = d3
      .select(pieChartRef.current)
      .append("svg")
      .attr("width", pieWidth)
      .attr("height", pieHeight)
      .append("g")
      .attr("transform", `translate(${pieWidth / 2},${pieHeight / 2})`);

    const pie = d3.pie()(data);
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    pieSvg
      .selectAll("path")
      .data(pie)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);

    // Line Chart
    clearSVG(lineChartRef);
    const lineWidth = 300;
    const lineHeight = 300;

    const lineSvg = d3
      .select(lineChartRef.current)
      .append("svg")
      .attr("width", lineWidth)
      .attr("height", lineHeight);

    const xLine = d3
      .scalePoint()
      .domain(labels)
      .range([margin.left, lineWidth - margin.right]);

    const yLine = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([lineHeight - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d, i) => xLine(labels[i]))
      .y((d) => yLine(d));

    lineSvg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    lineSvg
      .append("g")
      .attr("transform", `translate(0,${lineHeight - margin.bottom})`)
      .call(d3.axisBottom(xLine));

    lineSvg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yLine));

    // Doughnut Chart
    clearSVG(doughnutChartRef);

    const doughnutSvg = d3
      .select(doughnutChartRef.current)
      .append("svg")
      .attr("width", pieWidth)
      .attr("height", pieHeight)
      .append("g")
      .attr("transform", `translate(${pieWidth / 2},${pieHeight / 2})`);

    const doughnutArc = d3
      .arc()
      .innerRadius(radius / 2)
      .outerRadius(radius);

    doughnutSvg
      .selectAll("path")
      .data(pie)
      .join("path")
      .attr("d", doughnutArc)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);
  }, []);

  return (
    <div className="d3-page">
      <h1 className="title">D3.js Page</h1>
      <p className="description">Here you can display charts using the D3.js library.</p>

      <div className="chart-container">
        <div className="chart" ref={barChartRef}>
          <h3>Bar Chart</h3>
        </div>
        <div className="chart" ref={pieChartRef}>
          <h3>Pie Chart</h3>
        </div>
        <div className="chart" ref={lineChartRef}>
          <h3>Line Chart</h3>
        </div>
        <div className="chart" ref={doughnutChartRef}>
          <h3>Doughnut Chart</h3>
        </div>
      </div>
    </div>
  );
};

export default D3Page;
