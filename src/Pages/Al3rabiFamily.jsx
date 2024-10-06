import React, {useEffect} from "react";
import "../Css/Hero.css";

import { Typography, Stack, Grid } from "@mui/material";

import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AOS from "aos";
import "aos/dist/aos.css";

const Al3rapyFamily = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  const ImgCounter = Array(20).fill(null)
  return (
    <div className="heros">
      <Stack
        className="header-heros"
        style={{
          background:
            !props.checkDarkMode ?
            "radial-gradient(circle, #ffffff53, #000000d8)":'radial-gradient(circle, #8d5e2976, #152024)',
        }}
      >
        <div className="text-heros" data-aos='zoom-in'>
          <Typography variant="h6" style={{ color: "gold" }}>
          عائلة العربي
            <Diversity1Icon style={{ fontSize: "1.8rem", marginRight: "5px" }} />
          </Typography>
          <Typography variant="h2" style={{ color: "white", display:'flex' }}>
            إخواتي وبفتخر بيهم <Diversity2Icon style={{fontSize:'5rem', marginRight:'15px'}} />
          </Typography>
          <Typography variant="h6" style={{ color: " white" }}>
            علاقتي باللعيبه صحاب مش مدرب وخلاص
          </Typography>
        </div>
        <div className="img-hero">
          <img src="images/Al3rapyFamily/0)Bgimage.jpg" alt="Bgimage" />
        </div>
      </Stack>

      <Stack className="Photos" style={{background:props.checkDarkMode?'#152024':''}}>
        <Grid container className="allImages">
          {
            ImgCounter.map((img ,i)=><Grid lg={3} sm={4} xs={12}><div className="div-hero-img"><img src={`images/Al3rapyFamily/F${i+1}.jpg`} alt="family" /></div></Grid>)
          }
        </Grid>


      </Stack>
    </div>
  );
};

export default Al3rapyFamily;
