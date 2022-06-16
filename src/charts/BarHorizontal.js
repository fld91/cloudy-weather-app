import React from 'react'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from "chart.js";
import { Bar } from 'react-chartjs-2';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function BarHorizontal() {
  const y=[1,2,3]
  const state={
    datasets: [
    {
        label: 'Hourly Data',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 8,
        data: y,
    }]}
    const options= {
      plugins: {
          legend: {
              display: false
          }
      },
      scales: {
          y: {
              grid: {
                  display: false
              },
             
          }
          ,
          x: {
              grid: {
                  display: false
              }
          }
      }
  }
    
  return (
    <div>
      <Bar data={state}
      options={options}></Bar>
    </div>
  )
}

export default BarHorizontal