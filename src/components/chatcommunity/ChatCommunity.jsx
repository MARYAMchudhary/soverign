import React, { useState } from "react";
import "./chatcommunity.css";
import { Scrollbar } from "react-scrollbars-custom";
import Tickicon from "../../assets/Icons/Rectangle.png";
import sender from "../../assets/Hexagons/Sender-pic.png";
import sendicon from "../../assets/chatcommunity/send.png";
import crossicon from "../../assets/chatcommunity/crossicon.png";
import CloseIcon from "@mui/icons-material/Close";
import replyicon from "../../assets/chatcommunity/reply.png";
import adminicon from "../../assets/chatcommunity/admin.png";
import worldicon from "../../assets/chatcommunity/worldwide 1.png";
import crossiconlist from "../../assets/chatcommunity/cross.png";
import cross1 from "../../assets/chatcommunity/cross1.png";
import Doublecheck from "../../assets/chatcommunity/Doublecheck.png";
import EmojiPicker from "emoji-picker-react";
import account from "../../assets/homeicons/account.png";
import verify from "../../assets/homeicons/verify.png";
import light_twitter from "../../assets/homeicons/light_twitter.png";
import seting from "../../assets/homeicons/seting.png";
import wallet from "../../assets/homeicons/wallet.png";
import polygon from "../../assets/homeicons/polygon.png";
import none from "../../assets/homeicons/none.png";
import trashicon from "../../assets/homeicons/delete.png";
import Smileicon from "../../assets/homeicons/smile.png";
import gif from "../../assets/homeicons/gif.png";
import snd from "../../assets/homeicons/snd.png";
import line from "../../assets/homeicons/Line.png";
import lightdelete from "../../assets/homeicons/lightdelete.png";
import lightnone from "../../assets/homeicons/lightnone.png";
import darksmile from "../../assets/homeicons/darksmile.png";
import {
  useMediaQuery,
  Select,
  MenuItem,
  FormControl,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  InputLabel,
  Divider,
  Container,
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  Paper,
  Grid,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import io from "socket.io-client";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "transparent",
};

const languageOptions = [
  {
    value: 0,
    src: worldicon,
  },
  {
    value: 1,
    label: "Arabic",
  },
  {
    value: 2,
    label: "Bengali",
  },
  {
    value: 3,
    label: "Chinese",
  },
  {
    value: 4,
    label: "Danish",
  },

  {
    value: 5,
    label: "Dutch",
  },
  {
    value: 6,
    label: "French",
  },
  {
    value: 7,
    label: "German",
  },
  {
    value: 8,
    label: "Hindi",
  },
  {
    value: 9,
    label: "Italian",
  },
  {
    value: 10,
    label: "Japanese",
  },
  {
    value: 11,
    label: "Norwegian",
  },
  {
    value: 12,
    label: "Portuguese",
  },
  {
    value: 13,
    label: "Russian",
  },
  {
    value: 14,
    label: "Spanish",
  },
  {
    value: 15,
    label: "Swedish",
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

//Socket.IO Connection with backend
const socket = io.connect("https://sovereignchatserver.unialsolutions.com");

function ChatCommunity({ DarkMood }) {
  const matches = useMediaQuery("(max-width:1000px)");
  const bgmatches = useMediaQuery("(max-width:1200px)");
  const mobileversion = useMediaQuery("(max-width:480px)");

  const [age, setAge] = useState("");
  //!CHAT HANDLER STATES
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [reRenderedState, setreRenderedState] = useState(false);
  const [chatArray, setchatArray] = useState([
    // {
    //   id: 1,
    //   messages: "Welcome from server",
    //   username: "server",
    //   count_reaction: 0,
    //   reactions: "",
    //   status: true,
    //   ref: null,
    // },
    {
      id: 2,
      message: "A Reply Message ",
      username: "server",
      count_reaction: 0,
      status: true,
      reactions: "",
      ref: {
        message: "Welcome from server",
        username: "server",
      },
    },
  ]);

  //*Dialouge INFO data  START
  const [openDialouge, setOpenDialouge] = useState(false);

  // THESE CONFIGURATIONS WILL BE USED WHEN THE USER WILL SIGN IN OR SIGN UP OR WE CAN CHECK IF USER EXIST IN DATABASE

  // THE NAME OF THE USER WILL BE STORED IN THIS STATE SO WE WILL BE ABLE TO ALIGN MESSAGES AT LEFT OR RIGHT SIDE.

  // WE HAVE TO COMMUNITY CHAT ROOM A ID OR NAME SO THE USERS WILL BE ABLE TO ENTER THE COMMUNITY CHAT.
  const [room, setRoom] = useState(123);

  // IF WE DON'T WANT TO SHOW GUEST USERS COMMUNITY CHAT SCREEN.
  const [showChat, setShowChat] = useState(false);

  // FUNCTION TO LET USERS JOIN COMMUNITY CHAT IF THEY HAVE SIGNED IN OR SIGNED UP.

  useEffect(() => {});
  // THESE CONFIGURATIONS WILL BE USED TO SHOW MESSAGES IN CHAT SCREEN

  // THIS STATE WILL BE USED TO STORE CURRENT MESSAGE OF THE USER IN THE STATE
  const [currentMessage, setCurrentMessage] = useState("");

  // THIS STATE WILL BE USED TO GET ALL THE MESSAGES THAT OTHER USERS ARE SENDING
  const [messageList, setMessageList] = useState([]);

  // THIS FUNCTION WILL BE USED TO SEND MESSAGES TO THE OTHER USERS

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: sender,
        message: currentMessage,
        username: "client",
        count_reaction: 0,
        reactions: "",
        ref: textField.ref,
        status: true,
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  // THIS HOOK WILL BE USED TO RECIEVE MESSAGES FROM OTHER USERS AND TO UPDATE CHAT IN REAL TIME
  useEffect(() => {
    socket.emit("join_room", room);

    socket.on("receive_message", (data) => {
      setchatArray((list) => [...list, data]);
    });
  }, [socket]);

  const handleClickOpen = () => {
    setOpenDialouge(true);
  };

  const handleCloseDialoge = () => {
    setOpenDialouge(false);
  };

  //*Dialouge INFO data  END
  //*Dialouge DELET data  START

  const [openDLTDialouge, setOpenDLTDialouge] = useState(false);

  const handleClickDLT = () => {
    setOpenDLTDialouge(true);
  };

  const handleCloseDLT = () => {
    setOpenDLTDialouge(false);
  };
  //*Dialouge DELET data  END

  //*Dialouge ADMIN data  START

  const [openADMINDialouge, setOpenADMINDialouge] = useState(false);

  const handleClickADMIN = () => {
    setOpenADMINDialouge(true);
  };

  const handleCloseADMIN = () => {
    setOpenADMINDialouge(false);
  };
  //*Dialouge ADMIN data  END
  //!________________________________________________________

  //*Dialouge DELET user data  START

  const [openDLTuserDialouge, setOpenDLTuserDialouge] = useState(false);

  const handleClickDLTuser = () => {
    setOpenDLTuserDialouge(true);
  };

  const handleCloseDLTuser = () => {
    setOpenDLTuserDialouge(false);
  };
  //*Dialouge DELET user data  END

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [textField, settextField] = useState({
    ref: null,
    textarea: "",
  });
  const [emojisToggle, setEmojisToggle] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    console.log(chosenEmoji.srcElement?.src);
    console.log(currentChatIndex, "adads");
    var arrr = chatArray;
    if (arrr[currentChatIndex].reactions === emojiObject.srcElement?.src) {
      arrr[currentChatIndex].count_reaction =
        arrr[currentChatIndex].count_reaction + 1;
    } else {
      arrr[currentChatIndex].reactions = emojiObject.srcElement?.src;
      arrr[currentChatIndex].count_reaction = 1;
    }
    setchatArray(arrr);

    handleClose();
  };
  const handleEmojiaClick = (id) => {
    setEmojisToggle(true);
    console.log(emojisToggle);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (textField.textarea === "") {
      return;
    } else {
      //  const  {
      //     messages: textField.textarea,
      //     username: "client",
      //     count_reaction: 0,
      //     reactions: "",
      //     ref: textField.ref,
      //     status: true,
      //   },
      const messageData = {
        room: room,
        author: sender,
        message: textField.textarea,
        username: "client",
        count_reaction: 0,
        reactions: "",
        ref: textField.ref,
        status: true,
      };

      // setchatArray([...chatArray, messageData]);
      await socket.emit("send_message", messageData);
      setchatArray((list) => [...list, messageData]);
    }

    settextField({
      ref: null,
      textarea: "",
    });
  };
  return (
    <div
      className={
        DarkMood === false ? "light_mood mt-n3 py-2" : "dark_mood mt-n3 py-2"
      }
    >
      <div className={matches || bgmatches ? "container-md" : "container-sm "}>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="col-md-5 col-sm-12 order-sm-1"
            style={{ backgroundColor: DarkMood === true ? "#18151b" : "#fff" }}
          >
            <Box
              sx={{
                padding: matches || bgmatches ? "2%" : 2,
                borderBottom: "1px solid #9d9ea1",
                borderLeft: "2px solid #3CC0A1",
              }}
            >
              <Box display="flex" alignItems="center" sx={{}}>
                <img
                  src={account}
                  style={{
                    width: matches || bgmatches ? "29px" : "30px",
                    height: matches || bgmatches ? "29px" : "30px",
                  }}
                  alt=""
                />
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: matches || bgmatches ? "24px" : "24px",
                  }}
                  mx={2}
                >
                  Account
                </Typography>
              </Box>
              <Box mt={matches || bgmatches ? 1 : 2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: matches ? "11px" : "16px",
                    textAlign: matches ? "start" : "",
                  }}
                >
                  Created community account
                </Typography>
              </Box>
              <Box
                sx={{ color: "#3CC0A1" }}
                my={2}
                display="flex"
                alignItems="center"
                mt={3}
              >
                <img src={verify} />
                <Typography mx={2}>Created</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: matches || bgmatches ? "2%" : 2,
                borderBottom: "1px solid #9d9ea1",
                borderLeft: "2px solid #3CC0A1",
              }}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={light_twitter}
                  style={
                    {
                      // width: matches || bgmatches ? "29px" : "32px",
                      // height: matches || bgmatches ? "29px" : "32px",
                    }
                  }
                />
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: matches || bgmatches ? "24px" : "24px",
                  }}
                  mx={2}
                >
                  Follows Twitter
                </Typography>
              </Box>
              <Box mt={matches || bgmatches ? 1 : 2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: matches ? "11px" : "16px",
                    textAlign: matches ? "start" : "",
                  }}
                >
                  Follows @SVRNDAO on Twitter
                </Typography>
              </Box>
              <Box
                sx={{ color: "#3CC0A1" }}
                my={2}
                display="flex"
                alignItems="center"
                mt={3}
              >
                <img src={verify} />
                <Typography mx={2}>Verified</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: matches || bgmatches ? "2%" : 2,
                borderBottom: "1px solid #9d9ea1",
                borderLeft: "2px solid #FF493B",
              }}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={wallet}
                  style={
                    {
                      // width: matches || bgmatches ? "29px" : "32px",
                      // height: matches || bgmatches ? "29px" : "32px",
                    }
                  }
                />
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: matches || bgmatches ? "24px" : "24px",
                  }}
                  mx={2}
                >
                  Wallet balance
                </Typography>
              </Box>
              <Box mt={matches || bgmatches ? 1 : 2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: matches ? "11px" : "16px",
                    textAlign: matches ? "start" : "",
                  }}
                >
                  Maintains a minimum of 0.1 ETH in a ETH network wallet.
                </Typography>
              </Box>
              <Box sx={{ color: "#FF493B" }} my={2} display="flex" mt={3}>
                <Typography sx={{ textDecoration: "underline" }}>
                  start verification
                </Typography>
              </Box>
            </Box>
            <Box
              // sx={{
              //   padding: matches || bgmatches ? "2%" : 2,
              // }}
              pt={6}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
                mt={2}
                p={2}
              >
                <Box display="flex" alignItems="center">
                  <img src={polygon} />
                  <Typography
                    sx={{
                      color: DarkMood === true ? "#fff" : "#000",
                      fontSize: matches || bgmatches ? "24px" : "20px",
                    }}
                    mx={2}
                  >
                    @Dividedsign
                  </Typography>
                </Box>
                <img
                  src={seting}
                  style={{
                    filter:
                      DarkMood === true
                        ? ""
                        : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                  }}
                />
              </Box>
            </Box>
          </div>

          <div
            className="col-md-7 col-sm-12 chat-main order-sm-2 mt-3 mt-md-0"
            style={{
              backdropFilter: "blur(15px)",
              padding: "1%",

              borderLeft: "1px solid #9d9ea1",
              backgroundColor:
                DarkMood === true ? "rgba(21, 19, 24, 1)" : "#EBEBEB",
              // openDialouge === true ||
              // openDLTDialouge === true ||
              // openADMINDialouge === true ||
              // openDLTuserDialouge === true
              //   ? "rgba(21, 19, 24, 1)"
              //   : "rgba(21, 19, 24, 1)",
            }}
          >
            <div className="row py-3">
              <div className="col-8">
                <span
                  className="handings"
                  onClick={() => handleEmojiaClick()}
                  style={{
                    color: DarkMood === true ? "#fff" : "#000",
                    fontSize: "24px",
                  }}
                >
                  Sovereign Chat
                </span>
                <span
                  className="mx-3"
                  onClick={() => handleEmojiaClick()}
                  style={{
                    color:
                      DarkMood === true ? "rgba(209, 222, 242, 0.63)" : "#000",
                    fontSize: "12px",
                  }}
                >
                  370 Members
                </span>
                <span
                  className="handings"
                  onClick={() => handleEmojiaClick()}
                  style={{
                    color: DarkMood === true ? "#1BC47D" : "#1BC47D",
                    fontSize: "12px",
                  }}
                >
                  120 Online
                </span>
              </div>

              <div className="col-4 d-flex justify-content-end">
                <div className="mx-2">
                  <FormControl sx={{ border: "1px solid #fff" }}>
                    <InputLabel
                      id="demo-simple-select-helper-label"
                      sx={{
                        color: DarkMood === true ? "#fff" : "#000",
                        position: "absolute",
                        top: "-8px",
                        left: "-5px",
                      }}
                    >
                      <img
                        src={worldicon}
                        style={{
                          filter:
                            DarkMood === true
                              ? ""
                              : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                        }}
                      />
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label=" "
                      MenuProps={{
                        MenuListProps: {
                          sx: {
                            backgroundColor: "#000",
                            color: "#fff",
                          },
                        },
                      }}
                      sx={{
                        backgroundColor:
                          openDialouge === true ||
                          openDLTDialouge === true ||
                          openADMINDialouge === true ||
                          openDLTuserDialouge === true
                            ? "#000"
                            : "",
                        color: DarkMood === true ? "#fff" : "#000",
                        "& .MuiInputBase-input": {
                          // paddingRight: "26px !important",
                          // marginRight: "15px  !important",
                          width: "59px",
                        },
                        "& .MuiSvgIcon-root": {
                          fill: DarkMood === true ? "#fff" : "#000",
                          color: DarkMood === true ? "#fff" : "#000",
                        },
                        // "& .MuiInputBase-root ": {
                        //   marginRight: "15px  !important",
                        // },
                      }}
                      onChange={(e) => setAge(e.target.value)}
                      fullWidth
                      // displayEmpty
                    >
                      {languageOptions.map((item) => {
                        return (
                          <MenuItem
                            sx={{
                              "&:hover": {
                                backgroundColor: "#1D1D1D",
                                borderRadius: "10px",
                              },
                            }}
                            value={item.value}
                            key={item.value}
                          >
                            {item.label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>

                <div
                  className="p-2"
                  style={{
                    backgroundColor: DarkMood === true ? "#000" : "#F4F4F4",
                    // openDialouge === true ||
                    // openDLTDialouge === true ||
                    // openADMINDialouge === true ||
                    // openDLTuserDialouge === true
                    //   ? "#000"
                    //   : "",
                    border: "1px solid #fff",
                  }}
                >
                  <i
                    className="bi bi-info-circle-fill"
                    onClick={handleClickOpen}
                    style={{
                      color: DarkMood === true ? "#fff" : "#000",
                    }}
                  ></i>
                </div>
              </div>
            </div>
            {/* //!Announcement */}
            <div className=" mt-2">
              <div
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: DarkMood === true ? "#28262B" : "#F4F4F4",
                }}
              >
                <select
                  className="form-select form-select-sm "
                  style={{
                    width: "auto",
                    backgroundColor: DarkMood === true ? "#28262B" : "#F4F4F4",
                    color: DarkMood === true ? "#fff" : "#000",
                    border: "none",
                  }}
                  aria-label=".form-select-sm example"
                >
                  <option value="">Announcements </option>
                </select>
              </div>
            </div>
            {/* //*chat simple */}
            <Scrollbar
              style={{ width: "auto", maxHeight: matches ? 200 : 450 }}
            >
              <Dialog
                p={2}
                fullWidth={false}
                fullScreen={false}
                maxWidth={"md"}
                // scroll={'body'||'paper'}
                sx={{
                  "& .MuiPaper-root.MuiDialog-paper": {
                    backgroundColor: "rgba(0, 0, 0, 0.3) !important",
                    backdropFilter: "blur(12px)",
                  },
                  "& .MuiDialog-container": {
                    width: mobileversion ? "109%" : "52% !important",
                    position: "absolute",
                    // backgroundColor: "transparent !important",
                    top: mobileversion ? "410px" : "123px",
                    left: mobileversion ? "-20px" : "552px",
                    height: mobileversion ? "49%" : "100% !important",
                    // "& .MuiPaper-root": {
                    //   width: "100%",
                    //   maxWidth: "466px",
                    // },
                  },
                  //   "& .MuiBackdrop-root": {
                  //     backgroundColor: "transparent !important",
                  //   },
                }}
                open={openDialouge}
                TransitionComponent={Transition}
                // keepMounted
                onClose={handleCloseDialoge}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    flexDirection: "column",
                    color: "#fff",
                  }}
                >
                  Community Guidelines
                  <Box display="flex" justifyContent="center" my={2}>
                    <img src={line} />
                  </Box>
                </DialogTitle>

                <DialogContent>
                  <DialogContentText
                    sx={{
                      // fontWeight: 500,
                      fontSize: "15px",
                      // display: "flex",
                      textAlign: "center",
                      color: "#fff",
                    }}
                    my={3}
                  >
                    Help us keep the community strong. Our community is home for
                    many different people from all walks of life. Please be
                    respectful and courteous of other people at all times.
                  </DialogContentText>

                  <DialogContentText sx={{ backgroundColor: "#3E3B42" }} p={2}>
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        Be respectful to other members of the community
                      </Typography>
                    </Box>
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // p={1}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        No Racial Slurs, Homophobia, Xenophobia
                      </Typography>
                    </Box>{" "}
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // p={1}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        No Unsolicited Advertising
                      </Typography>
                    </Box>{" "}
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // p={1}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        No Trolling for nefarious reasons
                      </Typography>
                    </Box>{" "}
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // p={1}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        Do not post links
                      </Typography>
                    </Box>
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // p={1}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        Foster meaningful and genuine interactions
                      </Typography>
                    </Box>
                    <Box
                      mt={2}
                      display="flex"
                      alignItems={"center"}
                      // p={1}
                      // sx={{
                      //   backgroundColor: "#454444",
                      //   borderRadius: "8px",
                      //   padding: "6px",
                      // }}
                    >
                      <img
                        src={none}
                        style={{ width: "20px", height: "20px" }}
                      />{" "}
                      <Typography
                        ml={3}
                        sx={{
                          // fontWeight: 600,
                          fontSize: "13px",
                          color: "#fff",
                        }}
                      >
                        Do not make other users uncomfortable by sharing NSFW
                        content.
                      </Typography>
                    </Box>
                  </DialogContentText>
                  <Box
                    display="flex"
                    justifyContent="center"
                    my={2}
                    onClick={handleCloseDialoge}
                  >
                    <Box sx={{ border: "1px solid #fff", color: "#fff" }} p={1}>
                      <CloseIcon sx={{ color: "#fff" }} />
                      Close
                    </Box>
                  </Box>
                </DialogContent>
              </Dialog>

              <Box sx={{ width: "auto" }}>
                {chatArray.map((i, index) => {
                  let obj = chatArray.find((obj) => obj.id === i.id);
                  // return <h1 className="text-light">{i.message}</h1>;
                  return (
                    <>
                      {i.username === "server" ? (
                        <>
                          {/* //!SERVER BOX */}
                          <Grid
                            container
                            className={"main-grid"}
                            alignItems="self-end"
                          >
                            <Grid
                              item
                              md={8}
                              xs={9}
                              display="flex"
                              flexDirection={
                                i.status === false ? "row" : "column"
                              }
                              mt={2}
                            >
                              <Box display="flex" alignItems={"center"}>
                                <Box>
                                  <img src={sender} alt="" srcset="" />
                                </Box>
                                <Box>
                                  {i.ref !== null && i.status === true && (
                                    <>
                                      <span
                                        style={{ color: "#0577FD" }}
                                        className="mx-2"
                                      >
                                        {" "}
                                        {i.ref.message}
                                        {/* --- {i.ref.username} */}
                                      </span>

                                      {/* <p> {i.username}</p> */}
                                    </>
                                  )}
                                </Box>
                              </Box>

                              <Box
                                display="flex"
                                flexDirection="column"
                                className="server-text my-3"
                                sx={{
                                  backgroundColor:
                                    DarkMood === true ? "#2F3237" : "#fff",
                                  color: DarkMood === true ? "#fff" : "#000",
                                  borderRadius: "0px 6px 6px 6px",
                                }}
                                p={1}
                                ml={3}
                              >
                                {i.status === true
                                  ? i.message
                                  : "This message has been deleted"}
                                <Box display="flex" justifyContent="end">
                                  {i.status === false ? (
                                    ""
                                  ) : (
                                    <>
                                      {i.count_reaction > 0 && (
                                        <Box
                                          // display="flex"
                                          // justifyContent="end"
                                          sx={{
                                            backgroundColor: "grey",
                                            borderRadius: "15px",
                                            width: "fit-content",
                                            padding: "4px",
                                          }}
                                        >
                                          <img
                                            src={i.reactions}
                                            style={{
                                              width: "20px",
                                              height: "20px",
                                            }}
                                          />
                                          {i.count_reaction > 1 && (
                                            <span style={{ fontSize: "10px" }}>
                                              {i.count_reaction}
                                            </span>
                                          )}
                                        </Box>
                                      )}
                                    </>
                                  )}
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item md={4} xs={3}>
                              {i.status === true && (
                                <Box className="sile-icon" ml={1}>
                                  <Box display={"flex"}>
                                    <Box
                                      display="flex"
                                      flexDirection={"column"}
                                    >
                                      <img
                                        src={
                                          DarkMood === true
                                            ? trashicon
                                            : lightdelete
                                        }
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "18px"
                                              : "24px",
                                          height:
                                            matches || bgmatches
                                              ? "18px"
                                              : "24px",
                                        }}
                                        onClick={() => {
                                          handleClickDLT();
                                        }}
                                      />

                                      {/* //!dialoge for dlt text */}

                                      <Dialog
                                        p={1}
                                        sx={{
                                          "& .MuiPaper-root.MuiDialog-paper": {
                                            backgroundColor:
                                              "transparent !important",

                                            // backdropFilter: "blur(15px)",
                                            boxShadow: "none",
                                          },
                                          "& .MuiDialog-container": {
                                            width: mobileversion
                                              ? "451px"
                                              : "47% !important",
                                            position: "absolute",
                                            backgroundColor:
                                              "#b3b3b314 !important",
                                            backdropFilter: "blur(15px)",
                                            top: mobileversion
                                              ? "440px"
                                              : "164px",
                                            left: mobileversion
                                              ? "12px"
                                              : "585px",
                                            // height: mobileversion ? "41%" : "75% !important",
                                            // borderRadius:"10px",
                                            // "& .MuiPaper-root": {
                                            //   width: "100%",
                                            //   maxWidth: "467px",
                                            // },
                                          },
                                          "& .MuiBackdrop-root": {
                                            // backgroundColor: "transparent !important",
                                            display: "none",
                                          },
                                        }}
                                        open={openDLTDialouge}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleCloseDLT}
                                        aria-describedby="alert-dialog-slide-description"
                                      >
                                        <DialogTitle
                                          sx={{
                                            fontWeight: 600,
                                            fontSize: "24px",
                                            display: "flex",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            flexDirection: "column",
                                            color: "#fff",
                                          }}
                                        >
                                          <Box
                                            display="flex"
                                            justifyContent="center"
                                            my={2}
                                          >
                                            <img src={trashicon} />
                                          </Box>
                                          Are you sure you want to delete this
                                          comment?
                                        </DialogTitle>
                                        <DialogContent>
                                          <DialogContentText
                                            sx={{
                                              fontWeight: 500,
                                              fontSize: "15px",
                                              display: "flex",
                                              justifyContent: "center",
                                              // textAlign: "center",
                                              color: "#000",
                                            }}
                                          >
                                            <Box
                                              className="btnhover"
                                              sx={{
                                                border: "1px solid #fff",

                                                color: "#fff",

                                                // borderRadius: "8px",
                                              }}
                                              p={1}
                                              px={3}
                                              onClick={() => {
                                                let all_data = chatArray;
                                                all_data[index] = {
                                                  ...all_data[index],
                                                  status: false,
                                                };
                                                setchatArray(all_data);

                                                setreRenderedState(
                                                  !reRenderedState
                                                );

                                                handleCloseDLT();
                                              }}
                                            >
                                              Delete
                                            </Box>
                                            <Box
                                              className="btnhover"
                                              sx={{
                                                border: "1px solid #fff",
                                                color: "#fff",
                                                marginLeft: "5%",
                                              }}
                                              p={1}
                                              px={3}
                                              onClick={() => handleCloseDLT()}
                                            >
                                              No
                                            </Box>
                                          </DialogContentText>
                                        </DialogContent>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          my={2}
                                          onClick={handleCloseDLT}
                                        >
                                          <img src={cross1} />
                                        </Box>
                                      </Dialog>
                                      <img
                                        src={replyicon}
                                        className="my-2"
                                        // style={{
                                        //   width:
                                        //     matches || bgmatches
                                        //       ? "19px"
                                        //       : "21px",
                                        //   height:
                                        //     matches || bgmatches
                                        //       ? "19px"
                                        //       : "21px",
                                        // }}
                                        onClick={(e) => {
                                          settextField({
                                            ...textField,
                                            ref: {
                                              message: i.message,
                                              username: i.username,
                                            },
                                          });
                                        }}
                                      />
                                      <img
                                        src={
                                          DarkMood === true
                                            ? Smileicon
                                            : darksmile
                                        }
                                        // style={{
                                        //   width:
                                        //     matches || bgmatches
                                        //       ? "21px"
                                        //       : "27px",
                                        //   height:
                                        //     matches || bgmatches
                                        //       ? "21px"
                                        //       : "27px",
                                        // }}
                                        onClick={() => {
                                          handleOpen();
                                          setCurrentChatIndex(index);
                                        }}
                                      />
                                    </Box>
                                    <Box ml={matches || bgmatches ? 0 : 1}>
                                      <img
                                        src={
                                          DarkMood === true ? none : lightnone
                                        }
                                        style={
                                          {
                                            // width:
                                            //   matches || bgmatches
                                            //     ? "21px"
                                            //     : "27px",
                                            // height:
                                            //   matches || bgmatches
                                            //     ? "21px"
                                            //     : "27px",
                                          }
                                        }
                                        onClick={() => {
                                          handleClickADMIN();
                                        }}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              )}
                            </Grid>
                          </Grid>
                        </>
                      ) : (
                        <>
                          {/* //!USER BOX */}
                          <Grid
                            container
                            display="flex"
                            justifyContent="end"
                            alignItems="self-end"
                            className={"user-grid"}
                          >
                            <Grid
                              item
                              md={2}
                              xs={3}
                              display="flex"
                              justifyContent="end"
                              alignItems={"center"}
                            >
                              {i.status === true && (
                                <Box className="user-icons">
                                  <Box display={"flex"}>
                                    <Box>
                                      <img
                                        src={
                                          DarkMood === true ? none : lightnone
                                        }
                                        // style={{
                                        //   width:
                                        //     matches || bgmatches
                                        //       ? "21px"
                                        //       : "27px",
                                        //   height:
                                        //     matches || bgmatches
                                        //       ? "21px"
                                        //       : "27px",
                                        // }}
                                        onClick={() => {
                                          handleClickADMIN();
                                        }}
                                      />
                                    </Box>
                                    <Box
                                      display="flex"
                                      flexDirection={"column"}
                                    >
                                      <img
                                        src={
                                          DarkMood === true
                                            ? trashicon
                                            : lightdelete
                                        }
                                        // style={{
                                        //   width:
                                        //     matches || bgmatches
                                        //       ? "18px"
                                        //       : "24px",
                                        //   height:
                                        //     matches || bgmatches
                                        //       ? "18px"
                                        //       : "24px",
                                        // }}
                                        onClick={() => {
                                          handleClickDLTuser();
                                        }}
                                      />
                                      <Dialog
                                        p={1}
                                        sx={{
                                          "& .MuiPaper-root.MuiDialog-paper": {
                                            backgroundColor:
                                              "transparent !important",

                                            // backdropFilter: "blur(15px)",
                                            boxShadow: "none",
                                          },
                                          "& .MuiDialog-container": {
                                            width: mobileversion
                                              ? "451px"
                                              : "47% !important",
                                            position: "absolute",
                                            backgroundColor:
                                              "#b3b3b314 !important",
                                            backdropFilter: "blur(15px)",
                                            top: mobileversion
                                              ? "440px"
                                              : "164px",
                                            left: mobileversion
                                              ? "12px"
                                              : "585px",
                                            // height: mobileversion ? "41%" : "75% !important",
                                            // borderRadius:"10px",
                                            // "& .MuiPaper-root": {
                                            //   width: "100%",
                                            //   maxWidth: "467px",
                                            // },
                                          },
                                          "& .MuiBackdrop-root": {
                                            // backgroundColor: "transparent !important",
                                            display: "none",
                                          },
                                        }}
                                        open={openDLTuserDialouge}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleCloseDLT}
                                        aria-describedby="alert-dialog-slide-description"
                                      >
                                        <DialogTitle
                                          sx={{
                                            fontWeight: 600,
                                            fontSize: "24px",
                                            display: "flex",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            flexDirection: "column",
                                            color: "#fff",
                                          }}
                                        >
                                          <Box
                                            display="flex"
                                            justifyContent="center"
                                            my={2}
                                          >
                                            <img src={trashicon} />
                                          </Box>
                                          Are you sure you want to delete this
                                          comment?
                                        </DialogTitle>

                                        <DialogContent>
                                          <DialogContentText
                                            sx={{
                                              fontWeight: 500,
                                              fontSize: "15px",
                                              display: "flex",
                                              justifyContent: "center",
                                              // textAlign: "center",
                                              color: "#000",
                                            }}
                                          >
                                            <Box
                                              className="btnhover"
                                              sx={{
                                                border: "1px solid #fff",

                                                color: "#fff",

                                                // borderRadius: "8px",
                                              }}
                                              p={1}
                                              px={3}
                                              onClick={() => {
                                                let all_data = chatArray;
                                                all_data[index] = {
                                                  ...all_data[index],
                                                  status: false,
                                                };
                                                setchatArray(all_data);
                                                console.log("sdada", all_data);
                                                setreRenderedState(
                                                  !reRenderedState
                                                );
                                                handleCloseDLTuser();
                                              }}
                                            >
                                              Delete
                                            </Box>
                                            <Box
                                              className="btnhover"
                                              sx={{
                                                border: "1px solid #fff",
                                                color: "#fff",
                                                marginLeft: "5%",
                                              }}
                                              p={1}
                                              px={3}
                                              onClick={() =>
                                                handleCloseDLTuser()
                                              }
                                            >
                                              No
                                            </Box>
                                          </DialogContentText>
                                        </DialogContent>
                                        <Box
                                          display="flex"
                                          justifyContent="center"
                                          my={2}
                                          onClick={handleCloseDLTuser}
                                        >
                                          <img src={cross1} />
                                        </Box>
                                      </Dialog>
                                      <img
                                        className="my-1"
                                        src={replyicon}
                                        // style={{
                                        //   width:
                                        //     matches || bgmatches
                                        //       ? "19px"
                                        //       : "21px",
                                        //   height:
                                        //     matches || bgmatches
                                        //       ? "19px"
                                        //       : "21px",
                                        // }}
                                        onClick={(e) => {
                                          settextField({
                                            ...textField,
                                            ref: {
                                              message: i.message,
                                              username: i.username,
                                            },
                                          });
                                        }}
                                      />{" "}
                                      <img
                                        src={
                                          DarkMood === true
                                            ? Smileicon
                                            : darksmile
                                        }
                                        // style={{
                                        //   width:
                                        //     matches || bgmatches
                                        //       ? "21px"
                                        //       : "27px",
                                        //   height:
                                        //     matches || bgmatches
                                        //       ? "21px"
                                        //       : "27px",
                                        // }}
                                        onClick={() => {
                                          handleOpen();
                                          setCurrentChatIndex(index);
                                        }}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              )}
                            </Grid>
                            <Grid
                              item
                              md={10}
                              xs={9}
                              display="flex"
                              flexDirection="column-reverse"
                              alignItems="end"
                            >
                              <Box
                                className="user-text"
                                sx={{
                                  backgroundColor:
                                    DarkMood === true ? "#fff" : "#000",
                                  color: DarkMood === true ? "#000" : "#fff",
                                  borderRadius: "6px 0px 6px 6px",
                                }}
                                p={1}
                                mx={3}
                              >
                                {/* //!reply box  */}

                                <Box
                                  sx={{
                                    color: "grey",
                                  }}
                                >
                                  {i.ref !== null && i.status && (
                                    <>
                                      <span>
                                        {" "}
                                        {i.ref.message}
                                        {/* {i.ref.username} */}
                                      </span>

                                      <p> {i.username}</p>
                                    </>
                                  )}
                                </Box>

                                {i.status === true
                                  ? i.message
                                  : "This message has been deleted"}
                                <Box display="flex" justifyContent="end">
                                  <img src={Doublecheck} />
                                </Box>
                                {i.count_reaction > 0 && (
                                  <Box
                                    display="flex"
                                    alignItems={"center"}
                                    sx={{
                                      backgroundColor: "grey",
                                      borderRadius: "15px",

                                      padding: "4px",
                                    }}
                                  >
                                    <img
                                      src={i.reactions}
                                      style={{ width: "20px", height: "20px" }}
                                    />
                                    {i.count_reaction > 1 && (
                                      <span style={{ fontSize: "10px" }}>
                                        {i.count_reaction}
                                      </span>
                                    )}
                                  </Box>
                                )}
                              </Box>
                              <Box my={1}>
                                <img src={sender} alt="" srcset="" />
                              </Box>
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </>
                  );
                })}

                {/* //!CHAT FOOTER */}

                <Box
                  sx={{
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: DarkMood === true ? "#2F3237" : "#fff",
                    color: DarkMood === true ? "#fff" : "#000",
                    width: "97%",
                    bottom: "1%",
                  }}
                  display="flex"
                  justifyContent={"space-between"}
                  // flexDirection="column"
                  alignItems={"center"}
                >
                  {/* {textField.ref !== null && (
                    <Box className={"reply-box"}>{textField.ref.message}</Box>
                  )} */}

                  <Box
                    // sx={{ backgroundColor: "#000", borderRadius: "10px" }}
                    display="flex"
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1}
                  >
                    <img
                      src={gif}
                      style={{
                        filter:
                          DarkMood === true
                            ? ""
                            : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                      }}
                    />
                    <Box sx={{ backgroundColor: "#000" ,height:"24px",width:"1px"}} ml={2}></Box>
                    <Box
                      ml={matches ? 1 : 2}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <form action="" onSubmit={(e) => handleChatSubmit(e)}>
                        <input
                          className="w-100 p-1"
                          style={{
                            backgroundColor:
                              DarkMood === true ? "#2F3237" : "#fff",
                            color: DarkMood === true ? "#fff" : "#000",
                            border: "none",
                          }}
                          placeholder="Type message"
                          value={textField.textarea}
                          onChange={(e) => {
                            settextField({
                              ...textField,
                              textarea: e.target.value,
                            });
                            // setCurrentMessage(e.target.value);
                          }}
                        />
                      </form>
                    </Box>
                  </Box>

                  <Box
                    className=""
                    onClick={handleChatSubmit}
                    mx={1}
                    // onClick={sendMessage}
                  >
                    <img
                      src={snd}
                      alt=""
                      style={{
                        filter:
                          DarkMood === true
                            ? ""
                            : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Scrollbar>

            {/* //*model for emojis */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <EmojiPicker
                  theme="dark"
                  onEmojiClick={onEmojiClick}
                  autoFocusSearch={false}
                  // emojiStyle={{
                  //   display: emojisToggle === 2 ? "block" : "none",
                  // }}
                  //  emojisToggle === 2 ? "block" : "none",
                />
              </Box>
            </Modal>

            {/* //!DIALOUGE FOR ADMIN */}
            <Dialog
              p={2}
              sx={{
                "& .MuiPaper-root.MuiDialog-paper": {
                  backgroundColor: "transparent !important",

                  // backdropFilter: "blur(15px)",
                  boxShadow: "none",
                },
                "& .MuiDialog-container": {
                  width: mobileversion ? "451px" : "47% !important",
                  position: "absolute",
                  backgroundColor: "#b3b3b314 !important",
                  backdropFilter: "blur(15px)",
                  top: mobileversion ? "440px" : "164px",
                  left: mobileversion ? "12px" : "585px",
                  // height: mobileversion ? "41%" : "75% !important",
                  // borderRadius:"10px",
                  // "& .MuiPaper-root": {
                  //   width: "100%",
                  //   maxWidth: "467px",
                  // },
                },
                "& .MuiBackdrop-root": {
                  // backgroundColor: "transparent !important",
                  display: "none",
                },
              }}
              open={openADMINDialouge}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleCloseADMIN}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle
                sx={{
                  fontWeight: 600,
                  fontSize: "24px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  flexDirection: "column",
                  color: "#fff",
                }}
              >
                <Box display="flex" justifyContent="center" my={2}>
                  <img src={none} />
                </Box>
                Are you sure you want to BAN this user?{" "}
              </DialogTitle>

              <DialogContent>
                <DialogContentText
                  sx={{
                    fontWeight: 450,
                    fontSize: "15px",
                    display: "flex",
                    justifyContent: "center",
                    // textAlign: "center",
                    color: "#000",
                  }}
                >
                  <Box
                    className="btnhover"
                    sx={{
                      border: "1px solid #fff",

                      color: "#fff",

                      // borderRadius: "8px",
                    }}
                    p={1}
                    px={3}
                    onClick={() => handleCloseADMIN()}
                  >
                    Delete
                  </Box>
                  <Box
                    className="btnhover"
                    sx={{
                      border: "1px solid #fff",
                      color: "#fff",
                      marginLeft: "5%",
                    }}
                    p={1}
                    px={3}
                    onClick={() => handleCloseADMIN()}
                  >
                    No
                  </Box>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCommunity;
