import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';

function ChartsEVO ( {chartConfig } ) {

    const [data, setData] = useState({});

    useEffect(() => {

        const createChartObject = () => {
            const { dataCharts } = chartConfig ;
            const { labelsCharts } = chartConfig ;
            const dataSets = dataCharts.map(dataChart => creatSet(dataChart));
            setData({
                datasets: dataSets,
                labels: labelsCharts
            });
        }

        console.log('los datos que recibimos son: ', chartConfig);
        createChartObject();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const creatSet = ({ label, color, data }) => {
        return {
            label: label ,
            fill: false,
            lineTension: 0.1,
            backgroundColor: color ,
            borderColor: color ,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: { color },
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: color ,
            pointHoverBorderColor: color ,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data 
        }
    }

    return (
        <div>
            <Line data={data} />
        </div>
    );
}

export default ChartsEVO;