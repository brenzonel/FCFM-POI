import React from "react";
import add from "../img/a4.png";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Super Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="Correo"/>
                    <input type="password" placeholder="Contraseña"/>
                    <button>Entrar</button>
                </form>
                <p>No tienes Cuenta? Registrate</p>
            </div>
        </div>
    )
}

export default Login