import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


function ChanceOfRain() {
    const yLabels = {
        1: "Heavy Rain",
        2: "Rain",
        3: "Sunny"
    }
    const x = [2, 3, 4, 5]
    const y = [1, 2, 3, 1]
    const state = {
        labels: x,
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
            }
        ],
        options: {
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
                    ticks: {
                        beginAtZero: true,
                        callback: (val, index, values) => {
                            return yLabels[val]
                        }
                    }
                }
                ,
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    }
    return (
        <div>
            <Bar
                data={state} options=
                {state.options} />
        </div>
    )
}

export default ChanceOfRain