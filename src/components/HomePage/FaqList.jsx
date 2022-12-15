import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { useState } from "react";
import "./homePage.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
let initialize = [
  {
    id: "1",
    question: " What is Zenon?",
    answer:
      "We are a full cycle company. Therefore, we are ready to carry out any project from start to finish. Turning to us, you get a range of servic",
  },
  {
    id: "2",
    question: "    How to create an account?",
    answer:
      "We are a full cycle company. Therefore, we are ready to carry out any project from start to finish. Turning to us, you get a range of servic",
  },
  {
    id: "3",
    question: " How can I get my money?",
    answer:
      "We are a full cycle company. Therefore, we are ready to carry out any project from start to finish. Turning to us, you get a range of servic",
  },
  {
    id: "4",
    question: " What is Zenon?",
    answer:
      "We are a full cycle company. Therefore, we are ready to carry out any project from start to finish. Turning to us, you get a range of servic",
  },
];
function FaqList({ DarkMood }) {
  const [visible, setvisible] = useState(2);
  const [items, setItems] = useState(initialize);
  const mobileversion = useMediaQuery("(max-width:600px)");

  const showMoreItems = () => {
    setvisible((prevValue) => prevValue + 1);
  };
  return (
    <>
      <Container
        maxWidth={"md"}
        className={DarkMood === true ? "dark_mood" : "light_mood"}
        // mt={mobileversion ? 2 : 0}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign={"center"}
          my={mobileversion ? 9 : 6}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: DarkMood === true ? "#fff" : "#000",
            }}
          >
            This is all you need to know
          </Typography>
          <Typography
            sx={{
              fontSize: "3rem",
              color: DarkMood === true ? "#fff" : "#000",
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        {/* //LIST  */}
        <Box
          sx={{
            width: "100%",
            borderTop: DarkMood === true ? "1px solid #fff" : "1px solid #000",
          }}
          my={4}
        ></Box>
        {items.slice(0, visible).map((each) => {
          return (
            <Grid
              container
              spacing={1}
              display="flex"
              justifyContent={mobileversion ? "center" : ""}
            >
              <Grid
                item
                md={6}
                display="flex"
                alignItems={"center"}
                flexDirection={mobileversion ? "column" : "row"}
              >
                <Box
                  sx={{
                    border: mobileversion
                      ? "none"
                      : DarkMood === true
                      ? "  1px solid #fff"
                      : "1px solid #000",
                    width: "47px",
                    borderRadius: "55%",
                    padding: "3%",
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                >
                  0{each.id}
                </Box>
                <Box
                  sx={{
                    fontsize: "40px",
                    fontWeight: "500px",
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                  ml={2}
                >
                  {each.question}
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  fontsize: "16px",
                  fontWeight: "500px",
                  color: DarkMood === true ? "#fff" : "#000",
                }}
              >
                {each.answer}
              </Grid>
              <Box
                sx={{
                  width: "100%",
                  borderTop:
                    DarkMood === true ? "1px solid #fff" : "1px solid #000",
                }}
                my={4}
              ></Box>
            </Grid>
          );
        })}

        <Box
          sx={{
            fontSize: "18px",
            color: DarkMood === true ? "#fff" : "#000",
            cursor: "pointer",
          }}
          onClick={showMoreItems}
          display="flex"
          justifyContent={"center"}
        >
          More Here{" "}
          <ChevronRightIcon
            sx={{ color: DarkMood === true ? "#fff" : "#000" }}
          />
        </Box>
      </Container>
      <Box
        sx={{
          borderTop: DarkMood === true ? "1px solid #fff" : "1px solid #000",
          width: "100%",
        }}
        mt={9}
      ></Box>
      <Container
        maxWidth={mobileversion ? "xs" : "md"}
        className={DarkMood === true ? "dark_mood" : "light_mood"}
      >
        <Grid
          container
          maxWidth={"md"}
          spacing={0}
          mt={5}
          display="flex"
          flexDirection={mobileversion ? "column" : "row"}
          alignItems={mobileversion ? "center" : ""}
        >
          <Grid item md={5}>
            <Box
              sx={{
                fontSize: "36px",
                fontWeight: "700",
                color: DarkMood === true ? "#fff" : "#000",
              }}
            >
              {" "}
              Sovereign
            </Box>
          </Grid>
          <Grid
            item
            md={7}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: mobileversion ? "column" : "row",
            }}
          >
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              Manifesto
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              DAO
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              FAQ
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              Mint
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              Release 1
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              Release 2
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: DarkMood === true ? "#fff" : "#000",
              }}
              my={mobileversion ? 3 : 0}
            >
              Swap
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          maxWidth={"md"}
          spacing={0}
          display="flex"
          justifyContent={"space-between"}
          flexDirection={mobileversion ? "column" : "row"}
        >
          <Grid md={2} sm={12}>
            <Box
              sx={{ color: DarkMood === true ? "#fff" : "#000", width: "100%" }}
              mt={9}
            >
              <Divider
                sx={{
                  color: DarkMood === true ? "#fff" : "#000",
                  width: "100%",
                }}
              />
              <Box display="flex" justifyContent={"space-between"} my={2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                >
                  Community
                </Typography>
                <ArrowForwardIcon
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid md={2} sm={12}>
            {" "}
            <Box
              sx={{ color: DarkMood === true ? "#fff" : "#000", width: "100%" }}
              mt={9}
            >
              <Divider
                sx={{
                  color: DarkMood === true ? "#fff" : "#000",
                  width: "100%",
                }}
              />
              <Box display="flex" justifyContent={"space-between"} my={2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                >
                  Twitter
                </Typography>
                <ArrowForwardIcon
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid md={2} sm={12}>
            {" "}
            <Box
              sx={{ color: DarkMood === true ? "#fff" : "#000", width: "100%" }}
              mt={9}
            >
              <Divider
                sx={{
                  color: DarkMood === true ? "#fff" : "#000",
                  width: "100%",
                }}
              />
              <Box display="flex" justifyContent={"space-between"} my={2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                >
                  Account
                </Typography>
                <ArrowForwardIcon
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid md={2} sm={12}>
            {" "}
            <Box
              sx={{ color: DarkMood === true ? "#fff" : "#000", width: "100%" }}
              mt={9}
            >
              <Divider
                sx={{
                  color: DarkMood === true ? "#fff" : "#000",
                  width: "100%",
                }}
              />
              <Box display="flex" justifyContent={"space-between"} my={2}>
                <Typography
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                >
                  About
                </Typography>
                <ArrowForwardIcon
                  sx={{
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default FaqList;
