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

import DangerousIcon from "@mui/icons-material/Dangerous";

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

import { ClipLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = (props) => {
  //! for name email pass
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

  const RefAudio = useRef(null);

  //! check first click
  const [checkFirstClickOnEmailButton, setCheckFirstClickOnEmailButton] =
    useState(false);
  const [checkFirstClickOnNameButton, setCheckFirstClickOnNameButton] =
    useState(false);
  const [checkFirstClickOnLastNameButton, setCheckFirstClickOnLastNameButton] =
    useState(false);

  const [checkFirstClickOnMessage, setCheckFirstClickOnMessage] =
    useState(false);

  const [checkFocusFirstName, setCheckFocusFirstName] = useState(false);

  const [checkFocusEmail, setCheckFocusEmail] = useState(false);

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
  const [checkFocusPhoneNumber, setCheckFocusPhoneNumber] = useState(false);

  const validFirstThreeNumbers = ["012", "011", "010", "015"];

  useEffect(() => {
    const checkValidFirstThreeNumbers = validFirstThreeNumbers.some(
      (threeNumbers) => phoneNumber.startsWith(threeNumbers)
    );
    if (!checkValidFirstThreeNumbers) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber(
        "يجب أن يحتوي في البداية على 012 أو 010 أو 011 أو 015"
      );
    } else if (/[\s]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("لا يمكن أن يحتوي رقم الهاتف على مسافة");
    } else if (/[a-zA-Z]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("لا يمكن أن يحتوي رقم الهاتف على أي أحرف");
    } else if (/[^0-9]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("لا يمكن لرقم الهاتف أن يحتوي على أي رموز");
    } else if (phoneNumber.length != 11) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("يجب أن يحتوي رقم الهاتف على 11 رقمًا");
    } else {
      setCheckUnValidPhoneNumber(false);
      setErrorPhoneNumber("");
    }
  }, [phoneNumber]);

  useEffect(() => {
    setAllHabits([habitGym, habitHelp, habitRead, habitRun, habitWrite]);
  }, [habitRun, habitRead, habitWrite, habitGym, habitHelp]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSend(true);
    setTimeout(() => {
      if (RefAudio.current) {
        RefAudio.current.play();
      }
      setSend(false);
    }, 3000);
  };

  const unValidWords = [
    "احا",
    "أحا",
    "كس امك",
    "كوس امك",
    "ابن المتناكه",
    "ياابن",
    "نجس",
    "وسخ",
    "خرا",
    "خره",
    "زاني",
    "امك",
    "متناك",
    "حمار",
    "غبي",
    "fuc you",
    "kos",
    "omak",
    "yabn",
    "facyou",
    "fac you",
    "yapn",
    "metnaka",
    "matnaka",
    "ميتناكه",
    "نتن",
    "وسخ",
  ];

  useEffect(() => {
    const containsUnValidWord = unValidWords.some((word) =>
      message.includes(word)
    );
    if (containsUnValidWord) {
      setCheckUnValidMessage(true);
    } else {
      setCheckUnValidMessage(false);
    }
  }, [message]);

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
            ازاي اقدر اساعدك
          </Typography>
          <Typography
            variant="h3"
            style={{ color: !props.checkDarkMode && "black" }}
          >
            لو عايز تغير من نفسك وتكون شخص أفضل{" "}
            <span style={{ color: "#d48b50" }}>
              أبعت رسالة لأخوك <AutoAwesomeIcon />
            </span>
          </Typography>
          <Typography variant="h5"> وهرد عليك في خلال 48 ساعة.</Typography>
        </Box>
      </Grid>
      <Grid lg={5.5} sm={12} xs={12}>
        <div className="FormValidate" data-aos="fade-down-right">
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
              {/* first name & phone number */}
              <Stack direction="row" spacing={2}>
                <TextField
                  InputLabelProps={{
                    style: {
                      color: props.checkDarkMode ? "gray" : "black",
                      textAlign: "right",
                      width: "100%",
                      transform: checkFocusFirstName
                        ? "translate(0px, -1px)"
                        : name.length > 0
                        ? "translate(0px, -1px)"
                        : "translate(0px, 15px)",
                      fontSize: checkFocusFirstName
                        ? "7px"
                        : name.length > 0
                        ? "7px"
                        : "1.2rem",

                      transition: "all .3s ease",
                    },
                  }}
                  value={name}
                  type="text"
                  name="name"
                  variant="outlined"
                  label="الاسم بالكامل"
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
                      color: props.checkDarkMode ? "white" : "black",
                      direction: "rtl",
                      textAlign: "right",
                    },
                  }}

                  onChange={(e) => setName(e.target.value)}
                  onClick={() => setCheckFirstClickOnNameButton(true)}
                  onFocus={() => setCheckFocusFirstName(true)}
                  onBlur={() => setCheckFocusFirstName(false)}
                  error={name.length < 3 && checkFirstClickOnNameButton}
                  color={name.length >= 3 ? "success" : "primary"}
                  helperText={
                    name.length < 3 ? (
                      name.length == 0 ? (
                        <div
                          style={{
                            textAlign: "right",
                            color: props.checkDarkMode && "white", marginRight:'15px',
                          }}
                        >
                          مطلوب
                        </div>
                      ) : (
                        <div style={{ textAlign: "right", marginRight:'15px',}}>
                          3 احرف علي الاقل
                        </div>
                      )
                    ) : (
                      <div className="success" style={{ textAlign: "right", marginRight:'15px',}}>
                        <CheckIcon />
                      </div>
                    )
                  }
                />
                <p></p>
                {/* Phone number */}
                <TextField
                  InputLabelProps={{
                    style: {
                      color: props.checkDarkMode ? "gray" : "black",
                      textAlign: "right",
                      width: "100%",
                      transform: checkFocusPhoneNumber
                        ? "translate(0px, -1px)"
                        : phoneNumber.length > 0
                        ? "translate(0px, -1px)"
                        : "translate(0px, 15px)",
                      fontSize: checkFocusPhoneNumber
                        ? "7px"
                        : phoneNumber.length > 0
                        ? "7px"
                        : "1.2rem",

                      transition: "all .3s ease",
                    },
                  }}
                  required
                  value={phoneNumber}
                  type="text"
                  variant="outlined"
                  label="رقم الهاتف"
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
                  onFocus={() => setCheckFocusPhoneNumber(true)}
                  onBlur={() => setCheckFocusPhoneNumber(false)}
                  error={
                    checkUnValidPhoneNumber && checkFirstClickOnPhoneNumber
                  }
                  color={!checkUnValidPhoneNumber ? "success" : "primary"}
                  helperText={
                    checkUnValidPhoneNumber ? (
                      phoneNumber.length == 0 ? (
                        <div style={{ color: props.checkDarkMode && "white", textAlign: 'right',marginRight:'15px' }}>
                          مطلوب
                        </div>
                      ) : (
                        <div
                          style={{
                            textAlign: "right",marginRight:'15px'
                          }}
                        >
                          {errorPhoneNumber}
                        </div>
                      )
                    ) : (
                      <div
                        style={{
                          textAlign: "right",marginRight:'15px'
                        }}
                        className="success"
                      >
                        <CheckIcon />
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
                    textAlign: "right",
                    width: "100%",
                    transform: checkFocusEmail
                      ? "translate(-6px, 0px)"
                      : email.length > 0
                      ? "translate(-6px, 0px)"
                      : "translate(18px, 15px)",
                    fontSize: checkFocusEmail
                      ? "7px"
                      : email.length > 0
                      ? "7px"
                      : "1.2rem",
                    transition: "all .3s ease",
                  },
                }}
                onClick={() => setCheckFirstClickOnEmailButton(true)}
                error={
                  (!email.endsWith("@gmail.com") || email.length < 13) &&
                  checkFirstClickOnEmailButton
                }
                variant="filled"
                name="email"
                type="email"
                label="البريد الالكتروني"
                value={email}
                مطلوب
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setCheckFocusEmail(true)}
                onBlur={() => setCheckFocusEmail(false)}
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
                      <CheckIcon />
                    </div>
                  ) : email == "" ? (
                    <div style={{ color: "white", textAlign: "start" }}>
                      مطلوب
                    </div>
                  ) : email.endsWith("@gmail.com") ? (
                    <div className="flex" style={{ textAlign: "start" }}>
                      3 احرف علي الاقل before_@gmail.com
                    </div>
                  ) : (
                    <div className="flex" style={{ textAlign: "start" }}>
                      Must include_@gmail.com at the end
                    </div>
                  )
                }
              />
              {/* Message */}
              <TextField
                InputLabelProps={{
                  style: {
                    color: "gray",
                    fontSize: "1.2rem",
                  },
                }}
                مطلوب
                value={message}
                multiline
                // maxRows={3}
                minRows={4}
                name="message"
                variant="standard"
                label="رسالتك"
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
                      <div
                        style={{
                          textAlign: "right",
                          color: props.checkDarkMode && "white",
                        }}
                      >
                        مطلوب
                      </div>
                    ) : (
                      <div style={{ textAlign: "right" }}>3 احرف علي الاقل</div>
                    )
                  ) : checkUnValidMessage ? (
                    <div style={{ display: "flex", textAlign: "right" }}>
                      غير مسموح بالافاظ الخارجه
                      <DangerousIcon />
                    </div>
                  ) : (
                    <div className="success" style={{ textAlign: "right" }}>
                      <CheckIcon />
                    </div>
                  )
                }
              />

              {/* Habits ,Image*/}
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
                      عرفنا أكثر عنك
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
                        label="بتصحى بدري 🌟"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={
                              <HourglassEmptyIcon style={{ color: "gray" }} />
                            }
                            checkedIcon={<HourglassFullIcon />}
                            color="secondary"
                            value="بتصحى بدري 🌟"
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
                        label="بتشرب أي حاجة مضرة بالصحة 💔"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={
                              <BookmarkBorderIcon style={{ color: "gray" }} />
                            }
                            checkedIcon={<BookmarkIcon />}
                            color="warning"
                            value="بتشرب أي حاجة مضرة بالصحة 💔"
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
                        label="منتظم في التمرين 🔎"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={<StarBorderIcon style={{ color: "gray" }} />}
                            checkedIcon={<StarIcon />}
                            color="primary"
                            value="منتظم في التمرين 🔎"
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
                        label="بتحب الشدة في التمارين ⚡"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            icon={<Battery0BarIcon style={{ color: "gray" }} />}
                            checkedIcon={<BatteryFullIcon />}
                            color="success"
                            value="بتحب الشدة في التمارين ⚡"
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
                        label="بتاكل أكل صحي ➰"
                        control={
                          <Checkbox
                            className="CheckedIcon"
                            checked={toggleHelp}
                            icon={
                              <FavoriteBorderIcon style={{ color: "gray" }} />
                            }
                            checkedIcon={<FavoriteIcon />}
                            color="error"
                            value="بتاكل أكل صحي ➰"
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
                  checkUnValidPhoneNumber ||
                  message.length < 3 || //! first message
                  !email.includes("@gmail.com") || //! Email
                  checkUnValidMessage //! Message
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
                    ارسال <SendIcon style={{ marginRight: "10px" }} />
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
export default ContactUs;
