import React, {useState} from "react";
import Board from "../components/Board";
import "../styles/ShipPlacingBoard_style.css"
import Battleship from "../assets/ShipBattleshipHull.png"
import Destroyer from "../assets/ShipDestroyerHull.png"
import Patrol from "../assets/ShipPatrolHull.png"
import Submarine from "../assets/ShipSubMarineHull.png"

function ShipPlacingBoard() {
    const[style, setRotate] = useState("not-rotated");
    const rotate = () => {
        console.log("click");
        if (style === "not-rotated") setRotate("rotated");
            else setRotate("not-rotated");
    };
    return (
        <div>
            <div id="placing_ships">
                <Board id="placing_board"/>
                <div id="elements_table">
                    <img src={Destroyer} alt="Destroyer" />
                    <img src={Battleship} alt="Battleship" />
                    <img src={Patrol} alt="Patrol" />
                    <img src={Submarine} alt="Submarine" className={style} onDoubleClick={rotate}/>

                </div>
            </div>
            <div id="action_buttons">
                <button className="enter_res_button">ENTER</button>
                <button className="enter_res_button">RESET</button>
            </div>
            
        </div>
    );
}

export default ShipPlacingBoard;
