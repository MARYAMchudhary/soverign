import React, { useState } from "react";
import "./mintdapp.styles.scss";
import MinusIcon from "../../assets/Icons/Minus-sign.svg";
import PlusIcon from "../../assets/Icons/PlusSign.svg";
import WalletForBuy from "../../assets/Icons/empty-wallet.svg";
import CreditCard1 from "../../assets/Icons/credit-card 1.svg";

const MintDapp = ({ DarkMood }) => {
  const [state1, setstate1] = useState("plus");
  const [state2, setstate2] = useState("plus");
  const [state3, setstate3] = useState("plus");
  const [state4, setstate4] = useState("plus");
  const [state5, setstate5] = useState("plus");

  return (
    <>
      <div className="main-parent">
        <div className="mint-dapp-top-container">
          <div className="top-container-childs round">
            <h2 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              NFT PLACEHOLDER
            </h2>
            <h2 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              3600X3600
            </h2>
          </div>
          <div className="top-container-childs second-container-handler">
            <div className="second-child-items">
              <h2 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                NFT COLLECTION NAME
              </h2>
              <div className="selectors-container">
                <span style={{ color: DarkMood === true ? "#000" : "#000" }}>
                  LIVE
                </span>
                <span style={{ color: DarkMood === true ? "#fff" : "#fff" }}>
                  PUBLIC
                </span>
              </div>
              <div className="total-minted-progressbar">
                <div className="progressbar-childs">
                  <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    Total Minted
                  </span>
                  <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    (0/10000)
                  </span>
                </div>
                <div className="progressbar-childs">
                  <div className="progressbar-bottom">
                    <div className="progressbar-outer"></div>
                  </div>
                </div>
              </div>
              <div className="time-duration-selector">
                <div className="end-in-contain">
                  <h4 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    ENDS IN
                  </h4>
                </div>
                <div className="time-options">
                  <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    {" "}
                    02D
                  </span>
                  <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    06H
                  </span>
                  <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    12M
                  </span>
                  <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    02S
                  </span>
                </div>
              </div>
            </div>
            <div className="price-and-quantity">
              <div className="buy-wallet-con">
                <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Price
                </span>
                <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  &#9776; 0.00 ETH
                </h3>
                <button className="wallet_buy">
                  <img src={WalletForBuy} alt="Unavailable" />
                  Buy With Wallet
                </button>
              </div>
              <div className="buy-wallet-con">
                <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Quantity
                </span>
                <div className="align-text-nums">
                  <h3 style={{ color: DarkMood === true ? "#000" : "#000" }}>
                    1
                  </h3>
                  <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                    2
                  </h3>
                </div>
                <button className="wallet_buy">
                  <img src={CreditCard1} alt="Unavailable" />
                  Buy With Card
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-container">
          <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
            Frequently Asked Questions
          </span>

          <div className="question-container">
            <div class="accordion" id="accordionExample">
              <div class="faq">
                <div class="card-header question-head" id="headingThree1">
                  <h2 class="mb-0">
                    <button
                      class="btn  collapsed question-title"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree1"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style={{ color: DarkMood === true ? "#fff" : "#000" }}
                    >
                      What is Zenon?
                    </button>
                  </h2>
                  <span
                    onClick={() => {
                      if (state1 === "plus") {
                        setstate1("minus");
                        setstate2("plus");
                        setstate3("plus");
                        setstate4("plus");
                        setstate5("plus");
                      } else {
                        setstate1("plus");
                      }
                    }}
                    class="collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree1"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      alt="Unavailable"
                      src={state1 === "plus" ? PlusIcon : MinusIcon}
                    />
                  </span>
                </div>
                <div
                  id="collapseThree1"
                  class="collapse"
                  aria-labelledby="headingThree1"
                  data-parent="#accordionExample"
                >
                  <div
                    class="card-body"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>

              <div class="faq">
                <div class="card-header question-head" id="headingThree2">
                  <h2 class="mb-0">
                    <button
                      class="btn  collapsed question-title"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree2"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style={{ color: DarkMood === true ? "#fff" : "#000" }}
                    >
                      How to sell NFT?
                    </button>
                  </h2>
                  <span
                    onClick={() => {
                      if (state2 === "plus") {
                        setstate1("plus");
                        setstate2("minus");
                        setstate3("plus");
                        setstate4("plus");
                        setstate5("plus");
                      } else {
                        setstate2("plus");
                      }
                    }}
                    class="collapsed question-title"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree2"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      alt="Unavailable"
                      src={state2 === "plus" ? PlusIcon : MinusIcon}
                    />
                  </span>
                </div>
                <div
                  id="collapseThree2"
                  class="collapse"
                  aria-labelledby="headingThree2"
                  data-parent="#accordionExample"
                >
                  <div
                    class="card-body"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>

              <div class="faq">
                <div class="card-header question-head" id="headingThree3">
                  <h2 class="mb-0">
                    <button
                      class="btn  collapsed question-title"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style={{ color: DarkMood === true ? "#fff" : "#000" }}
                    >
                      What is minting?
                    </button>
                  </h2>
                  <span
                    onClick={() => {
                      if (state3 === "plus") {
                        setstate1("plus");
                        setstate2("plus");
                        setstate3("minus");
                        setstate4("plus");
                        setstate5("plus");
                      } else {
                        setstate3("plus");
                      }
                    }}
                    class="collapsed question-title"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree3"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      alt="Unavailable"
                      src={state3 === "plus" ? PlusIcon : MinusIcon}
                    />
                  </span>
                </div>
                <div
                  id="collapseThree3"
                  class="collapse"
                  aria-labelledby="headingThree3"
                  data-parent="#accordionExample"
                >
                  <div
                    class="card-body"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>

              <div class="faq">
                <div class="card-header question-head" id="headingThree4">
                  <h2 class="mb-0">
                    <button
                      class="btn  collapsed question-title"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree4"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style={{ color: DarkMood === true ? "#fff" : "#000" }}
                    >
                      How to create an account?
                    </button>
                  </h2>
                  <span
                    onClick={() => {
                      if (state4 === "plus") {
                        setstate1("plus");
                        setstate2("plus");
                        setstate3("plus");
                        setstate4("minus");
                        setstate5("plus");
                      } else {
                        setstate4("plus");
                      }
                    }}
                    class="collapsed question-title"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree4"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      alt="Unavailable"
                      src={state4 === "plus" ? PlusIcon : MinusIcon}
                    />
                  </span>
                </div>
                <div
                  id="collapseThree4"
                  class="collapse"
                  aria-labelledby="headingThree4"
                  data-parent="#accordionExample"
                >
                  <div
                    class="card-body"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>

              <div class="faq">
                <div class="card-header question-head" id="headingThree5">
                  <h2 class="mb-0">
                    <button
                      class="btn  collapsed question-title"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree5"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style={{ color: DarkMood === true ? "#fff" : "#000" }}
                    >
                      How can I get my money?
                    </button>
                  </h2>
                  <span
                    onClick={() => {
                      if (state5 === "plus") {
                        setstate1("plus");
                        setstate2("plus");
                        setstate3("plus");
                        setstate4("plus");
                        setstate5("minus");
                      } else {
                        setstate5("plus");
                      }
                    }}
                    class="collapsed question-title"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree5"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      alt="Unavailable"
                      src={state5 === "plus" ? PlusIcon : MinusIcon}
                    />
                  </span>
                </div>
                <div
                  id="collapseThree5"
                  class="collapse"
                  aria-labelledby="headingThree5"
                  data-parent="#accordionExample"
                >
                  <div
                    class="card-body"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintDapp;
