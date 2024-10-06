import React, {useState, useEffect } from "react";
import { Typography, Stack, Grid, Button } from "@mui/material";
import "../Css/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "100" });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  const [showContent, setShowContent] = useState(false)

  return (
    <Stack className="About">
      <Grid container>
        <Grid lg={1} sm={0} xs={0}></Grid>
        <Grid lg={5.5} sm={12} xs={12} className="Text" data-aos="zoom-in">
          <Typography
            variant="h2"
            style={{ fontSize: "3rem" }}
            className="animate__animated"
          >
            A story of struggle
          </Typography>
          <Typography variant="subtitle2">
            let's begin. Come on, let me take you with me on my humble
            journey... Let's go ... My beginnings were like any of us. I was
            very thin and the clothes didn't fit him and the appearance wasn't
            good at all, especially if you were tall in particular, because you
            would appear very thin And here I had a decision that I had to join
            a gym and change myself. It was a difficult decision, but You might
            think it's easy, but let me tell you what I faced. Look You stop and
            you're on your way or whatever decision you make, I know that you
            will face Many obstacles..The problems I faced when I decided to
            join the gym, of course, the first thing Is people making fun of it,
            and that alone makes you stay at home
          </Typography>
          <Typography variant="subtitle2">
            All your life, but the opposite, I took it as my biggest motivation,
            and I will always tell you to always keep your motivation negative
            and pay more attention to the positive motivation, so that no matter
            what the negative motivation is, it does not bother you and affect
            you while you are on your way. I always believe in the saying...the
            absence of support must be your biggest motivation... Day after day,
            month after month, and the world began to change with me and my body
            began to develop, thank God and thanks to God, my thoughts and goals
            began to develop, and instead of me going in to gain weight, the
            matter increased with me and I decided to go in<Button style={{color:'#3786da', display:showContent&&'none'}} onClick={()=>setShowContent(true)}>... Read more</Button> 
          </Typography>
          <Typography variant="subtitle2" style={{display:!showContent&&'none'}}>
            I participate in championships, and thank God I participated in the
            first Beheira Championship and got third place among more than 17
            players. It was the most important championship in my life. It was
            my first step in the world of championships. After that,
            championship after championship. Thank God, I participated in
            Alexandria 13 times, including 9 first places, thanks to God. After
            that, I got 6 Republic Championships. I entered the world champions
            trials, and of course, this is in addition to the private
            championships in which I got advanced places. The last was the Ahmed
            Ali International Championship, including the Iron Man Championship,
            the Horus International Championship, and so on until I reached 56
            championships over the course of 9 years.
          </Typography>
          <Typography variant="subtitle2" style={{display:!showContent&&'none'}}>
            And I started it from the bottom and I will continue, God willing,
            until I achieve my dream. Of course, I worked in the field of
            training. I have more than 5 years of experience in the field and
            intensive study of everything related to the game, whether nutrition
            or training. Thank God, I have made many transformations from the
            bottom. Thanks to God and God willing, we will continue. My advice
            to you is that the road is not easy. Don't stop. Don't give up.
            Don't despair just because something happened and prevented you from
            achieving your goal. Life is not fair and it will never be fair
            because it is a world in the first and last. You must strive. You
            must move from your place. Nothing is easy. You can... You are a
            hero.<Button style={{color:'#3786da',}} onClick={()=>setShowContent(false)}>... limited content</Button>
          </Typography>
          <Button style={{ color: "#d48b50" }} variant="text">
            More details
          </Button>
        </Grid>
        <Grid lg={0.5} sm={0} xs={0}></Grid>
        <Grid lg={5} sm={12}>
          <Typography variant="div" className="Img" data-aos="zoom-in">
            <img src="images\Al3rapyImages\Al3rapy7.jpg" alt="" />
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default About;
