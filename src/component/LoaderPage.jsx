import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { BounceLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

const LoaderPage = () => {
  const [color, setColor] = useState("#c0c0c084")
  const [color2, setColor2] = useState("#c0c0c084")
  useEffect(() => {
    setTimeout(() => setColor2("silver"), 1000) 
    setTimeout(() => setColor2("#ffffffe8"), 2000)
    
    setTimeout(() => setColor("#d48b50"), 1000) 
    setTimeout(() => setColor("#ffffffe8"), 2000)

  },[])

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  return (
    <div className="loader" >
      <div style={{
        background:color2,
        boxShadow: `0 0 20px 15px ${color2}`,
        }} data-aos='zoom-out'>
        {color == "#c0c0c084" ? (
          <BounceLoader
            color='gray'
            cssOverride={{
              boxShadow: "0 0 10px 2px #a1a1a1d7",
              borderRadius: "50%",
              transition: "all .3s ease",
              background: "#28282840",
            }}
            loading
            size={200}
            speedMultiplier={1.2}
            data-aos='zoom-in'
          />
        ) : (
          <RingLoader
            color={color}
            cssOverride={{
              boxShadow: "0 0 20px 4px #6161619a",
              borderRadius: "50%",
              transition: "all .3s ease",
              background: "linear-gradient(to right, silver ,white)",
            }}
            loading
            size={200}
            speedMultiplier={1.2}
            data-aos='zoom-out'
          />
        )}
      </div>
    </div>
  );
};

export default LoaderPage;
