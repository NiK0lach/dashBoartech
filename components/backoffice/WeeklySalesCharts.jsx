'use client';
import { useState } from 'react';
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export default function WeeklySalesCharts() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
      const data = {
        labels,
        datasets: [
          {
            label: 'Ventas',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        /*   {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }, */
        ],
      };



  const tabs=[
    {
        title:'Ventas',
        type:'ventas',
        data:{
        labels,
        datasets: [
          {
            label: 'Ventas',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
       
        ],
       }
    },
    {
        title:'Ordenes',
        type:'ordenes',
        data:{
            labels,
            datasets: [
              {
                label: 'Ordenes',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(0, 137, 132)',
                backgroundColor: 'rgba(0, 137, 132,0.5)',
              },
           
            ],
           }
    }
  ];
  const [chartToDisplayed,setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Weekly Charts</h2>
      <div className="p-0">
        {/* Tabs */}

            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    {tabs.map((tab, i) =>{
                        return(
                            <li className='me-2' key={i} >
                                <button
                                 onClick={() => setChartToDisplay(tab.type)} 
                                 className={
                                    chartToDisplayed == tab.type ? "inline-block p-4  text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                                     : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>
                                    {tab.title}
                                </button>
                            </li>
                        );
                     })}
                </ul>
            </div>

        {/* content to display */}
        {tabs.map((tab,i) => {
                if (chartToDisplayed === tab.type) {
                    return <Line options={options} data={tab.data}/>;
                    
                }
                return null;
            })
        }
      </div>
    
    </div>
  );
}
