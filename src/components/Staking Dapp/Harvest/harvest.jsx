import React from 'react';
import './harvest.scss';

const Harvest = () => {
  return (
    <>
      <div className='main-harvest-parent'>
        <div className='top-child-Stake'>
          <span className='stake-title'>Harvest</span>
          <div className='second-child-stake'>
            <span></span>
            <span></span>
          </div>
        </div>
        <span className='hr-line'></span>
        <div className='table-container'>
        <table>
          <thead>
            <tr>
              <td>POOL NAME</td>
              <td>UNLOCK DATE</td>
              <td>AMOUNT STACKED</td>
              <td>REWARDS TO HARVEST</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rewards Pool</td>
              <td>18.04.23 12:50 UTC</td>
              <td>1,960</td>
              <td>1,961.672</td>
              <td>
                <button className='cell-btn'>Harvest</button>
              </td>
            </tr>
            <tr>
              <td>Rewards Pool</td>
              <td>18.04.23 12:50 UTC</td>
              <td>1,960</td>
              <td>1,96</td>
              <td>
                <button className='cell-btn'>Harvest</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default Harvest
