import React, { useState, useEffect, useRef } from "react";
import "./comunitysignup.styles.scss";
import CameraFilePicker from "../../assets/Icons/CameraFilePicker.svg";
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

const CommunitySignUp = () => {
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
      reader.onload = function(e) {
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
  console.log(profileImageName);
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
    console.log(selectItem)
    let interests_array = [];
    selectItem.forEach(element => {
      if (element.selected === true) {
        interests_array.push(element.name)
      }
    });
    console.log(interests_array)
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
          sessionStorage.setItem('walletAddress', responseUser.data[0].user_wallet_address);
          sessionStorage.setItem('user', JSON.stringify(responseUser.data[0]));
          axios
            .get(`${global.backendUrl}/getWelcome`)
            .then(responseWelcome => {
              console.log(responseWelcome)
              let formData = {
                toEmail: emailAddress,
                welcomeMessage: responseWelcome.data[0].welcome_message_text
              };
              axios
                .post(`${global.backendUrl}/sendEmail`, formData)
                .then((responseEmailSend) => {
                  console.log(responseEmailSend)
                });

            })
            .catch(err => console.log(err))
          navigate("/welcome-page/");
        });

    });
  }
  return (
    <div className="community-signup-container">
      {/* <h1 className="my-3">COMMUNITY SIGN UP</h1> */}
      <div className="community-signup-body">
        {/* LEFT SIDE CONTAINER STARTS */}
        <div className="community-signup-leftside ms-3 my-4">
          <div className="username-input-container">
            <div className="community-signup-inputs-title">
              <h5>Username</h5>
              <span>Allowed Characters: A - Z, 0-9</span>
            </div>
            <div className="username-input-div">
              <input
                className="username-input"
                type="text"
                placeholder="Enter username"
                value={username}
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
                      // console.log(responseUser.data[0].user_wallet_address)
                    });
                }}
                onChange={(e) => {
                  setIsAvailable("NotShown");
                  setUsername(e.target.value);
                }}
              />
              <p
                hidden={isAvailable == "NotShown"}
                className="available-username"
              >
                {isAvailable == "true" ? "Available" : "Already Reserved"}
              </p>
            </div>
          </div>
          <div className="community-email-input-container">
            <div className="community-signup-inputs-title">
              <h5>Email Address</h5>
            </div>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
          </div>
          <div className="wallet-input-container">
            <div className="community-signup-inputs-title">
              <h5>Wallet Address</h5>
            </div>
            <input
              disabled
              type="text"
              placeholder="Enter wallet adress"
              value={walletAddress}
              onChange={(e) => {
                setWalletAddress(e.target.value);
              }}
            />
          </div>
          <div className="community-password-input-container">
            <div className="community-signup-inputs-title">
              <h5>Password</h5>
            </div>
            <input
              type="password"
              placeholder="......."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="confirm-password-container">
            <div className="community-signup-inputs-title">
              <h5>Confirm Password</h5>
            </div>
            <input
              type="password"
              placeholder="......."
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <p
              hidden={!isPasswordError}
              className="community-signup-inputs-error"
            >
              {passwordErrorMessage}
            </p>
          </div>
        </div>
        {/* LEFT SIDE CONTAINER ENDS */}

        {/* RIGHT SIDE CONTAINER STARTS */}
        <div className="community-signup-rightside ms-3 my-4">
          <div className="community-signup-pofile-image">
            <h5> Profile Image</h5>
            <p>Click to upload or drag and drop SVG, PNG, JPG or GIF </p>
            <p>Max size - 1000px x 1000px</p>
            <div
              className={`profile-image ${"position-relative"} my-2 d-flex justify-content-center justify-content-sm-start`}
            >
              {currentPage === "choose-img" ? (
                <img src={CameraFilePicker} alt="" onClick={onChooseImg} /> || (
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
                  // onCropCancel={onCropCancel}
                />
              ) : (
                <div>
                  <img
                    alt=""
                    src={imgAfterCrop}
                    className="cropped-img"
                    style={{ width: "41%", height: "100%" }}
                  />
                </div>
              )}

              <input
                style={{ width: "100px", height: "100px" }}
                type="file"
                ref={inputRef}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="community-signup-interests">
            <h5>Select your interests</h5>
            <div className="community-signup-interests-items">
              {selectItem.map((item) => {
                return (
                  <div
                    onClick={toggleSelectedItem}
                    data-id={item.id}
                    className={item.selected ? "selected" : ""}
                  >
                    <img
                      src={item.svgFile}
                      alt=""
                      onClick={toggleSelectedItem}
                      data-id={item.id}
                    />
                    <h6 onClick={toggleSelectedItem} data-id={item.id}>
                      {item.name}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="community-signup-agree-terms">
            <div>
              <input
                type="checkbox"
                className="me-2"
                onClick={(e) => {
                  // console.log(e.target.checked)
                  setTerms(e.target.checked);
                }}
              />
              <p className="m-0 me-2">
                I agree to receive updates and announcements from Sovereign.
              </p>
            </div>
            {/* to="/verify-twitter" */}
            <Link
              onClick={(e) => {
                updateUser();
              }}
              className={`community-signup-continue ${terms == true && isAvailable == "true"
                ? ""
                : "community-signup-continue-disabled"
                }`}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySignUp;
