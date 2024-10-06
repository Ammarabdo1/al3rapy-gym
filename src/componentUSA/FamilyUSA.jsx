import React, { useEffect, useRef } from "react";
import { Typography, Stack } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Css/Family.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
const Family = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const muscleImages = Array(9).fill(null);

  return (
    <Stack
      className="Family"
      style={{ background: props.checkDarkMode && "#e5e5e578" }}
    >
      <div className="texts">
        <Typography
          variant="h5"
          style={{ color: props.checkDarkMode ? "#f7a25c" : "gray" }}
          data-aos="flip-left"
        >
        Al-Arabi family
        </Typography>
        <Typography variant="h2" data-aos="flip-right">
        My brothers aren't just players
        </Typography>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        data-aos="fade-up"
      >
        {muscleImages.map((img, i) => (
          <SwiperSlide>
            <img src={`images/muscleImages/Muscle${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Stack>
  );
};

export default Family;
