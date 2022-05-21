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
import 'chartjs-adapter-moment';
import moment from 'moment';

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
            text: 'Number of incorrect pronunciations from the last 30 submissions over time',
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

export default function PronunChart({speeches}) {
    const dataArr = []
    const labelArr = []

    if (speeches) {
        speeches.forEach(item => {
            const date = typeof item?.uploadedAt === 'number' ? new Date(item.uploadedAt) : item.uploadedAt.toDate();
            labelArr.push(moment(date).format('MMM Do h:mma'))
            dataArr.push(item?.pronunErr)
        });
    }
    const data = {
        labels: labelArr,
        datasets: [
            {
                label: 'Incorrect Pronunciations',
                data: dataArr,
                backgroundColor: 'rgba(221, 195, 224, 0.8)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}
