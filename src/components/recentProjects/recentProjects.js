import "./recentProjects.css";
import React from "react";
import Group28 from "./images/Group28.png";
import girl from "./images/avatar-1.png";
import boy from "./images/avatar-2.png";
import leftArrow from "./images/Group8.png";


function RecentProjects(){

    return (
        <div className="row RP">
            <div className="RPFirstDiv col-12">
                <p>Recent Projects</p>
                <a href="#">View All&nbsp;<img src={leftArrow}></img></a> 
            </div>
            <div  className="row RPSecondDiv col-12" >
                <div className="RPDiv1">
                    <div  className="RPDiv1-1">
                        <p>Apr 09, 2022</p>
                        <img src={Group28}></img>
                    </div>
                    <p className="RPDivP1">Shreyu - Design Updates</p>
                    <div className="RPDiv1-2">
                        <p>Designing</p>
                    </div>
                    <p  className="RPDivP2">Update shreyu with modern and latest trends...</p>
                    <div className="RPDiv1-3">
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className="RPDiv1-4">
                        <div className="RPDiv1-4-1">
                            <div className="RPDiv1-4-2"></div>
                        </div>
                    </div>
                    <div className="RPDiv1-5">
                        <img src={boy} className="imgBoy"></img>
                        <img src={girl} className="imgGirl"></img>
                    </div>
                </div>
                <div className="RPDiv2">
                    <div className="RPDiv2-1">
                        <p>Apr 09, 2022</p>
                        <img src={Group28}></img>
                    </div>
                    <p  className="RPDivP1">Shreyu - Design Updates</p>
                    <div className="RPDiv2-2">
                        <p>Designing</p>
                    </div>
                    <p  className="RPDivP2">Update shreyu with modern and latest trends...</p>
                    <div className="RPDiv2-3">
                        <p>Progress</p>
                        <p>50%</p>
                    </div>
                    <div className="RPDiv2-4">
                        <div className="RPDiv2-4-1">
                            <div className="RPDiv2-4-2"></div>
                        </div>
                    </div>
                    <div className="RPDiv2-5">
                        <img src={boy} className="imgBoy"></img>
                        <img src={girl} className="imgGirl"></img>
                    </div>
                </div>
                <div className="RPDiv3">
                    <div className="RPDiv3-1">
                        <p>Apr 09, 2022</p>
                        <img src={Group28}></img>
                    </div>
                    <p className="RPDivP1">Shreyu - Design Updates</p>
                    <div className="RPDiv3-2">
                        <p>Designing</p>
                    </div>
                    <p className="RPDivP2">Update shreyu with modern and latest trends...</p>
                    <div className="RPDiv3-3">
                        <p>Progress</p>
                        <p>50%</p>
                    </div>
                    <div className="RPDiv3-4">
                        <div className="RPDiv3-4-1">
                            <div className="RPDiv3-4-2"></div>
                        </div>
                    </div>
                    <div className="RPDiv3-5">
                        <img src={boy} className="imgBoy"></img>
                        <img src={girl} className="imgGirl"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProjects;