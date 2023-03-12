import React from "react";
import Elisabeth from "./images/elisabeth.png";
import Mail from "./images/mail.png";
import GreenDone from "./images/greenDone.png";
import GreenUp from "./images/greenUp.png";
import Pencil from "./images/pencil.png";
import RedDown from "./images/redDown.png";
import ThreeDots from "./images/ThreeDots.png";
import Phone from "./images/phone.png";

import "./welcomeToDashboard.css";


function WelcomeToDashboard() {


    return (
        <div className="WelcomeToDashboard row">
            <div className="welcome col-12">
                <p>Hi Elizabeth</p>
                <p>Welcome to Dashboard!</p>
            </div>
            <div className="divs col-12">
                <div className="div1 row">
                    <div className="div1-1 col-12">
                        <div className="div1-1-1">
                            <img className="elisabeth2" src={Elisabeth} alt="elisabeth2" />
                            <div className="div1-1-1-1">
                                <p>Elizabeth Foster</p>
                                <p>Web & Graphic Designer</p>
                            </div>
                        </div>
                        <img className="threeDots" src={ThreeDots} alt="" />
                    </div>
                    <div className="div1-2 col-12">
                        <a href="./header.js" className="mail"><img src={Mail} alt="mail" />&nbsp;xyz@mail.com</a>
                        <a href="./header.js" className="phone"><img src={Phone} alt="phone" />&nbsp;+00 123-456-789</a>
                    </div>
                    <hr></hr>
                    <div className="div1-3">
                        <div className="div1-3-1 row">
                            <div className="div1-3-1-1">
                                <p>Project Completion</p>
                                <p>85%</p>
                            </div>
                            <div className="div1-3-1-2" >
                                <div className="div1-3-2-1-1">
                                    <div className="div1-3-2-1-2"></div>
                                    </div>
                            </div>
                        </div>
                        <div className="div1-3-2 row">
                            <div className="div1-3-2-1">
                                <p>Overall Rating</p>
                                <p>7.5</p>
                            </div>
                            <div className="div1-3-2-2"> 
                                <div className="div1-3-2-2-1">
                                    <div className="div1-3-2-2-2"></div>
                                    </div>
                            </div></div>
                    </div>
                </div>
                <div className="div2 ">
                    <div className="div2-1">
                        <div className="div2-1-1" >
                            <img src={GreenDone} alt="greendone"/>
                        </div>
                        <div className="div2-1-2">
                            <p>21</p>
                            <p>Tasks Completed</p>
                        </div>
                    </div>
                    <div className="div2-2">
                        <div className=" div2-2-1 " >
                            <img src={Pencil} alt="Pencil"/>
                        </div>
                        <div className="div2-2-2 ">
                            <p>21</p>
                            <p>Tasks Inprogress</p>
                        </div>
                    </div>
                </div>
                <div className="div3">
                    <div className="div3-1 ">
                        <div className="div3-1-1">
                            <p>Revenue</p>
                            <p>$2,100</p>
                            <p>Last Week</p>
                        </div>
                        <div className="div3-1-2 ">
                            <img src={ThreeDots} className="threeDots" alt="" />
                        </div>
                    </div>
                    <hr/>
                    <div className="div3-2">
                        <div className="div3-2-1 col-6">
                            <div className="div3-2-1-1">
                                <img src={GreenUp} alt="" />
                            </div>
                            <div  className="div3-2-1-2">
                                <p>15 %</p>
                                <p>Prev Week</p>
                            </div>
                        </div>
                        <div className="div3-2-2 col-6">
                            <div className="div3-2-2-1">
                                <img src={RedDown} alt="" />
                            </div>
                            <div className="div3-2-2-2">
                                <p>15 %</p>
                                <p>Prev Week</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeToDashboard;