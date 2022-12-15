import React from 'react'
import "./TokenPresale.style.scss";
import ImgOfS from "../../assets/Icons/S.png"

export default function TokenPresale() {
    return (
        <>
            <div className="container text-white">
                <div className="row">
                    <div className="col-12 col-md-8 px-3 py-4 main-card-bg">
                        <img src={ImgOfS} className="img-fluidf" alt="" />
                        <div className="row mt-3">
                            <div className="col-12 col-md-8">
                                <h2>Sovereign Presale 1</h2>
                            </div>
                            <div className="col-12 col-md-4">
                                <button className="btn btn-dark rounded-0 me-2">Website</button>
                                <button className="btn btn-dark rounded-0">Twitter</button>
                            </div>
                        </div>
                        <hr />
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac. Tempor nec feugiat nisl pretium fusce id velit. Bibendum enim facilisis gravida neque convallis a cras. Dolor sit amet consectetur adipiscing elit ut.
                        </p>
                        <p>In arcu cursus euismod quis viverra nibh cras. Purus gravida quis blandit turpis. Ante in nibh mauris cursus. Cursus risus at ultrices mi. Viverra tellus in hac habitasse platea. Quam lacus suspendisse faucibus interdum posuere lorem.

                        </p>
                        <p>
                            Faucibus interdum posuere lorem ipsum dolor.
                            Massa tincidunt dui ut ornare lectus sit amet. Faucibus ornare suspendisse sed nisi lacus. Enim nec dui nunc mattis. Fusce id velit ut tortor.

                        </p>
                    </div>
                    <div className="col-12 col-md-4 main-card-bg">
                        <div className="bg-primary px-3 py-4 pb-md-6">
                            <h4>Presales Starts in</h4>
                            <div className="row">
                                <div className="col-3">
                                    <p className="mb-0 fs-1 fw-bold">0</p>
                                    <p className="mb-0">Days</p>
                                </div>
                                <div className="col-3">
                                    <p className="mb-0 fs-1 fw-bold">14</p>
                                    <p className="mb-0">Hours</p>
                                </div>
                                <div className="col-3">
                                    <p className="mb-0 fs-1 fw-bold">24</p>
                                    <p className="mb-0">Minutes</p>
                                </div>
                                <div className="col-3">
                                    <p className="mb-0 fs-1 fw-bold">7</p>
                                    <p className="mb-0">Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 offset-md-1 p-3 bg-white text-dark top-10">
                            <p className="mb-0 fs-5">
                                300 ETH remains
                            </p>
                            <input type="range" className='input-range position-relative' />
                            <div>
                                <p className="mb-0"><span>300 ETH</span><span className='float-end'>600 ETH</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
