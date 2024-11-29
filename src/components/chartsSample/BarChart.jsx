// import React, { useEffect, useState, useRef } from 'react';
// import * as d3 from 'd3';

// const initialData = [
//   { "Country": "USA", "Model": "Model 1", "Total": 487 },
//   { "Country": "USA", "Model": "Model 2", "Total": 185 },
//   { "Country": "USA", "Model": "Model 3", "Total": 140 },
//   { "Country": "USA", "Model": "Model 4", "Total": 108 },
//   { "Country": "USA", "Model": "Model 5", "Total": 26 },
//   { "Country": "USA", "Model": "Model 6", "Total": 106 },
//   { "Country": "USA", "Model": "Model 7", "Total": 27 },
//   { "Country": "USA", "Model": "Model 8", "Total": 44 },
//   { "Country": "USA", "Model": "Model 9", "Total": 96 },
//   { "Country": "INDIA", "Model": "Model 1", "Total": 411 },
//   { "Country": "INDIA", "Model": "Model 2", "Total": 33 },
//   { "Country": "INDIA", "Model": "Model 3", "Total": 32 },
//   { "Country": "INDIA", "Model": "Model 4", "Total": 29 },
//   { "Country": "INDIA", "Model": "Model 5", "Total": 29 },
//   { "Country": "CANADA", "Model": "Model 1", "Total": 7 },
//   { "Country": "CANADA", "Model": "Model 2", "Total": 20 },
//   { "Country": "CANADA", "Model": "Model 3", "Total": 232 },
//   { "Country": "CANADA", "Model": "Model 4", "Total": 1117 }
// ];

// const chartOptions = [{
//   captions: [{ "INDIA": "INDIA", "CANADA": "CANADA", "USA": "USA" }],
//   color: [{ "INDIA": "#FFA500", "CANADA": "#0070C0", "USA": "#ff0000" }],
//   xaxis: "Country",
//   xaxisl1: "Model",
//   yaxis: "Total"
// }];

// const BarChartComponent = () => {
//   const [data, setData] = useState(initialData); // State for chart data
//   const chartRef = useRef(null);

//   // Function to generate or update the bar chart
//   const plot = () => {
//     const margin = { top: 50, right: 10, bottom: 30, left: 50 };
//     const width = chartRef.current.offsetWidth - margin.left - margin.right;
//     const height = chartRef.current.offsetHeight - margin.top - margin.bottom;

//     const xVarName = chartOptions[0].xaxis;
//     const yVarName = chartOptions[0].yaxis;

//     const xAry = data.map(el => el[xVarName]);
//     const yAry = data.map(el => el[yVarName]);

//     const x = d3.scaleBand().domain(xAry).range([0, width]).padding(0.5);
//     const y = d3.scaleLinear().domain([0, d3.max(data, d => d[yVarName])]).range([height, 0]);

//     // Generate random colors for each bar
//     const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16); // Random hex color

//     // Select the svg element and clear any previous contents
//     const svg = d3.select(chartRef.current)
//       .select("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .select("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     // Remove existing bars before adding new ones
//     svg.selectAll(".bar").remove();

//     const bar = svg.selectAll(".bar")
//       .data(data)
//       .join("g")
//       .attr("class", "bar")
//       .attr("transform", d => `translate(${x(d[xVarName])}, 0)`);

//     bar.append("rect")
//       .attr("y", d => y(d[yVarName]))
//       .attr("width", x.bandwidth())
//       .attr("height", d => height - y(d[yVarName]))
//       .style("fill", randomColor) // Assign random color
//       .style("filter", "url(#shadow)") // Add shadow effect
//       .on("click", (event, d) => handleBarClick(d)); // Add click event

//     bar.append("text")
//       .attr("x", x.bandwidth() / 2)
//       .attr("y", d => y(d[yVarName]) - 5)
//       .attr("text-anchor", "middle")
//       .text(d => d[yVarName]);

//     const xAxis = d3.axisBottom(x);
//     const yAxis = d3.axisLeft(y).ticks(5);

//     svg.select(".x.axis").call(xAxis);
//     svg.select(".y.axis").call(yAxis);
//   };

//   // Handle bar click to simulate drill down
//   const handleBarClick = (clickedData) => {
//     console.log("Clicked on", clickedData);
//     // Simulate drill down by updating data
//     const newData = initialData.filter(d => d.Country === clickedData.Country);
//     setData(newData); // Update state with the new data
//   };

//   // Run the plot function when the data or component changes
//   useEffect(() => {
//     plot(); // Call plot function after the component is mounted or data changes
//   }, [data]); // Run whenever `data` changes

//   return (
//     <div>
//       <h3>Bar Chart with Drill Down</h3>
//       <div ref={chartRef} style={{ height: "600px", width: "600px", overflow: "hidden", position: "relative" }}>
//         <svg>
//           <defs>
//             <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//               <feDropShadow dx="5" dy="5" stdDeviation="3" />
//             </filter>
//           </defs>
//           <g className="axis x axis" transform={`translate(0,${600 - 30})`} />
//           <g className="axis y axis" transform="translate(50,0)" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default BarChartComponent;




// src/DrillDownBarChart.js
import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DrillDownBarChart = () => {
  const [data, setData] = useState([
    { name: 'Category A', value: 30 },
    { name: 'Category B', value: 80 },
    { name: 'Category C', value: 45 },
    { name: 'Category D', value: 60 },
  ]);
  const [drillData, setDrillData] = useState(null);
  const [isDrilledDown, setIsDrilledDown] = useState(false);

  const svgRef = useRef();

  const handleBarClick = (category) => {
    if (isDrilledDown) return;

    // Drill down data based on the clicked category
    const drillDetails = {
      'Category A': [
        { subCategory: 'A1', value: 10 },
        { subCategory: 'A2', value: 20 },
      ],
      'Category B': [
        { subCategory: 'B1', value: 40 },
        { subCategory: 'B2', value: 40 },
      ],
      'Category C': [
        { subCategory: 'C1', value: 25 },
        { subCategory: 'C2', value: 20 },
      ],
      'Category D': [
        { subCategory: 'D1', value: 30 },
        { subCategory: 'D2', value: 30 },
      ],
    };

    const selectedDrillData = drillDetails[category] || [];
    if (selectedDrillData.length > 0) {
      setDrillData(selectedDrillData);
      setIsDrilledDown(true);
    }
  };

  const goBack = () => {
    setDrillData(null);
    setIsDrilledDown(false);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear any existing chart

    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const chartData = isDrilledDown ? drillData : data;

    // Ensure chartData is not null or undefined
    if (!chartData) return;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(chartData.map(d => (isDrilledDown ? d.subCategory : d.name)))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, d => d.value)])
      .nice()
      .range([height, 0]);

    g.selectAll('.bar')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(isDrilledDown ? d.subCategory : d.name))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('fill', isDrilledDown ? 'orange' : 'steelblue')
      .on('click', d => {
        if (!isDrilledDown) {
          handleBarClick(d.name);
        }
      });

    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

    if (isDrilledDown) {
      svg
        .append('text')
        .attr('x', width - 60)
        .attr('y', 20)
        .attr('fill', 'black')
        .style('cursor', 'pointer')
        .text('Go Back')
        .on('click', goBack);
    }
  }, [data, drillData, isDrilledDown]);

  return (
    <div>
      <h2>{isDrilledDown ? 'Drill-down Data' : 'Bar Chart'}</h2>
      <svg ref={svgRef} width="500" height="300"></svg>
    </div>
  );
};

export default DrillDownBarChart;
