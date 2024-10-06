import React from 'react'
import Header from './HeaderUSA'
import WhosAl3rapy from './WhosAl3rapyUSA'
import About from './AboutUSA'
import ContactUs from './ContactUsUSA'
import Footer from './FooterUSA'
import Family from './FamilyUSA'

const MainUSA = (props) => {

  return (
    <div>
        <Header checkDarkMode={props.checkDarkMode}/>
        <WhosAl3rapy checkDarkMode={props.checkDarkMode}/>
        <About/>
        <ContactUs checkDarkMode={props.checkDarkMode}/>
        <Family checkDarkMode={props.checkDarkMode}/>
    </div>
  )
}

export default MainUSA