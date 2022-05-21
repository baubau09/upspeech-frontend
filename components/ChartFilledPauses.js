import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
            labels: {
                color: 'rgba(255, 255, 255, 0.8)',
                font: {
                    family: 'Montserrat'
                }
            }
        },
        title: {
            display: true,
            text: 'Number of Filled Pauses in your last 30 submissions over time',
            color: 'rgba(255, 255, 255)',
            font: {
                family: 'Montserrat',
                size: 16
            }
        },
        tooltip: {
            titleFont: {
                family: 'Poppins'
            },
            bodyFont: {
                family: 'Poppins'
            },
            footerFont: {
                family: 'Poppins'
            },
        }
    },
    scales: {
        x: {
            grid: {
              borderColor: 'white',
              color: 'rgba(255, 255, 255, 0.1)'
            },
            title: {
                color: 'rgba(255, 255, 255, 0.8)',
                display: false,
                text: 'Month'
            },
            ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
            }
        },
        y: {
            grid: {
              borderColor: 'white',
              color: 'rgba(255, 255, 255, 0.1)'
            },
            title: {
                color: 'rgba(255, 255, 255, 0.8)',
                display: false,
                text: 'Month'
            },
            ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
            }
        },
        
            
    }
};

const labels = [...Array(30).keys()].map(i => i + 1)

export const data = {
    labels,
    datasets: [
        {
            label: 'Filled Pauses',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
            backgroundColor: 'rgba(179, 206, 229, 0.7)',
            borderColor: 'rgba(179, 206, 229, 0.8)',
            pointStyle: 'circle',
            pointRadius: 6,
            pointHoverRadius: 10
        },
    ],
};

export default function FilledPausesChart() {
    return <Line options={options} data={data} />;
}
