import React from "react";
import "../styles/Menu.css"
import logo from '../assets/logo.png'

function Menu() {
    return (
        <div id="menu_title">
            <img src={logo} alt="logo" id="logo"/>
            <div className="menu">
                <a href="/singlePlayer" >
                    <button className="menu_button" id="single">Single player</button>
                </a>
                <a href="/multiplayer">
                    <button className="menu_button" id="multi">Multiplayer</button>
                </a>
                <a href="/settings">
                    <button className="menu_button" id="settings">Settings</button>
                </a>
            </div>
        </div>
        
    );
}

export default Menu
