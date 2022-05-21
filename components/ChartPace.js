import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import 'chartjs-adapter-moment';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

export const options = {
    responsive: true,
    type: 'line',
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
            text: 'Speech speed (wpm) from the last 30 submissions over time',
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
            // type: 'time',
            // time: {
            //     unit: 'minute',
            //     tooltipFormat: 'MMM Do'
            // },
            grid: {
              borderColor: 'white',
              color: 'rgba(255, 255, 255, 0.1)'
            },
            title: {
                color: 'rgba(255, 255, 255, 0.8)',
                display: false,
                text: 'Date'
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

export default function PaceChart({speeches}) {
    const dataArr = []
    const labelArr = []

    if (speeches) {
        speeches.forEach(item => {
            const date = typeof item?.uploadedAt === 'number' ? new Date(item.uploadedAt) : item.uploadedAt.toDate();
            labelArr.push(moment(date).format('MMM Do h:mma'))
            dataArr.push(item?.pace)
        });
    }

    const data = {
        labels: labelArr,
        datasets: [
            {
                label: 'Pace',
                data: dataArr,
                backgroundColor: 'rgba(247, 202, 201, 0.75)',
                borderColor: 'rgba(247, 202, 201, 0.8)',
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 10
                
            },
        ],
    };
    return <Line options={options} data={data} />;
}
