import React from "react";
import add from "../img/a5.jpg";

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={add} alt="" />
                <div className="userChatInfo">
                    <span>User</span>
                    <p>Hello
                    </p>
                </div>
            </div>
            <div className="userChat">
                <img src={add} alt="" />
                <div className="userChatInfo">
                    <span>User2</span>
                    <p>Hello2
                    </p>
                </div>
            </div>
            <div className="userChat">
                <img src={add} alt="" />
                <div className="userChatInfo">
                    <span>User3</span>
                    <p>Hello3
                    </p>
                </div>
            </div>
            <div className="userChat">
                <img src={add} alt="" />
                <div className="userChatInfo">
                    <span>User4</span>
                    <p>Hello4
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chats