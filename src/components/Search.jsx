import React from "react";
import add from "../img/a5.jpg";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text"  placeholder="Buscar"/>
            </div>
            <div className="userChat">
                <img src={add} alt="" />
                <div className="userChatInfo">
                    <span>User</span>
                </div>
            </div>
        </div>
    )
}

export default Search