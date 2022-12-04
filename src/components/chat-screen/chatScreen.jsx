import React from 'react';
import './chatScreen.scss';
import Tickicon from "../../assets/Icons/Rectangle.png";
import Avatar from "../../assets/Hexagons/Avatars.png";
import WorldWide from "../../assets/Icons/worldwide 1.svg";
import Down from "../../assets/Icons/arrow-down.svg";
import Filled from "../../assets/Icons/filled.svg";
import Sender from "../../assets/Hexagons/Sender-pic.png";

const ChatScreen = () => {
  return (
    <>
        <div className='main-chat-container'>
            <div className='chat-second-child'>
                <div className='options-side'>
                    <div className='all-options'>
                        <div className='account-option'>
                            <span>Account</span>
                                <img className='tick-container' src={Tickicon} alt='Unavailable' />
                        </div>
                        <p>Created community account</p>
                    </div>
                    <div className='all-options-1'>
                        <div className='account-option'>
                            <span>Follow Twitter Account</span>
                                <img className='tick-container' src={Tickicon} alt='Unavailable' />
                        </div>
                        <div className='follow-and-verify'>
                            <span>Follows @SVRNDAO on Twitter</span>
                            <button>VERIFIED</button>
                        </div>
                    </div>
                    <div className='all-options-1'>
                        <div className='account-option'>
                            <span>Wallet Balance</span>
                                <img className='tick-container' src={Tickicon} alt='Unavailable' />
                        </div>
                        <div className='follow-and-verify'>
                            <span>Maintain a minimum of 0.5 ETH in a ETH network wallet.</span>
                            <button>VERIFIED</button>
                        </div>
                    </div>
                    <div className='profile-options'>
                        <img src={Avatar} alt='Unavailable' />
                    </div>
                </div>
                <div className='chat-window'>
                    <div className='chat-header'>
                        <div className='online-members'>
                            <h5>Community Chat</h5>
                            <p>1000 Members <span>|</span> 500 Online</p>
                        </div>
                        <div className='header-options'>
                            <div className='first-opt'>
                                <img src={WorldWide} alt='Unavailable' />
                                <img src={Down} alt='Unavailable' />
                            </div>
                            <div className='sec-opt'>
                                <img src={Filled} alt='Unavailable' />
                            </div>
                        </div>
                    </div>
                    
                    <select id="gender" className="drop-down1298">
                        <option selected> Announcements </option>
                        <option> The Vision </option>
                        <option>Behind The Curtain</option>
                        <option>The Art</option>
                        <option> Ecosystem and Utility </option>
                        <option> Conclusion </option>
                    </select>
                    
                    <div className='message-section'>
                        <div className='incoming-message'>
                            <div className='img-container'>
                            {/* <img src={Sender} alt='Unavailable' /> */}
                            </div>
                            <div className='incoming-message-container'>
                                <span>silverfrog195</span>
                            </div>
                            <div className='emogi-reaction'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatScreen
