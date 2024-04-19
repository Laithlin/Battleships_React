import React from "react";
import "../styles/Menu.css"

function Menu() {
    return (
        <div className="menu">
            <button className="menu_button" id="single">
                <a href="/singlePlayer" style={{color: "#5fc9f3"}}>Single player</a>
            </button>
            <button className="menu_button" id="multi">
                Multiplayer
            </button>
            <button className="menu_button" id="settings">
                Settings
            </button>
        </div>
    );
}

export default Menu
