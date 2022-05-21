import React,{useState, useEffect, useContext} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmotionChart({ speeches }) {
    const dataArr = [0,0,0,0,0,0]
    const labelArr = ['Happy', 'Sad', 'Neutral', 'Angry', 'Fear', 'Disgust']

    if (speeches) {
        speeches.forEach(item => {
            if (item?.emotion == 'happy') dataArr[0]++
            if (item?.emotion == 'sad') dataArr[1]++
            if (item?.emotion == 'neutral') dataArr[2]++
            if (item?.emotion == 'angry') dataArr[3]++
            if (item?.emotion == 'fear') dataArr[4]++
            if (item?.emotion == 'disgust') dataArr[5]++
        });
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: {
                        family: 'Montserrat'
                    }
                }
            },
        }
    }

    const data = {
        labels: labelArr,
        datasets: [
            {
                label: '# of Votes',
                data: dataArr,
                backgroundColor: [
                    'rgba(179, 206, 229, 0.8)',
                    'rgba(212, 255, 220, 0.8)',
                    'rgba(221, 195, 224, 0.8)',
                    'rgba(214, 243, 231, 0.8)',
                    'rgba(237, 203, 168, 0.8)',
                    'rgba(248, 241, 174, 0.8)',
                ],
                borderColor: [
                    'rgba(179, 206, 229, 1)',
                    'rgba(212, 255, 220, 1)',
                    'rgba(221, 195, 224, 1)',
                    'rgba(214, 243, 231, 1)',
                    'rgba(237, 203, 168, 1)',
                    'rgba(248, 241, 174, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Doughnut options={options} data={data} />;
}
