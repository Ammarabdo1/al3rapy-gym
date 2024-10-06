import { useRef, useState, useEffect } from "react";
import "../Css/ContactUs.css";
import {
  Stack,
  TextField,
  InputAdornment,
  Button,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import SendIcon from "@mui/icons-material/Send";

import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import LoginIcon from "@mui/icons-material/Login";
import PeopleIcon from "@mui/icons-material/People";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import MessageIcon from "@mui/icons-material/Message";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import DangerousIcon from "@mui/icons-material/Dangerous";

import { ClipLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsUSA = (props) => {
  const RefAudio = useRef(null);

  //! for name email
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  //! for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  //! check first click
  const [checkFirstClickOnEmailButton, setCheckFirstClickOnEmailButton] =
    useState(false);
  const [checkFirstClickOnNameButton, setCheckFirstClickOnNameButton] =
    useState(false);

  const [checkFirstClickOnMessage, setCheckFirstClickOnMessage] =
    useState(false);

  //*for Habits
  const [showHabits, setShowHabits] = useState(false);
  const [toggleRun, setToggleRun] = useState(false);
  const [toggleRead, setToggleRead] = useState(false);
  const [toggleWrite, setToggleWrite] = useState(false);
  const [toggleGym, setToggleGym] = useState(false);
  const [toggleHelp, setToggleHelp] = useState(false);

  const [habitRun, setHabitRun] = useState("");
  const [habitRead, setHabitRead] = useState("");
  const [habitWrite, setHabitWrite] = useState("");
  const [habitGym, setHabitGym] = useState("");
  const [habitHelp, setHabitHelp] = useState("");
  const [allHabits, setAllHabits] = useState([]);

  //! for message
  const [checkUnValidMessage, setCheckUnValidMessage] = useState(false);

  //! for submit
  const [send, setSend] = useState(false);

  //!for phoneNumber
  const [checkFirstClickOnPhoneNumber, setCheckFirstClickOnPhoneNumber] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkUnValidPhoneNumber, setCheckUnValidPhoneNumber] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");

  const validFirstThreeNumbers = ["012", "011", "010", "015"];

  useEffect(() => {
    const checkValidFirstThreeNumbers = validFirstThreeNumbers.some(
      (threeNumbers) => phoneNumber.startsWith(threeNumbers)
    );
    if (!checkValidFirstThreeNumbers) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("Must contain at first 012 or 010 or 011 or 015");
    } else if (/[\s]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("Phone number can't contain white space");
    } else if (/[a-zA-Z]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("Phone number can't contain any letters");
    } else if (/[^0-9]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("Phone number can't contain any special characters");
    } else if (phoneNumber.length != 11) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("Phone number must contain 11 numbers");
    } else {
      setCheckUnValidPhoneNumber(false);
      setErrorPhoneNumber("");
    }
  }, [phoneNumber]);

  useEffect(() => {
    setAllHabits([habitGym, habitHelp, habitRead, habitRun, habitWrite]);
  }, [habitRun, habitRead, habitWrite, habitGym, habitHelp]);

  const unValidWords = [
    "احا",
    "احمس",
    "احموس",
    "احمووس",
    "أحا",
    "ياابن",
    "كسامك",
    "كس مك",
    "كسمك",
    "كسمك",
    "كس امك",
    "كسين امك",
    "كسينامك",
    "كسين مك",
    "كوس امك",
    "كوس امك",
    "ابن المتناكه",
    "متناك",
    "نجس",
    "وسخ",
    "خرا",
    "خره",
    "زاني",
    "امك",
    "حمار",
    "غبي",
    "fuc you",
    "kos",
    "omak",
    "yabn",
    "facyou",
    "fac you",
    "fec you",
    "fec you",
    "yapn",
    "metnaka",
    "matnaka",
    "ميتناكه",
    "نتن",
    "وسخ",
  ];

  useEffect(() => {
    const containedUnValidWord = unValidWords.some((word) =>
      message.includes(word)
    );
    if (containedUnValidWord) {
      setCheckUnValidMessage(true);
    } else {
      setCheckUnValidMessage(false);
    }
  }, [message]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPhoneNumber("");
    setEmail("");
    setSend(true);
    setTimeout(() => {
      RefAudio.current.play();
      setSend(false);
    }, 3000);
  };

  return (
    <Grid
      container
      style={{
        minHeight: "700px",
        padding: "50px 0",
        background: props.checkDarkMode ? "#152024" : "white",
      }}
    >
      <Grid
        lg={6.5}
        sm={12}
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box width={600} className="text" data-aos="fade-down-left">
          <Typography
            variant="h6"
            style={{ color: !props.checkDarkMode && "#5d5d5d" }}
          >
            How can I help you
          </Typography>
          <Typography
            variant="h3"
            style={{
              color: !props.checkDarkMode && "black",
              fontSize: "2.3rem",
            }}
          >
            If you want to change yourself and be a better person,{" "}
            <span style={{ color: "#d48b50" }}>
              {" "}
              send a message to your brother <AutoAwesomeIcon />
            </span>
          </Typography>
          <Typography variant="h5">
            and I will respond to you within 48 hours
          </Typography>
        </Box>
      </Grid>
      <Grid lg={5.5} sm={12} xs={12}>
        <div
          className="FormValidate"
          style={{ direction: "ltr", textAlign: "right" }}
          data-aos="fade-down-right"
        >
          <form
            onSubmit={handelSubmit}
            className="form"
            style={{
              boxShadow: !props.checkDarkMode && "3px 1px 10px 3px #a7a7a7",
            }}
          >
            <Stack
              spacing={2}
              direction="column"
              className="mainStackInForm"
              width={500}
            >
              {/* first Name &PhoneNumber */}
              <Stack direction="row" spacing={2}>
                <TextField
                  InputLabelProps={{
                    style: {
                      color: props.checkDarkMode ? "gray" : "black",
                    },
                  }}
                  required
                  value={name}
                  type="text"
                  variant="outlined"
                  label="Full Name"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {name.length < 3 && checkFirstClickOnNameButton ? (
                          <ErrorOutlineIcon style={{ color: "red" }} />
                        ) : (
                          <PersonIcon
                            style={{ color: props.checkDarkMode && "white" }}
                          />
                        )}
                      </InputAdornment>
                    ),
                    style: {
                      color: props.checkDarkMode && "white",
                    },
                  }}
                  onChange={(e) => setName(e.target.value)}
                  onClick={() => setCheckFirstClickOnNameButton(true)}
                  error={name.length < 3 && checkFirstClickOnNameButton}
                  color={name.length >= 3 ? "success" : "primary"}
                  style={{ width: "90%" }}
                  helperText={
                    name.length < 3 ? (
                      name.length == 0 ? (
                        <div style={{ color: props.checkDarkMode && "white", marginLeft:'15px' }}>
                          Required
                        </div>
                      ) : (
                        <div style={{marginLeft:'15px'}}>"at least 3 letters"</div>
                      )
                    ) : (
                      <div className="success" style={{marginLeft:'15px'}}>
                        <CheckIcon />
                        Is valid
                      </div>
                    )
                  }
                />
                {/* Phone number */}
                <TextField
                  InputLabelProps={{
                    style: {
                      color: props.checkDarkMode ? "gray" : "black",
                    },
                  }}
                  required
                  value={phoneNumber}
                  type="text"
                  variant="outlined"
                  label="Phone Number"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {checkUnValidPhoneNumber &&
                        checkFirstClickOnPhoneNumber ? (
                          <ErrorOutlineIcon style={{ color: "red" }} />
                        ) : (
                          <PhoneAndroidIcon
                            style={{ color: props.checkDarkMode && "white" }}
                          />
                        )}
                      </InputAdornment>
                    ),
                    style: {
                      color: props.checkDarkMode && "white",
                    },
                  }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onClick={() => setCheckFirstClickOnPhoneNumber(true)}
                  error={
                    checkUnValidPhoneNumber && checkFirstClickOnPhoneNumber
                  }
                  color={!checkUnValidPhoneNumber ? "success" : "primary"}
                  style={{ width: "90%" }}
                  helperText={
                    checkUnValidPhoneNumber ? (
                      phoneNumber.length == 0 ? (
                        <div style={{ color: props.checkDarkMode && "white", marginLeft:'15px' }}>
                          Required
                        </div>
                      ) : (
                        <div style={{marginLeft:'15px'}}>{errorPhoneNumber}</div>
                      )
                    ) : (
                      <div className="success" style={{marginLeft:'15px'}}>
                        <CheckIcon />
                        Is valid
                      </div>
                    )
                  }
                />
              </Stack>

              {/* Email address */}
              <TextField
                InputLabelProps={{
                  style: {
                    color: props.checkDarkMode ? "gray" : "black",
                  },
                }}
                onClick={() => setCheckFirstClickOnEmailButton(true)}
                error={
                  (!email.endsWith("@gmail.com") || email.length < 13) &&
                  checkFirstClickOnEmailButton
                }
                variant="filled"
                type="email"
                label="Email Address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                color={
                  (!email.endsWith("@gmail.com") || email.length < 13) &&
                  checkFirstClickOnEmailButton
                    ? "primary"
                    : "success"
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {(!email.endsWith("@gmail.com") || email.length < 13) &&
                      checkFirstClickOnEmailButton ? (
                        <ErrorOutlineIcon style={{ color: "red" }} />
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  ),
                  style: {
                    color: props.checkDarkMode && "white",
                  },
                }}
                helperText={
                  email.endsWith("@gmail.com") && email.length >= 13 ? (
                    <div className="success">
                      <CheckIcon /> is valid
                    </div>
                  ) : email == "" ? (
                    <div style={{ color: props.checkDarkMode && "white" }}>
                      Required
                    </div>
                  ) : email.endsWith("@gmail.com") ? (
                    <div className="flex">
                      At least 3 letters before_@gmail.com
                    </div>
                  ) : (
                    "Must include_@gmail.com at the end"
                  )
                }
              />
              {/* Message */}
              <TextField
                InputLabelProps={{
                  style: {
                    color: props.checkDarkMode ? "gray" : "black",
                  },
                }}
                required
                value={message}
                multiline
                // maxRows={3}
                minRows={4}
                variant="standard"
                label="Massage"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {message.length < 3 && checkFirstClickOnMessage ? (
                        <ErrorOutlineIcon style={{ color: "red" }} />
                      ) : (
                        <MessageIcon
                          style={{ color: props.checkDarkMode && "white" }}
                        />
                      )}
                    </InputAdornment>
                  ),
                  style: {
                    color: props.checkDarkMode && "white",
                  },
                }}
                onChange={(e) => setMessage(e.target.value)}
                onClick={() => setCheckFirstClickOnMessage(true)}
                error={
                  (message.length < 3 || checkUnValidMessage) &&
                  checkFirstClickOnMessage
                }
                color={message.length >= 3 ? "success" : "primary"}
                helperText={
                  message.length < 3 ? (
                    message.length == 0 ? (
                      <div style={{ color: props.checkDarkMode && "white" }}>
                        Required
                      </div>
                    ) : (
                      "at least 3 letters"
                    )
                  ) : checkUnValidMessage ? (
                    <div style={{ display: "flex" }}>
                      No foul language allowed
                      <DangerousIcon />
                    </div>
                  ) : (
                    <div className="success">
                      <CheckIcon />
                      Is valid
                    </div>
                  )
                }
              />

              {/* Habits*/}
              <Stack direction="row" spacing={2}>
                {/* Habits */}
                <Box className="habits">
                  <FormControl
                  //   error={
                  //     !toggleRun &&
                  //     !toggleRead &&
                  //     !toggleWrite &&
                  //     !toggleGym &&
                  //     !toggleHelp
                  //   }
                  >
                    <FormLabel
                      onClick={() => setShowHabits(!showHabits)}
                      style={{
                        backgroundColor: showHabits ? "#1278D7" : "",
                        display: "flex",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        color: "white",
                        color:
                          showHabits || props.checkDarkMode
                            ? "white"
                            : !toggleRun &&
                              !toggleRead &&
                              !toggleWrite &&
                              !toggleGym &&
                              !toggleHelp
                            ? ""
                            : "green",
                      }}
                    >
                      Tell us more about you
                      <ArrowDropDownIcon />
                    </FormLabel>
                    <FormGroup
                      style={{ display: showHabits ? "flex" : "none" }}
                    >
                      {/* //! run habit */}
                      <FormControlLabel
                        style={{
                          color: toggleRun
                            ? "#9D27B0"
                            : props.checkDarkMode &&
                              props.checkDarkMode &&
                              "white",
                        }}
                        label="You wake up early 🌟"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={
                              <HourglassEmptyIcon style={{ color: "gray" }} />
                            }
                            checkedIcon={<HourglassFullIcon />}
                            color="secondary"
                            value="You wake up early 🌟"
                            onChange={(e) => {
                              setToggleRun(e.target.checked);
                              if (e.target.checked) {
                                setHabitRun(e.target.value);
                              } else {
                                setHabitRun("");
                              }
                            }}
                          />
                        }
                      />
                      {/* //! read habit */}
                      <FormControlLabel
                        style={{
                          color: toggleRead
                            ? "#EE6B02"
                            : props.checkDarkMode && "white",
                        }}
                        label="You drink anything harmful to your health 💔"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={
                              <BookmarkBorderIcon style={{ color: "gray" }} />
                            }
                            checkedIcon={<BookmarkIcon />}
                            color="warning"
                            value="You drink anything harmful to your health 💔"
                            onChange={(e) => {
                              setToggleRead(e.target.checked);
                              if (e.target.checked) {
                                setHabitRead(e.target.value);
                              } else {
                                setHabitRead("");
                              }
                            }}
                          />
                        }
                      />
                      {/* //! write habit */}
                      <FormControlLabel
                        style={{
                          color: toggleWrite
                            ? "#1278D7"
                            : props.checkDarkMode && "white",
                        }}
                        label="You exercise regularly 🔎"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={<StarBorderIcon style={{ color: "gray" }} />}
                            checkedIcon={<StarIcon />}
                            color="primary"
                            value="You exercise regularly 🔎"
                            onChange={(e) => {
                              setToggleWrite(e.target.checked);
                              if (e.target.checked) {
                                setHabitWrite(e.target.value);
                              } else {
                                setHabitWrite("");
                              }
                            }}
                          />
                        }
                      />
                      {/* //! gym habit */}
                      <FormControlLabel
                        style={{
                          color: toggleGym
                            ? "#307C31"
                            : props.checkDarkMode && "white",
                        }}
                        label="You like to exercise hard ⚡"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={<Battery0BarIcon style={{ color: "gray" }} />}
                            checkedIcon={<BatteryFullIcon />}
                            color="success"
                            value="You like to exercise hard ⚡"
                            onChange={(e) => {
                              setToggleGym(e.target.checked);
                              if (e.target.checked) {
                                setHabitGym(e.target.value);
                              } else {
                                setHabitGym("");
                              }
                            }}
                          />
                        }
                      />
                      {/* //! help habit */}
                      <FormControlLabel
                        style={{
                          color: toggleHelp
                            ? "#D42E2E"
                            : props.checkDarkMode && "white",
                        }}
                        label="You eat healthy food ➰"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            checked={toggleHelp}
                            icon={
                              <FavoriteBorderIcon style={{ color: "gray" }} />
                            }
                            checkedIcon={<FavoriteIcon />}
                            color="error"
                            value="You eat healthy food ➰"
                            onChange={(e) => {
                              setToggleHelp(e.target.checked);
                              if (e.target.checked) {
                                setHabitHelp(e.target.value);
                              } else {
                                setHabitHelp("");
                              }
                            }}
                          />
                        }
                      />
                    </FormGroup>
                    {/* <FormHelperText>
                  {!toggleRun &&
                  !toggleRead &&
                  !toggleWrite &&
                  !toggleGym &&
                  !toggleHelp
                    ? "At least chose 1 habit"
                    : ""}
                </FormHelperText> */}
                  </FormControl>
                </Box>
              </Stack>

              {/* Submit */}
              <Button
                disabled={
                  name.length < 3 || //! first name
                  message.length < 3 || //! message
                  checkUnValidMessage || //! message
                  !email.includes("@gmail.com") || //! Email
                  checkUnValidPhoneNumber
                  // (!toggleRun &&
                  //   !toggleRead &&
                  //   !toggleWrite &&
                  //   !toggleGym &&
                  //   !toggleHelp) || //! Habits
                }
                className="submit"
                variant="contained"
                color="info"
                type="submit"
              >
                {send ? (
                  <div className="flex">
                    Wait.. <ClipLoader color="#3d8b87" size={20} />
                  </div>
                ) : (
                  <div className="flex">
                    send <SendIcon style={{ marginLeft: "10px" }} />
                  </div>
                )}
              </Button>
            </Stack>
          </form>
        </div>
      </Grid>
      <audio ref={RefAudio} src="Audios/SendMessage.mp3"></audio>
    </Grid>
  );
};
export default ContactUsUSA;
