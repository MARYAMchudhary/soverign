import React, { useState, useEffect, useRef } from "react";
import "./comunitysignup.styles.scss";
import CameraFilePicker from "../../assets/Icons/CameraFilePicker.svg";
import Polygon from "../../assets/Icons/Polygon 4.png";
import Checkbox from "@mui/material/Checkbox";

// INTERESTS ICONS
import MoneyIcon from "../../assets/Icons/MoneyIcon.svg";
import CodeIcon from "../../assets/Icons/CodeIcon.svg";
import MemoryIcon from "../../assets/Icons/MemoryIcon.svg";
import WebDevIcon from "../../assets/Icons/WebDevIcon.svg";
import EducationIcon from "../../assets/Icons/EducationIcon.svg";
import UIUXIcon from "../../assets/Icons/UIUXIcon.svg";
import ArtIcon from "../../assets/Icons/ArtIcon.svg";
import LawIcon from "../../assets/Icons/LawIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ImageCrop from "./ImageCrop";
import ReactCrop from "react-image-crop";


// Vector Image Import
import VectorIcon from "./Vector.png"

const CommunitySignUp = ({ DarkMood }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [interests, setInterests] = useState("");
  const [profileImageName, setProfileImageName] = useState("Browse File");
  const [previewImage, setPreviewImage] = useState("");
  const [imageOrVideo, setImageOrVideo] = useState("");
  const [image, setImage] = useState("");
  const [terms, setTerms] = useState(false);
  const [isAvailable, setIsAvailable] = useState("NotShown");
  const [modalPreview, setModalPreview] = useState("");
  //*FILE UPLOADED STATES
  const inputRef = useRef();
  const [imagef, setImagef] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)
  //MULTIPLE INTEREST SELECTION STARTS
  const [selectItem, setSelectItem] = useState([
    { id: "1", name: "Investing", selected: false, svgFile: MoneyIcon },
    { id: "2", name: "Front-end", selected: false, svgFile: CodeIcon },
    { id: "3", name: "Literature", selected: false, svgFile: MemoryIcon },
    { id: "4", name: "Back-end", selected: false, svgFile: WebDevIcon },
    { id: "5", name: "Teaching", selected: false, svgFile: EducationIcon },
    { id: "6", name: "Ui/Ux", selected: false, svgFile: UIUXIcon },
    { id: "7", name: "Art", selected: false, svgFile: ArtIcon },
    { id: "8", name: "Law", selected: false, svgFile: LawIcon },
  ]);


  // State for small screen
  const [smallScreen, setSmallScreen] = useState({ smallScreen: false, step: 1 })
  const isSmallScreen = smallScreen.smallScreen;



  const toggleSelectedItem = (e) => {
    if (!e.target.classList.contains("selected")) {
      const selectedCount = selectItem.filter((item) => item.selected).length;
      if (selectedCount === 8) {
        return;
      }
    }

    setSelectItem(
      selectItem.map((item) =>
        item.id === e.target.getAttribute("data-id")
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };
  //MULTIPLE INTEREST SELECTION ENDS

  // //REACT IMAGE CROP FUNCTIONALITY STARTS
  // const allowedFileTypes = `image/gif image/png, image/jpeg, image/x-png`;
  // const [crop, setCrop] = useState({
  //   aspect: 1 / 1,
  //   height: 500,
  //   unit: "px",
  //   width: 500,
  //   x: 0,
  //   y: 107,
  // });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    console.log(canvasEle.width);
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;
    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = imagef;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );
      const dataURL = canvasEle.toDataURL("image/jpeg");
      // if (dataURL) {
      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };
  useEffect(() => {
    console.log(window.location);
    let splits = window.location.pathname.split("/");
    console.log(splits);
    setUserId(splits[2]);
    axios
      .get(`${global.backendUrl}/getUserById/${splits[2]}`)
      .then((responseUser) => {
        console.log(responseUser);
        console.log(responseUser.data[0].user_wallet_address);
        setWalletAddress(responseUser.data[0].user_wallet_address);
      });
  }, []);
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      setImage(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };
  const onImageSelected = (selectedImg) => {
    if (selectedImg) {
      setImagef(selectedImg);
      setCurrentPage("crop-img");
    } else {
      setImagef("");
      setCurrentPage("choose-img");
    }
  };
  const onChooseImg = () => {
    inputRef.current.click();
  };
  function onChange(e) {
    const files = e.target.files || e.dataTransfer.files;
    console.log(files[0]);
    setProfileImageName(files[0].name);
    createProfleImage(files[0]);
  }
  function createProfleImage(file) {
    console.log(file);
    if (file.type.includes("image")) {
      setImageOrVideo("image");
    } else {
      setImageOrVideo("video");
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      console.log(reader.result);
      console.log(file);

      setImage(file);
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function updateUser() {
    console.log(selectItem);
    let interests_array = [];
    selectItem.forEach((element) => {
      if (element.selected === true) {
        interests_array.push(element.name);
      }
    });
    console.log(interests_array);
    // return
    if (username == "") {
      return;
    } else if (password == "") {
      return;
    } else if (!terms) {
      return;
    } else if (confirmPassword != password) {
      setIsPasswordError(true);
      setPasswordErrorMessage("Password not matched!");
      return;
    } else {
      setIsPasswordError(false);
      setPasswordErrorMessage("");
    }
    console.log("ABC", userId);
    console.log(image);
    const data = new FormData();
    data.append("user_name", username);
    data.append("user_email", emailAddress);
    data.append("user_password", password);
    data.append("user_image", image);
    data.append("user_interests", JSON.stringify(interests_array));
    data.append("user_id", userId);

    axios.post(`${global.backendUrl}/updateUser`, data).then((response) => {
      console.log(response);
      // navigate("/verify-twitter/" + userId);
      axios
        .get(`${global.backendUrl}/getUserById/${userId}`)
        .then((responseUser) => {
          // console.log(responseUser);
          // console.log(responseUser.data[0].user_wallet_address);
          // setWalletAddress(responseUser.data[0].user_wallet_address);
          sessionStorage.setItem(
            "walletAddress",
            responseUser.data[0].user_wallet_address
          );
          sessionStorage.setItem("user", JSON.stringify(responseUser.data[0]));
          axios
            .get(`${global.backendUrl}/getWelcome`)
            .then((responseWelcome) => {
              console.log(responseWelcome);
              let formData = {
                toEmail: emailAddress,
                welcomeMessage: responseWelcome.data[0].welcome_message_text,
              };
              axios
                .post(`${global.backendUrl}/sendEmail`, formData)
                .then((responseEmailSend) => {
                  console.log(responseEmailSend);
                });
            })
            .catch((err) => console.log(err));
          navigate("/welcome-page/");
        });
    });
  }






  var x = window.matchMedia("(max-width: 768px)")
  x.addListener(() => { x.matches ? setSmallScreen({ ...smallScreen, smallScreen: true }) : setSmallScreen({ ...smallScreen, smallScreen: false }) }) // Attach listener function on state changes


  useEffect(() => {
    window.innerWidth <= 768 ? setSmallScreen({ smallScreen: true, step: 1 }) : setSmallScreen({ smallScreen: false, step: 1 })
  }, [window.innerWidth])







  return (
    <>
      <h1 className={`m-3 ms-5 text-${DarkMood ? "white" : "dark"}`}>COMMUNITY SIGN UP</h1>
      <div className="container">
        <div className="row wallent-section-bg">
          <div className="col-9 py-1 px-3">
            <p className="mb-0 fs-6" >Your Wallet Address</p>
            <div className="d-flex-all justify-content-start">
              <img src={VectorIcon} className="img-fluid" width="30" alt="" />
              <span className="fs-3">0x92398...a</span>
            </div>
          </div>
          <div className="col-3 d-flex-all justify-content-end">
            <button className="btn">Disconnet</button>
          </div>
        </div>
        <div className={`row p-2 mt-3 text-center shadow mb-2 ${DarkMood ? "main-card-bg text-white" : "bg-light text-dark"}`}>



          <div className={`col-12 col-md-4 ${isSmallScreen && smallScreen.step === 1 ? "d-block" : "d-none d-md-block"}`}>
            <p className="mb-0">
              <span className="fs-6">01/</span>
              <span className="fs-2">Your Info</span>
              <hr />
            </p>
            <div className="mt-3 text-start">
              <label htmlFor="username-input" className="w-100">
                Username
                <input type="text" value={username}
                  onBlur={(e) => {
                    console.log(e.target.value);
                    if (e.target.value == "") {
                      setIsAvailable("false");
                      return;
                    }
                    axios
                      .get(
                        `${global.backendUrl}/getUserByUsername/${e.target.value}`
                      )
                      .then((responseUser) => {
                        console.log(responseUser);
                        if (responseUser.data.length > 0) {
                          setIsAvailable("false");
                        } else {
                          setIsAvailable("true");
                        }
                      });
                  }}
                  onChange={(e) => {
                    setIsAvailable("NotShown");
                    setUsername(e.target.value);
                  }} className={`form-control bg-transparent text-${DarkMood ? "white" : "dark"}`} id="username-input" placeholder="User Name" />
              </label>
              <label htmlFor="email" className="w-100 mt-2">
                Email Address
                <input value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }} type="email" className={`form-control bg-transparent text-${DarkMood ? "white" : "dark"}`} id="email" placeholder="Email Address" />
              </label>
              <label htmlFor="Wallet" className="w-100 mt-2">
                Wallet Address
                <input disabled
                  value={walletAddress}
                  onChange={(e) => {
                    setWalletAddress(e.target.value);
                  }} type="text" className={`form-control bg-transparent text-${DarkMood ? "white" : "dark"}`} id="Wallet" placeholder="Enter Wallet Address" />
              </label>
              <label htmlFor="password" className="w-100 mt-2">
                Password
                <div class="input-group">
                  <input value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} type={!isPasswordShown ? "password" : "text"} id="password" class={`form-control bg-transparent text-${DarkMood ? "white" : "dark"} border-end-0`} placeholder="********" />
                  <span onClick={() => setIsPasswordShown(!isPasswordShown)} class="input-group-text bg-transparent border-start-0 text-white" id="basic-addon2"><i class={`bi bi-eye${!isPasswordShown ? "" : "-slash"}`}></i></span>
                </div>
              </label>
              <label htmlFor="confirmPassword" className="w-100 mt-2">
                Confirm Password
                <div class="input-group">
                  <input value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }} type={!isConfirmPasswordShown ? "password" : "text"} id="confirmPassword" class={`form-control bg-transparent text-${DarkMood ? "white" : "dark"} border-end-0`} placeholder="********" />
                  <span onClick={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)} class="input-group-text bg-transparent border-start-0 text-white" id="basic-addon2"><i class={`bi bi-eye${!isConfirmPasswordShown ? "" : "-slash"}`}></i></span>
                </div>
              </label>
              <div className="col text-center">
                {smallScreen.smallScreen === true ?
                  <button className={`btn btn-${DarkMood ? "light" : "dark"} mt-2 w-100 `} onClick={() => setSmallScreen({ ...smallScreen, step: 2 })}>Continue <i class="bi bi-arrow-right ms-2"></i></button>
                  : <></>
                }
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-4  ${smallScreen.smallScreen && smallScreen.step == 2 ? "d-block" : "d-none d-md-block"}`}>
            <p className="mb-0">
              <span className="fs-6">02/</span>
              <span className="fs-2">Profile image</span>
              <hr />
            </p>
            <div className="mt-4">
              <div className="position-relative d-flex-all">
                <div
                  className={`profile-image ${"position-relative"} my-2 d-flex justify-content-center justify-content-sm-start`}
                >
                  {currentPage === "choose-img" ? (
                    <img src={DarkMood ? CameraFilePicker : Polygon} alt="" onClick={onChooseImg} /> || (
                      <div>
                        <img
                          alt=""
                          src={imgAfterCrop}
                          className="cropped-img"
                          style={{ width: "41%", height: "100%" }}
                        />
                      </div>
                    )
                  ) : currentPage === "crop-img" ? (
                    <ImageCrop
                      image={imagef}
                      onCropDone={onCropDone}
                    />
                  ) : (
                    <div>
                      <img
                        alt=""
                        src={imgAfterCrop}
                        className="cropped-img"
                        style={{ width: "41%", height: "100%" }}
                        onClick={() => document.getElementById("fileInput").click()}
                      />
                    </div>
                  )}

                  <input
                    style={{ width: "100px", height: "100px" }}
                    type="file"
                    id="fileInput"
                    ref={inputRef}
                    className="d-none"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="d-flex-all flex-column">
                <div className="mt-5 divider rounded-1"></div>
                <p className="mb-0 mt-2">Click to upload or drag and drop SVG, PNG, JPG or GIF</p>
                <p className="mb-0 mt-2 text-danger">Max Size 1000px * 1000px</p>
              </div>
              <div className="col text-center">
                {!isSmallScreen ? <></> :
                  <button className={`btn btn-${DarkMood ? "light" : "dark"} mt-2 w-100`} onClick={() => setSmallScreen({ ...smallScreen, step: 3 })}>Continue <i class="bi bi-arrow-right ms-2"></i></button>
                }
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-4 ${smallScreen.step === 3 && smallScreen.smallScreen === true ? "d-block" : "d-none d-md-block"}`}>
            <p className="mb-0">
              <span className="fs-6">03/</span>
              <span className="fs-2">Select your interests</span>
              <hr />
              <div className="mt-4">
                <div className="row">
                  {selectItem.map((item) => (
                    <div onClick={toggleSelectedItem}
                      data-id={item.id} className="col-12 col-md-6">
                      <input type="checkbox" class="check-with-label" id={item.name} />
                      <label onClick={toggleSelectedItem}
                        data-id={item.id} class={`label-for-check btn ${DarkMood ? "text-white" : "text-dark"} w-100 border border-1 border-${DarkMood ? "light" : "secondary"}`} for={item.name}>{item.name}</label>
                    </div>
                  ))}
                  <label htmlFor="form-check-input">
                    <input type="checkbox" onClick={(e) => {
                      setTerms(e.target.checked);
                    }} className="form-check-input" id="form-check-input" />
                    I agree to receive updates and announcements from Sovereign.
                  </label>
                  <div className="col">
                    <button disabled={!terms} onClick={(e) => {
                      updateUser();
                    }} className={`btn btn-${DarkMood ? "light" : "dark"} w-100`}>Continue <i class="bi bi-arrow-right ms-2"></i></button>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunitySignUp;
