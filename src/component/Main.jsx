import React, {useState} from 'react'
import Navbar from './Navbar'
import Header from './Header'
import WhosAl3rapy from './WhosAl3rapy'
import About from './About'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Family from './Family'


const Main = (props) => {

  return (
    <div>
        <Header checkDarkMode={props.checkDarkMode}/>
        <WhosAl3rapy checkDarkMode={props.checkDarkMode}/>
        <About/>
        <ContactUs checkDarkMode={props.checkDarkMode} />
        <Family checkDarkMode={props.checkDarkMode} />
    </div>
  )
}

export default Main