import React from 'react';
import HundredTopRank from '../../components/zingcharts/HundredTopRank';
import "../../components/css/zingchart.css";
import TopWeekRank from '../../components/zingcharts/TopWeekRank';

function ZingChartPage() {
    return (
        <div className="zing-chart-container">
            <HundredTopRank />
            <TopWeekRank />
        </div>
    )
}

export default ZingChartPage;