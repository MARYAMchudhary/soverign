import React from 'react';
import './recentTransactions.scss';
import downSign from "../../../assets/Icons/down-sign.svg";
import searchIcon from "../../../assets/Icons/search-icon.svg";
import LineBar from "../../../assets/Icons/Line 12.svg";
import upDownArrow from "../../../assets/Icons/up-and-down-arrows.svg";

const RecentTransactions = () => {
  return (
    <>
      <div className='transactions-parent'>
        <div className='top-child-Stake12'>
          <span className='stake-title'>Recent transactions</span>
          <div className='sec-child1'>
            <div className='drop-container'>
              <span>Last 7 days</span>
              <img src={downSign} alt='Unavailable' />
            </div>
            <div className='inp-and-search-box'>
              <div>
              <img src={searchIcon} alt='Unavailable' />
              <input type='text' placeholder='Search by TX HASH' className=''/>
              </div>
              <div>
              <img src={LineBar} alt='Unavailable' />
              <input type='number' placeholder='Search by Wallet Address' className=''/>
              </div>
            </div>
          </div>
        </div>
        <span className='hr-line'></span>
        <div className='table-container'>
        <table>
          <thead>
            <tr>
              <td># 
              <img src={upDownArrow} alt='Unavailable' />
              </td>
              <td>TXN HASH 
              <img src={upDownArrow} alt='Unavailable' />
              </td>
              <td>METHOD 
              <img src={upDownArrow} alt='Unavailable' />
              </td>
              <td>AGE 
              <img src={upDownArrow} alt='Unavailable' />
              </td>
              <td>FROM 
              <img src={upDownArrow} alt='Unavailable' />
              </td>
              <td>QUANTITY 
              <img src={upDownArrow} alt='Unavailable' />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
            <tr>
              <td>6</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
            <tr>
              <td>7</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>Deposit</td>
              <td>0 mins ago</td>
              <td>0x321j3n4hdadad2riurh...</td>
              <td>LFG 500000</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default RecentTransactions
