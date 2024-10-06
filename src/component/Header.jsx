import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Stack,
  Button,
  //   FormControlLabel,
  //   Switch,
  Typography,
  //   FormGroup,
  Rating,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import EditNoteIcon from "@mui/icons-material/EditNote";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BoltIcon from "@mui/icons-material/Bolt";

import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import "../Css/Header.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.play();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  const [checkCloseVideo, setCheckCloseVideo] = useState(false);
  const [checkShowTitle, setCheckShowTitle] = useState(false);
  return (
    <Stack
      className="header"
      style={{
        backgroundColor: props.checkDarkMode ? checkCloseVideo?'#152024':"#152024d6" : "#15202496",
      }}
    >
      <Button
        style={{
          position: "absolute",
          zIndex: "1000",
          top: "20px",
          right: "20px",
        }}
        onMouseOver={()=>setCheckShowTitle(true)}
        onMouseLeave={()=>setCheckShowTitle(false)}
        onClick={()=>setCheckCloseVideo(!checkCloseVideo)}
      >
        {checkCloseVideo?<PlayArrowIcon data-aos="zoom-in-left" data-aos-duration="300" style={{ color: "white", fontSize: "2rem" }} />:<CloseIcon data-aos="zoom-in-right" data-aos-duration="300"  style={{ color: "red", fontSize: "2rem" }} />}
      </Button>
      <span
        style={{
          position: "absolute",
          zIndex: "999",
          top: "60px",
          right: "5px",
          color: "white",
          backgroundColor: "gray",
          padding: "5px 10px",
          borderRadius:'15px',
          display: checkShowTitle?"flex":'none',
        }}
        data-aos="zoom-in"
      >
        {checkCloseVideo?'Play Video':'close Video'}
      </span>
      <video className="video" ref={ref} muted autoplay loop style={{display:checkCloseVideo?'none':'flex'}}>
        <source src="videos/Header.mp4" type="video/mp4" />
      </video>
      <Stack className="MainText">
        <Typography variant="h3" data-aos="zoom-in">
          انضم للفريق
        </Typography>
        <Typography variant="h2" data-aos="zoom-in">
          اخوك صالح العربى
          <BoltIcon style={{ fontSize: "2.7rem", color: "orange" }} />
        </Typography>
        <Rating
          style={{ direction: "ltr", marginBottom: "20px" }}
          icon={<FavoriteIcon color="error" />}
          emptyIcon={<FavoriteBorderIcon color="warning" />}
          data-aos="flip-left"
        />
        <Box>
          <Button
            style={{ background: "#d48b50" }}
            variant="contained"
            data-aos="fade-left"
          >
            <FitnessCenterIcon /> انضم لاخواتك
          </Button>
          <Button
            style={{ color: "white", marginRight: "15px" }}
            color="warning"
            variant="outlined"
            data-aos="fade-right"
          >
            ابطال العربي
          </Button>
        </Box>
      </Stack>
      <Stack className="ByNow">
        <Button
          style={{ backgroundColor: "#d48b50" }}
          className="Button"
          variant="contained"
          data-aos="fade-right"
        >
          شوف انجزات اخوك <EditNoteIcon style={{ marginRight: "5px" }} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
