import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from 'chart.js/auto'; // Import Chart object from chart.js library

function StockChart() {
    const [chartData, setChartData] = useState({});
    const { search } = useParams();
    const [chart, setChart] = useState(null);
  
    useEffect(() => {

        Chart.register(Chart.controllers.line, Chart.controllers.bar, Chart.controllers.scatter, Chart.controllers.bubble, Chart.controllers.pie, Chart.controllers.doughnut, Chart.controllers.radar, Chart.controllers.polarArea, Chart.controllers.horizontalBar, Chart.scale.LinearScale, Chart.scale.LogarithmicScale, Chart.scale.TimeScale, Chart.scale.RadialLinearScale);
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/searched/${search}`);
          const stockData = response.data.history;
  
          if (!stockData || !Array.isArray(stockData)) {
            console.error('Invalid stock data format');
            return;
          }
  
          const dates = stockData.map(item => item.date);
          const prices = stockData.map(item => item.close);
  
          const newChartData = {
            labels: dates,
            datasets: [
              {
                label: 'Stock Price',
                data: prices,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }
            ]
          };
  
          if (chart) {
            chart.destroy(); // Destroy previous chart
          }
  
          const newChart = new Chart(document.getElementById('stock-chart'), {
            type: 'line',
            data: newChartData,
            options: {
              scales: {
                x: {
                  type: 'time', // Use time scale for dates
                  time: {
                    unit: 'day' // Display dates by day
                  }
                }
              }
            }
          });
  
          setChart(newChart);
          setChartData(newChartData);
        } catch (error) {
          console.error('Failed to fetch stock data:', error);
        }
      };
  
      if (search) {
        fetchData();
      }
    }, [search]);
  
    return (
      <div>
        <h1>Stock Price Chart</h1>
        <canvas id="stock-chart" />
      </div>
    );
  }
  
  export default StockChart;