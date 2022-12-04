import React, {useState} from 'react';
import './graphContainer.scss';
import { BarChart } from '../Bar Chart/barChart';
import {UserData} from './data';

const GraphContainer = () => {

  const [ userData, setuserData ] = useState( {
    labels: UserData.map( ( data ) => data.year ),
    datasets: [
      {
        label: 'User Gained',
        data: UserData.map( ( data ) => data.userGain ),
        borderRadius: 1000,
        backgroundColor: "#333333",
        barPercentage: 0.5,
        maxBarThickness: 10,
        borderSkipped: false
      }
    ],
  });
  return (
    <>
      <div className='graph-container'>
        <div className='graph-childs'>
          <div className='top-text'>
            <h3>$0,000,000.00</h3>
            <span>Total Value Locked</span>
          </div>
          <div className='chart-cont'>
            <BarChart chartData={userData}/>
          </div>
        </div>
        <div className='graph-childs'>
          <div className='top-text'>
            <h3>000%</h3>
            <span>Maximum Est.APY</span>
          </div>
          <div className='chart-cont'>
            <BarChart chartData={userData}/>
          </div>
        </div>
        <div className='graph-childs'>
          <div className='top-text'>
            <h3>0000</h3>
            <span>Number of Stakers</span>
          </div>
          <div className='chart-cont'>
            <BarChart chartData={userData}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default GraphContainer
