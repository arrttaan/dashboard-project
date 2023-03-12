import React from "react";

import "./footer.css"

function Footer (){
    return (
        <div className="footer">
            <div className="footerDiv1">
                <a href="#">About </a>
                <a href="#">- Privacy </a>
                <a href="#">- Terms </a>
                <a href="#">- Developers </a>
                <a href="#">- Support </a>
                <a href="#">- Careers</a>
            </div>
            <div className="footerDiv2">
                <p>All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;