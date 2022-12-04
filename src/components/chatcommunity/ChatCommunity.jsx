import React, { useState } from "react";
import "./chatcommunity.css";
import { Scrollbar } from "react-scrollbars-custom";
import Tickicon from "../../assets/Icons/Rectangle.png";
import sender from "../../assets/Hexagons/Sender-pic.png";
import sendicon from "../../assets/chatcommunity/send.png";
import Smileicon from "../../assets/chatcommunity/grammerly.png";
import crossicon from "../../assets/chatcommunity/crossicon.png";
import gif from "../../assets/chatcommunity/gif.png";
import replyicon from "../../assets/chatcommunity/reply.png";
import trashicon from "../../assets/chatcommunity/trash.png";
import adminicon from "../../assets/chatcommunity/admin.png";
import worldicon from "../../assets/chatcommunity/worldwide 1.png";
import crossiconlist from "../../assets/chatcommunity/cross.png";
import cross1 from "../../assets/chatcommunity/cross1.png";
import Doublecheck from "../../assets/chatcommunity/Doublecheck.png";
import EmojiPicker from "emoji-picker-react";
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
} from "@mui/material";

import {
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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : "rgba(29, 29, 29, 0.25)",
  ...theme.typography.body2,

  border: "2px solid gray",
  backdropFilter: "blur(15px)",
  borderRadius: "0.6rem",
}));
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

function ChatCommunity() {
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
    <div>
      <div className={matches || bgmatches ? "container-md" : "container-sm"}>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="col-md-5 col-sm-12 order-sm-1">
            <Stack spacing={matches ? 2 : 2}>
              <Item sx={{ padding: matches || bgmatches ? "2%" : 3 }}>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: matches || bgmatches ? "24px" : "32px",
                    }}
                  >
                    Account
                  </Typography>
                  <img
                    className="tick-container"
                    src={Tickicon}
                    style={{
                      width: matches || bgmatches ? "29px" : "32px",
                      height: matches || bgmatches ? "29px" : "32px",
                    }}
                    alt=""
                  />
                </Box>
                <Box display="flex" mt={matches || bgmatches ? 1 : 2}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: matches ? "11px" : "20px",
                      textAlign: matches ? "start" : "",
                    }}
                  >
                    Created community account
                  </Typography>
                </Box>
              </Item>
              <Item sx={{ padding: matches || bgmatches ? "2%" : 3 }}>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: matches || bgmatches ? "21px" : "32px",
                      textAlign: matches || bgmatches ? "start" : "",
                    }}
                  >
                    Follows Twitter Account
                  </Typography>
                  <img
                    className="tick-container"
                    src={Tickicon}
                    style={{
                      width: matches || bgmatches ? "29px" : "32px",
                      height: matches || bgmatches ? "29px" : "32px",
                    }}
                    alt="Unavailable"
                  />
                </Box>
                <Box
                  display="flex"
                  mt={matches || bgmatches ? 1 : 3}
                  justifyContent="space-between"
                  alignItems={"end"}
                >
                  <Typography
                    sx={{
                      color: "#fff",

                      fontSize: matches ? "11px" : "20px",
                      textAlign: matches || bgmatches ? "start" : "",
                    }}
                  >
                    Follows @SVRNDAO on Twitter
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#34C759",
                      fontSize: matches ? "10px" : "16px",
                      padding: "1% 5% 1% 5%;",
                    }}
                  >
                    VERIFIED
                  </Button>
                </Box>
              </Item>
              <Item sx={{ padding: matches || bgmatches ? "2%" : 3 }}>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: matches || bgmatches ? "21px" : "32px",
                      textAlign: matches || bgmatches ? "start" : "",
                    }}
                  >
                    Wallet Balance
                  </Typography>
                  <img
                    className="tick-container"
                    src={crossicon}
                    style={{
                      width: matches || bgmatches ? "29px" : "32px",
                      height: matches || bgmatches ? "29px" : "32px",
                    }}
                    alt="Unavailable"
                  />
                </Box>
                <Box
                  display="flex"
                  mt={matches || bgmatches ? 1 : 3}
                  justifyContent="space-between"
                  textAlign={"start"}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: matches ? "11px" : "20px",
                      textAlign: matches ? "start" : "",
                    }}
                  >
                    Maintains a minimum of 0.1
                    {matches || bgmatches ? "" : <br />} ETH in a ETH network
                    wallet.
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#FF493B",
                      fontSize: matches ? "10px" : "16px",
                      padding: "1% 7% 1% 7%;",
                    }}
                  >
                    VERIFY
                  </Button>
                </Box>
              </Item>
            </Stack>
          </div>

          <div
            className="col-md-5 col-sm-12 chat-main order-sm-2 mt-3 mt-md-0"
            style={{
              backdropFilter: "blur(15px)",
              padding: "1%",
              borderRadius: "0.6rem",
              backgroundColor:
                openDialouge === true ||
                openDLTDialouge === true ||
                openADMINDialouge === true ||
                openDLTuserDialouge === true
                  ? "#B3B3B3"
                  : "rgba(29, 29, 29, 0.25)",
            }}
          >
            <div className="row">
              <div className="col-7">
                <h5 className="handings" onClick={() => handleEmojiaClick()}>
                  Community Chat{" "}
                </h5>
                <div>
                  <span className="handings">1 000 Members</span>
                  <span style={{ color: "#000", marginLeft: "2%" }}>|</span>
                  <span className="handings" style={{ marginLeft: "1%" }}>
                    500 Online
                  </span>
                </div>
              </div>
              <div className="col-5 side-info">
                <div>
                  <FormControl>
                    <InputLabel
                      id="demo-simple-select-helper-label"
                      sx={{
                        color: "#fff",
                        position: "absolute",
                        top: "-8px",
                        left: "-5px",
                      }}
                    >
                      <img src={worldicon} />
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
                        color: "#fff",
                        "& .MuiInputBase-input": {
                          paddingRight: "26px !important",
                          marginRight: "15px  !important",
                          width: "59px",
                        },
                        "& .MuiSvgIcon-root": {
                          fill: "#fff !important",
                          color: "#fff !important",
                        },
                        "& .MuiInputBase-root ": {
                          marginRight: "15px  !important",
                        },
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
                <div>
                  <div
                    className="icon-div"
                    style={{
                      backgroundColor:
                        openDialouge === true ||
                        openDLTDialouge === true ||
                        openADMINDialouge === true ||
                        openDLTuserDialouge === true
                          ? "#000"
                          : "",
                    }}
                  >
                    <i
                      className="bi bi-info-circle-fill"
                      onClick={handleClickOpen}
                      style={{
                        color: "#fff",
                      }}
                    ></i>

                    <Dialog
                      p={2}
                      sx={{
                        "& .MuiPaper-root.MuiDialog-paper": {
                          backgroundColor: "#b3b3b314 !important",
                          backdropFilter: "blur(15px)",
                        },
                        "& .MuiDialog-container": {
                          width: mobileversion ? "109%" : "39% !important",
                          position: "absolute",
                          backgroundColor: "transparent !important",
                          top: mobileversion ? "410px" : "113px",
                          left: mobileversion ? "-20px" : "726px",
                          height: mobileversion ? "49%" : "85% !important",
                          "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "466px",
                          },
                        },
                        "& .MuiBackdrop-root": {
                          backgroundColor: "transparent !important",
                        },
                      }}
                      open={openDialouge}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleCloseDialoge}
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 600,
                          fontSize: "24px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Community Guidelines
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          sx={{
                            // fontWeight: 500,
                            fontSize: "15px",
                            // display: "flex",
                            textAlign: "center",
                            color: "#000",
                          }}
                        >
                          Help us keep the community strong. Our community is
                          home for many different people from all walks of life.
                          Please be respectful and courteous of other people at
                          all times.
                        </DialogContentText>
                        <Box>
                          <DialogContentText>
                            <Box
                              mt={2}
                              display="flex"
                              alignItems={"center"}
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                              sx={{
                                backgroundColor: "#454444",
                                borderRadius: "8px",
                                padding: "6px",
                              }}
                            >
                              <img
                                src={crossiconlist}
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
                                Do not make other users uncomfortable by sharing
                                NSFW content.
                              </Typography>
                            </Box>
                          </DialogContentText>
                        </Box>
                      </DialogContent>
                      <Box
                        display="flex"
                        justifyContent="center"
                        my={2}
                        onClick={handleCloseDialoge}
                      >
                        <img src={cross1} />
                      </Box>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
            {/* //!Announcement */}
            <div className="row mt-2">
              <div className="announcement">
                <select
                  className="form-select form-select-sm mycontrol-announce"
                  style={{ width: "auto" }}
                  aria-label=".form-select-sm example"
                >
                  <option selected>Announcements </option>
                  <option value={1}>One</option>
                </select>
              </div>
            </div>
            {/* //*chat simple */}
            <Scrollbar
              style={{ width: "auto", maxHeight: matches ? 200 : 450 }}
            >
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
                              mt={2}
                              // sx={{
                              //   // justifyContent: "space-evenly",
                              //   alignItems: "end",
                              // }}
                            >
                              <Box>
                                <img src={sender} alt="" srcset="" />
                              </Box>
                              <Box
                                display="flex"
                                alignSelf={"flex-start"}
                                flexDirection="column"
                                className="server-text"
                                // sx={{
                                //   backgroundColor: "#000",
                                //   color: "#fff",
                                //   borderRadius: "8px 8px 8px 0px",
                                // }}
                                p={1}
                                ml={2}
                              >
                                <Box
                                  sx={{
                                    color: "grey",
                                    borderBottom: "1px solid #000",
                                  }}
                                >
                                  {i.ref !== null && i.status === true && (
                                    <>
                                      <span>
                                        {" "}
                                        {i.ref.message}
                                        {/* --- {i.ref.username} */}
                                      </span>

                                      {/* <p> {i.username}</p> */}
                                    </>
                                  )}
                                </Box>

                                {i.status === true
                                  ? i.message
                                  : "This message has been deleted"}

                                {i.count_reaction > 0 && (
                                  <Box
                                    display="flex"
                                    sx={{
                                      backgroundColor: "grey",
                                      borderRadius: "15px",
                                      width: "24%",
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
                                        src={trashicon}
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
                                              : "466px !important",
                                            position: "absolute",
                                            backgroundColor:
                                              "#b3b3b314 !important",
                                            backdropFilter: "blur(15px)",
                                            top: mobileversion
                                              ? "440px"
                                              : "140px",
                                            left: mobileversion
                                              ? "12px"
                                              : "759px",

                                            height: mobileversion
                                              ? "41%"
                                              : "75% !important",
                                            // borderRadius:"10px",
                                            "& .MuiPaper-root": {
                                              width: "100%",
                                              maxWidth: "467px",
                                            },
                                          },
                                          "& .MuiBackdrop-root": {
                                            backgroundColor:
                                              "transparent !important",
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
                                          }}
                                        >
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
                                            <Button
                                              size="small"
                                              sx={{
                                                backgroundColor: "#454444",
                                                color: "#fff",
                                                padding: "2%",
                                                borderRadius: "8px",
                                              }}
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
                                              Yes
                                            </Button>
                                            <Button
                                              size="small"
                                              sx={{
                                                backgroundColor: "#454444",
                                                color: "#fff",
                                                marginLeft: "5%",
                                                padding: "2%",
                                                borderRadius: "8px",
                                              }}
                                              onClick={() => handleCloseDLT()}
                                            >
                                              No
                                            </Button>
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
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "19px"
                                              : "21px",
                                          height:
                                            matches || bgmatches
                                              ? "19px"
                                              : "21px",
                                        }}
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
                                        src={Smileicon}
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                          height:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                        }}
                                        onClick={() => {
                                          handleOpen();
                                          setCurrentChatIndex(index);
                                        }}
                                      />
                                    </Box>
                                    <Box ml={matches || bgmatches ? 0 : 1}>
                                      <img
                                        src={adminicon}
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                          height:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                        }}
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
                                        src={adminicon}
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                          height:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                        }}
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
                                        src={trashicon}
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
                                              : "466px !important",
                                            position: "absolute",
                                            backgroundColor:
                                              "#b3b3b314 !important",
                                            backdropFilter: "blur(15px)",
                                            top: mobileversion
                                              ? "440px"
                                              : "140px",
                                            left: mobileversion
                                              ? "12px"
                                              : "759px",
                                            height: mobileversion
                                              ? "41%"
                                              : "75% !important",
                                            // borderRadius:"10px",
                                            "& .MuiPaper-root": {
                                              width: "100%",
                                              maxWidth: "467px",
                                            },
                                          },
                                          "& .MuiBackdrop-root": {
                                            backgroundColor:
                                              "transparent !important",
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
                                          }}
                                        >
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
                                            <Button
                                              size="small"
                                              sx={{
                                                backgroundColor: "#454444",
                                                color: "#fff",
                                                padding: "2%",
                                                borderRadius: "8px",
                                              }}
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
                                              Yes
                                            </Button>
                                            <Button
                                              size="small"
                                              sx={{
                                                backgroundColor: "#454444",
                                                color: "#fff",
                                                marginLeft: "5%",
                                                padding: "2%",
                                                borderRadius: "8px",
                                              }}
                                              onClick={() =>
                                                handleCloseDLTuser()
                                              }
                                            >
                                              No
                                            </Button>
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
                                        src={replyicon}
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "19px"
                                              : "21px",
                                          height:
                                            matches || bgmatches
                                              ? "19px"
                                              : "21px",
                                        }}
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
                                        src={Smileicon}
                                        style={{
                                          width:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                          height:
                                            matches || bgmatches
                                              ? "21px"
                                              : "27px",
                                        }}
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
                              mt={2}
                              justifyContent="end"
                            >
                              <Box className="user-text" p={1} mr={2}>
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
                              <Box>
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

                <Box sx={{ position: "fixed", bottom: 0 }} display="flex">
                  {textField.ref !== null && (
                    <Box className={"reply-box"}>{textField.ref.message}</Box>
                  )}

                  <Grid container>
                    <Grid item md={2} xs={2}>
                      <Box
                        sx={{ backgroundColor: "#000", borderRadius: "10px" }}
                        display="flex"
                        justifyContent={"center"}
                        alignItems={"center"}
                        p={1}
                      >
                        <img src={gif} />
                      </Box>
                    </Grid>

                    <Grid item md={10} xs={10}>
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
                            className="input-chat"
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
                        <Box
                          className="snder-btn"
                          onClick={handleChatSubmit}
                          // onClick={sendMessage}
                        >
                          <img src={sendicon} alt="" />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
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
                  width: mobileversion ? "451px" : "466px !important",
                  position: "absolute",
                  backgroundColor: "#b3b3b314 !important",
                  backdropFilter: "blur(15px)",
                  top: mobileversion ? "440px" : "140px",
                  left: mobileversion ? "12px" : "759px",
                  height: mobileversion ? "41%" : "75% !important",
                  // borderRadius:"10px",
                  "& .MuiPaper-root": {
                    width: "100%",
                    maxWidth: "467px",
                  },
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
                }}
              >
                Are you sure you want to BAN this user?{" "}
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
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#454444",
                      color: "#fff",
                      padding: "2%",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleCloseADMIN()}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#454444",
                      color: "#fff",
                      marginLeft: "5%",
                      padding: "2%",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleCloseADMIN()}
                  >
                    No
                  </Button>
                </DialogContentText>
              </DialogContent>
              <Box
                display="flex"
                justifyContent="center"
                my={2}
                onClick={handleCloseADMIN}
              >
                <img src={cross1} />
              </Box>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCommunity;
