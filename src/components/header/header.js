import React, { useState } from "react";
import home from "./images/home.png";
import projects from "./images/Projects.png";
import tasks from "./images/Tasks.png";
import report from "./images/Reports.png";
import settings from "./images/settings.png";
import elizabeth from "./images/avatar-1 1.png";
import alert from "./images/alert.png";

import "./header.css";

function Header() {

    const hamburgerButton = document.querySelector(".navbarmenu-btn");
    const navMenu = document.querySelector(".navbarmenu-list");

    const[hamburger, setHamburger] = useState("none");
    
    // hamburgerButton.addEventListener("click", () => {
    //     hamburgerButton.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // })
    
    const mobileNav = () => {
        if(hamburger == "none") {
            setHamburger("block");
        } else {
            setHamburger("none");
        }
        
    }

    return (
        <nav className="navbar">
            <div className="navbarlogo">
                <a href="#" className="dashboard">Dashboard</a>
            </div>
            <div className="navbarmenu">
                <button className="navbarmenu-btn" onClick={mobileNav}>
                    <span className="navbarmenu-btn-icon"></span>
                </button>
                {/* style={{display: hamburger}} */}
                <ul className="navbarmenu-list " style={{display: hamburger}} >
                    <li className="navbarmenu-item home"><a href="#"><img src={home} alt="Home" />&nbsp;Home</a></li>
                    <li className="navbarmenu-item projects"><a href="#"><img src={projects} alt="projects" />&nbsp;Projects</a></li>
                    <li className="navbarmenu-item tasks"><a href="#"><img src={tasks} alt="tasks" /> &nbsp;Tasks</a></li>
                    <li className="navbarmenu-item reports"><a href="#"><img src={report} alt="report" />  &nbsp;Reports</a></li>
                    <li className="navbarmenu-item settings"><a href="#"><img src={settings} alt="settings" />  &nbsp;Settings</a></li>
                </ul>
            </div>
            <div className="thirdDiv col-3">
                <a className="alerts" href="#"><img src={alert} alt="alert" className="alert" /></a>
                <div className="thirdDiv1">
                    <img className="elisabeth" src={elizabeth} alt="elizabeth" />
                    <div className="thirdDiv2">
                        <h1>Elizabeth F</h1>
                        <p>Admin</p>
                    </div>
                </div>
            </div>
        </nav>

        // <div className="header row">
        //     <div className="firstDiv col-3">
        
        //     </div>
        //     <div className="secondDiv col-6 ">
        //         <div className="col-2 Home">
        //             <a href="./header.js" className="home"><img src={home} alt="Home" />&nbsp;Home</a>
        //         </div>
        //         <div className="col-2 projects">
        //             <a href="./header.js" className="projects"><img src={projects} alt="projects" />&nbsp;Projects</a>
        //         </div>
        //         <div className="col-2 tasks">
        //             <a href="./header.js" className="tasks"><img src={tasks} alt="tasks" /> &nbsp;Tasks</a>
        //         </div>
        //         <div className="col-2 report">
        //             <a href="./header.js" className="reports"><img src={report} alt="report" />  &nbsp;Reports</a>
        //         </div>
        //         <div className="col-2 settings">
        //             <a href="./header.js" className="settings"><img src={settings} alt="settings" />  &nbsp;Settings</a>
        //         </div>
        //     </div>
        //     <div className="thirdDiv col-3">
        //         <a className="alerts" href="./header.js"><img src={alert} alt="alert" className="alert" /></a>
        //         <div className="thirdDiv1">
        //             <img className="elisabeth" src={elizabeth} alt="elizabeth" />
        //             <div className="thirdDiv2">
        //                 <h1>Elizabeth F</h1>
        //                 <p>Admin</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header;