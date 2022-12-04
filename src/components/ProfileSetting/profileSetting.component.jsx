import "./profilesetting.styles.scss";
import { useState } from "react";
import MoneyIcon from "../../assets/Icons/MoneyIcon.svg";
import CodeIcon from "../../assets/Icons/CodeIcon.svg";
import MemoryIcon from "../../assets/Icons/MemoryIcon.svg";
import WebDevIcon from "../../assets/Icons/WebDevIcon.svg";
import EducationIcon from "../../assets/Icons/EducationIcon.svg";
import UIUXIcon from "../../assets/Icons/UIUXIcon.svg";
import ArtIcon from "../../assets/Icons/ArtIcon.svg";
import LawIcon from "../../assets/Icons/LawIcon.svg";
import CameraFilePicker from "../../assets/Icons/CameraFilePicker.svg";

import AddIcon from "../../assets/Icons/AddIcon.svg";
import AddIconWhite from "../../assets/Icons/AddIconWhite.svg";
import TickIcon from "../../assets/Icons/DoubleTick.svg";
import CircleClose from "../../assets/Icons/CloseCircle.svg";

const ProfileSetting = () => {
  const [showProfileInformation, setShowProfileInformation] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showUploadPicture, setShowUploadPic] = useState(false);
  const [showNewInterests, setShowNewInterests] = useState(false);
  const [showChangesSaved, setShowChangesSaved] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [profileImageName, setProfileImageName] = useState("Browse File");
  const [previewImage, setPreviewImage] = useState("");
  const [imageOrVideo, setImageOrVideo] = useState("");
  const [image, setImage] = useState("");

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

  const showNewInterestsBlock = () => {
    setShowChangePassword(false);
    setShowProfileInformation(false);
    setShowChangesSaved(false);
    setShowUploadPic(false);
    setShowNewInterests(true);
  };

  const showProfileInfoBlock = () => {
    setShowNewInterests(false);
    setShowChangePassword(false);
    setShowChangesSaved(false);
    setShowUploadPic(false);
    setShowProfileInformation(true);
  };

  const showChangePasswordBlock = () => {
    setShowNewInterests(false);
    setShowProfileInformation(false);
    setShowChangesSaved(false);
    setShowUploadPic(false);
    setShowChangePassword(true);
  };

  const changesSaved = () => {
    setShowNewInterests(false);
    setShowProfileInformation(false);
    setShowChangePassword(false);
    setShowUploadPic(false);
    setShowChangesSaved(true);
  };

  const showUploadProfilePicture = () => {
    setShowNewInterests(false);
    setShowProfileInformation(false);
    setShowChangePassword(false);
    setShowChangesSaved(false);

    setShowUploadPic(true);
  };

  const cancelClose = () => {
    setShowNewInterests(false);
    setShowChangePassword(false);
    setShowChangesSaved(false);
    setShowUploadPic(false);
    setShowProfileInformation(true);
  };
  return (
    <div className="profile_setting_main_container">
      <div className="profile_setting_container">
        <div className="profile_setting_head">My Profile</div>
        <div className="d-flex profile_setting_body">
          <div className="profile_setting_leftside">
            <button
              className="profile_info_button"
              onClick={showProfileInfoBlock}
            >
              Profile Inforamation
            </button>
            <button
              className="profile_change_password_btn"
              onClick={showChangePasswordBlock}
            >
              Change Password
            </button>
          </div>
          <div className="profile_setting_rightside ps-3">
            {showProfileInformation === true ? (
              <>
                <div className="mt-2 d-flex align-items-center">
                  <img
                    src={require("../../assets/Hexagons/UserProfile.png")}
                    alt=""
                  />
                  <div className="upload_remove_btn_container">
                    <button
                      className="profile_upload_pic_btn mx-3 mx-sm-5"
                      onClick={showUploadProfilePicture}
                    >
                      <img src={AddIcon} className="me-1" alt="" /> Upload
                      Picture
                    </button>
                    <button className="profile_remove_pic_btn">Remove</button>
                  </div>
                </div>
                <div className="profile_username_container">
                  <div className="profile-setting-inputs-title mb-3 mt-4">
                    <h5>Username</h5>
                    <span>Allowed Characters: A - Z, 0-9</span>
                  </div>
                  <div className="profile_setting_username-input_container">
                    <input
                      className="profile_setting_username-input"
                      type="text"
                      placeholder="Enter username"
                    />
                    <p className="profile_setting_available-username">
                      Avaialble
                    </p>
                  </div>
                </div>
                <div className="profile_email_container">
                  <div className="profile-setting-email-title mb-3 mt-4">
                    <h5>Email Address</h5>
                  </div>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="profile_setting_email-input"
                  />
                </div>
                <div
                  style={{
                    borderTop: "1px solid #282828",
                    width: "100%",
                    margin: "0 auto",
                  }}
                  className="mt-5 mb-2"
                ></div>
                <div className="user_interests_container w-100">
                  <div className="d-flex interests_name_block">
                    <img
                      src={require("../../assets/Icons/WhiteBlock.png")}
                      className="me-3"
                      alt=""
                    />
                    <h4 className="m-0">My Interests</h4>
                  </div>
                  <div className="user_interests">
                    <div className="user_interests_items ms-0">
                      {selectItem.map((item) => {
                        return (
                          <div
                            onClick={toggleSelectedItem}
                            data-id={item.id}
                            className={`${
                              item.selected ? "selected" : ""
                            } mb-3 mx-2 selected_interest_item`}
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src={item.svgFile}
                                alt=""
                                onClick={toggleSelectedItem}
                                data-id={item.id}
                              />
                              <h6
                                onClick={toggleSelectedItem}
                                data-id={item.id}
                              >
                                {item.name}
                              </h6>
                            </div>
                            <img src={CircleClose} alt="" />
                          </div>
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-end mt-3 add_new_interest_btn_container">
                      <button
                        className="add_new_interest"
                        onClick={showNewInterestsBlock}
                      >
                        <img src={AddIconWhite} className="me-1" alt="" />
                        Add New
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid #282828",
                      width: "100%",
                      margin: "0 auto",
                    }}
                    className="mt-3"
                  ></div>
                  <button
                    className="profile_upload_pic_btn my-3 me-5"
                    onClick={changesSaved}
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={cancelClose}
                    className="profile_remove_pic_btn my-3"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : showChangePassword === true ? (
              <>
                <div className="change_pass_field_containers">
                  <div className="profile-setting-inputs-title my-2">
                    <h5 style={{ color: "#BDBDBD" }}>Old Password</h5>
                  </div>
                  <input
                    type="password"
                    placeholder="········"
                    className="profile_setting_email-input"
                  />
                </div>
                <div className="change_pass_field_containers">
                  <div className="profile-setting-inputs-title my-2">
                    <h5 style={{ color: "#BDBDBD" }}>New Password</h5>
                  </div>
                  <input
                    type="password"
                    placeholder="········"
                    className="profile_setting_email-input"
                  />
                </div>
                <div className="change_pass_field_containers">
                  <div className="profile-setting-inputs-title my-2">
                    <h5 style={{ color: "#BDBDBD" }}>Confirm Password</h5>
                  </div>
                  <input
                    type="password"
                    placeholder="········"
                    className="profile_setting_email-input"
                  />
                </div>
                <button
                  className="profile_upload_pic_btn mt-3 me-5"
                  onClick={changesSaved}
                >
                  Save Changes
                </button>
                <button
                  className="profile_remove_pic_btn mt-3"
                  onClick={cancelClose}
                >
                  Cancel
                </button>
              </>
            ) : showNewInterests === true ? (
              <div className="add_new_interest_container">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "inherit" }}
                >
                  <div className="user_interests_container w-100">
                    <div className="user_interests">
                      <div className="new_user_interests_items">
                        {selectItem.map((item) => {
                          return (
                            <div
                              onClick={toggleSelectedItem}
                              data-id={item.id}
                              className={`${
                                item.selected ? "selected" : ""
                              } mb-2 mx-2`}
                            >
                              <img
                                src={item.svgFile}
                                alt=""
                                onClick={toggleSelectedItem}
                                data-id={item.id}
                              />
                              <h6
                                onClick={toggleSelectedItem}
                                data-id={item.id}
                              >
                                {item.name}
                              </h6>
                            </div>
                          );
                        })}
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          className="add_new_interest"
                          onClick={changesSaved}
                        >
                          SAVE CHANGES
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : showChangesSaved === true ? (
              <div className="changes_saved_container">
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-center">
                    <img src={TickIcon} alt="" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <h3>Changes Saved</h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="profile_upload_pic_btn mt-3"
                      onClick={cancelClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : showUploadPicture === true ? (
              <div className="community-signup-pofile-image mt-2 ms-2 mt-sm-5 ms-sm-5">
                <h5> Profile Image</h5>
                <p>Click to upload or drag and drop SVG, PNG, JPG or GIF </p>
                <p>Max size - 1000px x 1000px</p>
                <div
                  className={`profile-image ${"position-relative"} my-2 d-flex justify-content-sm-start mb-4`}
                >
                  {previewImage != "" ? (
                    <img className="img-preview" src={previewImage} alt="" />
                  ) : (
                    <img src={CameraFilePicker} alt="" />
                  )}
                  <input
                    style={{ width: "100px", height: "100px" }}
                    type="file"
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                </div>
                <button
                  className="profile_upload_pic_btn mt-3 me-5"
                  onClick={changesSaved}
                >
                  Save Changes
                </button>
                <button
                  className="profile_remove_pic_btn mt-3"
                  onClick={cancelClose}
                >
                  Cancel
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
