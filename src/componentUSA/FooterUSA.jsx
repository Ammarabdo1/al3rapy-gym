import React, { useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebook } from "react-icons/fa";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
const FooterUSA = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);
  return (
    <Grid
      container
      style={{
        backgroundColor: props.checkDarkMode ? "#152024" : "#e0e0e0",
        marginRight: "20px",
        padding: "0 0 100px 100px",
      }}
      className="footer"
    >
      <Grid lg={12} sm={0} xs={0}></Grid>
      <Grid lg={12} sm={12} xs={12} className="img" data-aos="fade-up">
        <img src="images\Al3rapyImages\imgFooter.png" alt="al3rapy" />
      </Grid>
      <Grid lg={4} sm={12} xs={12} className="details" data-aos="fade-up" style={{}}>
        <Typography
          variant="subtitle2"
          style={{ color: props.checkDarkMode && "white", width:'400px'}}
        >
          Saleh Al-Arabi is a personal trainer who loves the players and
          considers them as his brother and his man. His family is not his
          players. He trains and finishes the job. In terms of experience, he
          has 9 years of experience in the field of championships, 5 years in
          the field of personal training, and participated in Alexandria 13
          times.
        </Typography>

        <Typography
          variant="subtitle2"
          style={{ color: props.checkDarkMode && "white", width:'400px' }}
        >
          Among them, he won 9 first places, thanks to God. After that, he won 6
          national championships and entered the trials of world champions. Of
          course, this is in addition to the special championships in which he
          won advanced positions.
        </Typography>

        <Typography
          variant="subtitle2"
          style={{ color: props.checkDarkMode && "white", width:'400px' }}
        >
          And the last Ahmed Ali international championship, including the Iron
          Man Championship and the Horus International Championship, and so on
          until they reached 56 championships over the course of 9 years
        </Typography>
      </Grid>
      <Grid lg={3} sm={12} xs={12} data-aos="fade-up">
        <div className="pages">
          <Typography
            variant="h5"
            style={{ marginBottom: "20px", color: "#36515c" }}
          >
            Coach/ Saleh Al Arabi
          </Typography>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              Home
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              Al-Arabi heros
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              Al-Arabi Championships
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              Al-Arabi family
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              About us
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              Send Message
            </Typography>
          </Link>
        </div>
      </Grid>
      <Grid lg={3} sm={12} xs={12} data-aos="fade-up">
        <div className="medias">
          <Typography variant="h5">Media</Typography>
          <Link className="media">
            <WhatsAppIcon
              style={{ fontSize: "2rem", color: "green", marginRight: "20px" }}
            />
          </Link>
          <Link className="media">
            <InstagramIcon
              style={{
                fontSize: "2rem",
                color: "#7a1f71",
                marginRight: "20px",
              }}
            />
          </Link>
          <Link className="media">
            <FaFacebook
              style={{
                fontSize: "2rem",
                color: "#4c4cff",
                marginRight: "20px",
              }}
            />
          </Link>
          <Link className="media">
            <YouTubeIcon
              style={{ fontSize: "2rem", color: "red", marginRight: "20px" }}
            />
          </Link>
        </div>
      </Grid>

      <Grid lg={2} sm={0} xs={0} data-aos="fade-up">
        <div>
          <Typography
            variant="h5"
            style={{ marginBottom: "20px", color: "#36515c" }}
          >
            Contact us
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: props.checkDarkMode && "white" }}
          >
            gmail.com@
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default FooterUSA;
