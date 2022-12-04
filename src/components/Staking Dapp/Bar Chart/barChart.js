import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const BarChart = ( { chartData } ) => {
  
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false
          }
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
        }
      }
    },
    
  }
  
  return (
    <>
        <Bar data={ chartData } options={options} />
    </>
  )
}
