import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebook } from "react-icons/fa";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = (props) => {
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
        paddingRight: "140px",
      }}
      className="footer"
    >
      <Grid lg={12} sm={0} xs={0}></Grid>
      <Grid lg={12} sm={12} xs={12} className="img" data-aos="fade-left">
        <img src="images\Al3rapyImages\imgFooter.png" alt="al3rapy" />
      </Grid>
      <Grid lg={4} sm={12} xs={12} className="details" data-aos="fade-left">
        <Typography
          variant="subtitle2"
          style={{ color: props.checkDarkMode && "white" }}
        >
          صالح العربي هو مدرب شخصي بيحب اللاعب وبيعتبرو زي اخوه ورجلتو بيعتبرهم
          عيلته مش لعيبه بتتمرن وقضي الامر ومن حيث الخبره فهو خبره 9 سنين في
          مجال البطولات 5 سنين في مجال التدريب الشخصي وشارك ف اسكندريه 13مره من
        </Typography>

        <Typography
          variant="subtitle2"
          style={{ color: props.checkDarkMode && "white" }}
        >
          ضمنهم 9مراكز اول بفضل الله وبعد كده حصل علي 6بطولات جمهوريه ودخل تجارب
          ابطال عالم وطبعا ده غير البطولات الخاصه اللي حصل فيها علي مراكز متقدمه
        </Typography>

        <Typography
          variant="subtitle2"
          style={{ color: props.checkDarkMode && "white" }}
        >
          واخر بطوله احمد علي الدوليه ومنها بطوله ايرون مان وبطوله حورس الدوليه
          وهكذا لغايه موصلوا ل56بطوله علي مدار 9سنيين
        </Typography>
      </Grid>
      <Grid lg={3} sm={12} xs={12} data-aos="fade-left">
        <div className="pages">
          <Typography
            variant="h5"
            style={{ marginBottom: "20px", color: "#36515c" }}
          >
            ك/ صالح العربى
          </Typography>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              الرئيسية
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              ابطال العربي
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              بطولات العربي
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              عائلة العربي
            </Typography>
          </Link>
          <Link to="/#" style={{ textDecoration: "none" }}>
            <Typography
              className="page"
              variant="subtitle2"
              style={{ color: props.checkDarkMode && "white" }}
            >
              اعرف عني اكتر
            </Typography>
          </Link>
        </div>
      </Grid>
      <Grid lg={3} sm={12} xs={12} data-aos="fade-right">
        <div className="medias">
          <Typography variant="h5">ميديا</Typography>
          <Link className="media">
            <WhatsAppIcon
              style={{ fontSize: "2rem", color: "green", marginLeft: "20px" }}
            />
          </Link>
          <Link className="media">
            <InstagramIcon
              style={{ fontSize: "2rem", color: "#7a1f71", marginLeft: "20px" }}
            />
          </Link>
          <Link className="media">
            <FaFacebook
              style={{ fontSize: "2rem", color: "#4c4cff", marginLeft: "20px" }}
            />
          </Link>
          <Link className="media">
            <YouTubeIcon
              style={{ fontSize: "2rem", color: "red", marginLeft: "20px" }}
            />
          </Link>
        </div>
      </Grid>

      <Grid lg={2} sm={0} xs={0} data-aos="fade-right">
        <div>
          <Typography
            variant="h5"
            style={{ marginBottom: "20px", color: "#36515c",fontFamily:' "Cairo", sans-serif'}}
          >
            تواصل معي
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

export default Footer;
