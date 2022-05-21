import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
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
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
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
            text: 'Speech speed (wpm) in your last 30 submissions over time',
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
        }
    }
};

const labels = [...Array(30).keys()].map(i => i + 1)

export const data = {
    labels,
    datasets: [
        {
            label: 'Pace',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
            backgroundColor: 'rgba(247, 202, 201, 0.8)',
        },
    ],
};

export default function PaceChart() {
    return <Bar options={options} data={data} />;
}
