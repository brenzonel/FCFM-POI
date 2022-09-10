import React from "react";
import add from "../img/a5.jpg";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={add} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>HOLO</p>
                <img src={add} alt="" />
            </div>
        </div>
    )
}

export default Message