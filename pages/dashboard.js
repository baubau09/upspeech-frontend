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
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
import PaceChart from '../components/ChartPace'
import FilledPausesChart from '../components/ChartFilledPauses';
import PronunChart from '../components/ChartPronun';
const DashboardPage = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <PaceChart />
                    </div>
                    <div className="col">
                        <FilledPausesChart />
                    </div>
                </div>
                <div className="row">
                <div className="col">
                    <PronunChart />
                </div>
                <div className="col">
                    <FilledPausesChart />
                </div>
            </div>
            </div>
            

        </>
    )
}

export default DashboardPage