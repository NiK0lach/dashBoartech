'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend );
const data = {
    labels: ['Patinetas', 'Scooters', 'E-Bici', 'E-Moto', 'Accesorios', 'Repuestos'],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 20, 10, 5, 2, 13],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function BestSellingProductsChart() {
  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Best Selling Chart</h2>
      {/* Chart */}
      <Pie data={data} />
    </div>
  );
}
