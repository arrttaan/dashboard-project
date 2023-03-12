import React from "react";
import "./Tasks.css";
import Menu from "./images/menu.png";
import Message from "./images/message.png";
import leftArrow from "./images/Group8.png";

function Tasks() {
    return (
        <div className="Tasks">
            <div className="tasksDiv1">
                <p>Tasks</p>
                <a href="#">View All&nbsp;<img src={leftArrow}></img></a>
            </div>
            <div className="tasksDiv2">
                <div className="tasksDiv2-1">
                    <input type="checkbox" /><p>Draft the new contract document for sales team</p>
                </div>
                <div className="tasksDiv2-2">
                    <div className="tasksDiv2-2-1"> 
                        <p>Today 10pm</p>
                    </div>
                   
                </div>
                <div className="tasksDiv2-3">
                    <div className="tasksDiv2-3-1">
                        <div className="tasksDiv2-3-1-1">
                            <img className="tasksMenu" src={Menu} alt="Menu" />
                        </div>
                        <div className="tasksDiv2-3-1-2">
                            <p>3/7</p>
                        </div>
                    </div>
                    <div className="tasksDiv2-3-2">
                        <img className="tasksMenu" src={Message} alt="Message" />
                        <p>21</p>
                    </div>
                    <div className="tasksDiv2-3-3">
                        <p>High</p>
                    </div>
                </div>
            </div>
            <div className="tasksDiv3">
                <div className="tasksDiv3-1">
                    <input type="checkbox" /> <p>iOS App home page design</p>
                </div>
                <div className="tasksDiv3-2">
                    <div className="tasksDiv3-2-1">
                        <p>Today 5pm</p>    
                    </div>
                </div>
                <div className="tasksDiv3-3">
                    <div className="tasksDiv3-3-1">
                        <img className="tasksMenu" src={Menu} alt="Menu" />
                        <p>10/11</p>
                    </div>
                    <div className="tasksDiv3-3-2">
                        <img className="tasksMenu" src={Message} alt="Message" />
                        <p>5</p>
                    </div>
                    <div className="tasksDiv3-3-3">
                        <p>Medium</p>
                    </div>
                </div>
            </div>
            <div className="tasksDiv4">
                <div className="tasksDiv4-1">
                    <input type="checkbox" /><p>Enable analytics tracking</p>
                </div>
                <div className="tasksDiv4-2">
                    <div className="tasksDiv4-2-1">
                        <p>Tomorrow 5pm</p>
                    </div>
                </div>
                <div className="tasksDiv4-3">
                    <div className="tasksDiv4-3-1">
                        <img className="tasksMenu" src={Menu} alt="Menu" />
                        <p>5/11</p>
                    </div>
                    <div className="tasksDiv4-3-2">
                        <img className="tasksMenu" src={Message} alt="Message" />
                        <p>7</p>
                    </div>
                    <div className="tasksDiv4-3-3">
                        <p>Medium</p>
                    </div>
                </div>
            </div>
            <div className="tasksDiv5">
                <div className="tasksDiv5-1">
                    <input type="checkbox" /><p>Kanban board design</p>
                </div>
                <div className="tasksDiv5-2">
                    <div className="tasksDiv5-2-1">
                        <p>Sep 11, 3pm</p>
                    </div>
                </div>
                <div className="tasksDiv5-3">
                    <div className="tasksDiv5-3-1">
                        <img className="tasksMenu" src={Menu} alt="Menu" />
                        <p>0/5</p>
                    </div>
                    <div className="tasksDiv5-3-2">
                        <img className="tasksMenu" src={Message} alt="Message" />
                        <p>3</p>
                    </div>
                    <div className="tasksDiv5-3-3">
                        <p>Low</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;