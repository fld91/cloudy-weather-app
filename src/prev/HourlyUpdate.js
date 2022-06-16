import React from 'react'
 import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from "chart.js";
// import faker from 'faker';
 import { Line } from 'react-chartjs-2';
 import Chart from 'chart.js/auto'



//  const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' ,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const style={container:{backgroundColor:"rgb(100,200,250)"}}
function HourlyUpdate(props) {
  console.log(props.hData)
   const hArr=props.hData.map((e)=>{
     let d=new Date(e.dt*1000)
    return d.getHours().toString()
    })
    const hTemp=props.hData.map((e)=>e.temp)
    console.log("arr",hArr)
  const state = {
    labels: hArr,
    datasets: [
      {
        label: 'Hourly Data',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: hTemp,
      }
    ]
  }
  return (
    <div className='container' style={style.container}>
      <h2>Hourly Update</h2>
      
           { <Line options={{
            title:{
              display:true,
              text:'Hourly temp',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }} data={state}/> }
    </div>
  )
}

export default HourlyUpdate


