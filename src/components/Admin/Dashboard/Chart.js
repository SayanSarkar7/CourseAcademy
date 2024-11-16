import React from 'react';
import {
  Chart as ChartJs,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  plugins,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { background, position } from '@chakra-ui/react';

ChartJs.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Title,
  Tooltip
);

export const LineChart = () => {
  const labels = getLastYearMonths();
  const options = {
    response: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [1, 2, 3, 4],
        borderColor:'rgba(107,70,193,0.5)',
        backgroundColor:'#6b46c1',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChart=()=>{
    const data = {
        labels:['Subscribed','Not Subscribed'],
        datasets: [
          {
            label: 'Views',
            data: [3, 20],
            borderColor:['rgb(62,12,171)','rgb(214,43,129)'],
            backgroundColor:['rgba(62,12,171,0.3)','rgba(214,43,129,0.3)'],
          },
        ],
      };
      return <Doughnut data={data} />
}

function getLastYearMonths(){
    
    const months=[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const currentMonth=new Date().getMonth();
    // console.log(currentMonth);
    // const remain=11-currentMonth;

    // for(let i=currentMonth;i<months.length;i++){
    //     let element=months[i];
    //     months.splice(i,1);
    //     months.unshift(element);
    // }
    // console.log(months);
    const labels = months.slice(currentMonth).concat(months.slice(0, currentMonth));
    // console.log(months);
    // console.log(labels);
    
    return labels;
    


}
getLastYearMonths();


