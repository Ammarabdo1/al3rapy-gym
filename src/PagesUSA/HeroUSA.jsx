import React, {useEffect} from "react";
import "../Css/Hero.css";

import { Typography, Stack, Grid } from "@mui/material";

import Diversity2Icon from "@mui/icons-material/Diversity2";
import { GiMuscleUp } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
const HeroUSA = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  const ImgCounter = Array(27).fill(null)
  return (
    <div className="heros">
      <Stack
        className="header-heros"
        style={{
          background:
            !props.checkDarkMode &&
            "radial-gradient(circle, #ffffff53, #000000d8)",
        }}
      >
        <div className="text-heros" data-aos='zoom-in' style={{marginLeft:'40px'}}>
          <Typography variant="h6" style={{ color: "gold" }}>
            Al-Arabi Heros
            <GiMuscleUp style={{ fontSize: "1.8rem", marginLeft: "5px" }} />
          </Typography>
          <Typography variant="h2" style={{ color: "white", display:'flex' }}>
          my brothers and I am proud of them<Diversity2Icon style={{fontSize:'5rem', marginLeft:'15px'}} />
          </Typography>
          <Typography variant="h6" style={{ color: " white" }}>
            {" "}
            A coach who cares about you and encourages you will remain an Al-Arabi
          </Typography>
        </div>
        <div className="img-hero">
          <img src="images/GymBg.jpg" alt="" />
        </div>
      </Stack>

      <Stack className="Photos" style={{background:props.checkDarkMode?'#152024':''}}>
        <Grid container className="allImages">
          {
            ImgCounter.map((img ,i)=><Grid lg={3} sm={4} xs={12}><div className="div-hero-img"><img src={`images/TransitionImages/T${i+1}.jpg`} alt="player" /></div></Grid>)
          }
        </Grid>


      </Stack>
    </div>
  );
};

export default HeroUSA;
