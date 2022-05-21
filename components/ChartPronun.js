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
            display: false,
            text: 'Chart.js Bar Chart',
            color: 'rgba(255, 255, 255, 0.8)',
            font: {
                family: 'Montserrat'
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
            label: 'Incorrect Pronunciations',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
            backgroundColor: 'rgba(221, 195, 224, 0.8)',
        },
    ],
};

export default function PronunChart() {
    return <Bar options={options} data={data} />;
}
