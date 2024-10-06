import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Css/Whos.css";

import AOS from "aos";
import "aos/dist/aos.css";

const WhosAl3rapy = (props) => {
  const Images = Array(19).fill(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  return (
    <Stack
      className="All"
      style={{ backgroundColor: props.checkDarkMode ? "#152024" : "white" }}
    >
      <Typography variant="h6" data-aos="flip-left">
        Al-Arabi heros{" "}
      </Typography>
      <Typography
        variant="h2"
        style={{
          color: props.checkDarkMode ? "white" : "black",
          fontSize: "3rem",
        }}
        data-aos="flip-right"
      >
        Take up the challenge and join your brothers
      </Typography>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
        data-aos="fade-up"
        style={{boxShadow:props.checkDarkMode?'0 0 10px 5px #e5e5e578':'0 0 10px 5px #00000078'}}

      >
        {Images.map((img, i) => (
          <SwiperSlide className="swiper-slide">
            <img src={`images/FrontImages/FrontShow${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default WhosAl3rapy;
