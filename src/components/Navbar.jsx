import React from "react";
import add from "../img/a5.jpg";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Super Chat</span>
            <div className="user">
                <img src={add} alt="" />
                <span>User</span>
                <button>Salir</button>
            </div>
        </div>
    )
}

export default Navbar