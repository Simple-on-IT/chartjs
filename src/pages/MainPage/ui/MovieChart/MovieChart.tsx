import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './ModernBarChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const movieData = {
  labels: [
    'Ирония судьбы', 'Карнавальная ночь', 'Ёлки', 'Ёлки 2', 'Дед Мороз. Битва Магов',
    'Три плюс два', 'Чародеи', 'С лёгким паром!', 'Новогодний экспресс', 'Зимняя вишня',
    'Подарок с характером', 'Вечера на хуторе', 'Санта-Голова', 'Шоу Оккама', 'Вся жизнь впереди',
  ],
  datasets: [
    {
      label: 'Рейтинг IMDb',
      data: [8.0, 8.3, 6.3, 6.0, 5.9, 7.5, 8.0, 7.8, 6.4, 7.7, 7.2, 8.2, 6.3, 6.0, 7.5],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', 
        '#9966FF', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', 
        '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB', '#FFCE56'
      ],
      borderRadius: 12,
      hoverBackgroundColor: 'rgba(54, 162, 235, 0.9)',
      barThickness: 30,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#FFF',
      titleColor: '#333',
      bodyColor: '#666',
      borderColor: '#CCC',
      borderWidth: 1,
      cornerRadius: 8,
    },
    title: {
      display: true,
      text: 'Рейтинги новогодних фильмов',
      font: {
        size: 24,
        weight: 'bold',
        family: 'Inter, sans-serif',
      },
      color: '#333',
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        color: '#666',
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        color: '#666',
        stepSize: 1,
      },
      grid: {
        color: '#E6E6E6',
        borderDash: [5, 5],
      },
    },
  },
};

const ModernBarChart: React.FC = () => {
  return (
    <div className="modern-chart-container">
      <Bar data={movieData} options={options} />
    </div>
  );
};

export default ModernBarChart;
