import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import "./Css/App.css";
import MainUSA from "./componentUSA/MainUSA";
import LoaderPage from "./component/LoaderPage";
import Navbar from "./component/Navbar";
import NavbarUSA from "./componentUSA/NavbarUSA";
import Hero from "./Pages/Hero";
import FooterUSA from "./componentUSA/FooterUSA";
import Footer from "./component/Footer";
import ContactUs from "./component/ContactUs";
import HeroUSA from "./PagesUSA/HeroUSA";
import ContactUsUSA from "./componentUSA/ContactUsUSA";
import Al3rapyFamily from "./Pages/Al3rabiFamily";
import Al3rapyFamilyUSA from "./PagesUSA/Al3rabiFamilyUSA";
import Championships from "./Pages/Champions";

const App = () => {
  //TODO>> Toggle color of page
  const [checkDarkMode, setCheckDarkMode] = useState(true);
  //TODO>> check saudi flag
  const [checkSaudiFlag, setCheckSaudiFlag] = useState(true);

  //TODO>> check loader
  const [loader, setLoader] = useState(true);

  setTimeout(() => setLoader(false), 3000);
  return (
    <div
      style={{
        direction: checkSaudiFlag ? "rtl" : "ltr",
        textAlign: checkSaudiFlag ? "right" : "left",
      }}
    >
      {loader ? (
        <LoaderPage />
      ) : checkSaudiFlag ? (
        <Router>
          <Navbar
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  checkDarkMode={checkDarkMode}
                  setCheckDarkMode={setCheckDarkMode}
                />
              }
            />
            <Route
              path="/heros"
              element={
                <div>
                  <Hero checkDarkMode={checkDarkMode} />
                  <ContactUs checkDarkMode={checkDarkMode} />
                </div>
              }
            />

            <Route
              path="/family"
              element={
                <div>
                  <Al3rapyFamily checkDarkMode={checkDarkMode} />
                  <ContactUs checkDarkMode={checkDarkMode} />
                </div>
              }
            />
            <Route
              path="/Championships"
              element={
                <div>
                  <Championships checkDarkMode={checkDarkMode} />
                  <ContactUs checkDarkMode={checkDarkMode} />
                </div>
              }
            />
          </Routes>
          <Footer checkDarkMode={checkDarkMode} />
        </Router>
      ) : (
        <Router>
          <NavbarUSA
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
          />
          <Routes>
            <Route
              path="/"
              element={
                <MainUSA
                  checkDarkMode={checkDarkMode}
                  setCheckDarkMode={setCheckDarkMode}
                />
              }
            />
            <Route
              path="/heros"
              element={
                <div>
                  <HeroUSA checkDarkMode={checkDarkMode} />
                  <ContactUsUSA checkDarkMode={checkDarkMode} />
                </div>
              }
            />

            <Route
              path="/family"
              element={
                <div>
                  <Al3rapyFamilyUSA checkDarkMode={checkDarkMode} />
                  <ContactUsUSA checkDarkMode={checkDarkMode} />
                </div>
              }
            />
          </Routes>
          <FooterUSA checkDarkMode={checkDarkMode} />
        </Router>
      )}
    </div>
  );
};

export default App;
