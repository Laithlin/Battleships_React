import React, {useState} from "react";
import Board from "../components/Board";
import "../styles/ShipPlacingBoard_style.css"
import Battleship from "../assets/ShipBattleshipHull.png"
import Destroyer from "../assets/ShipDestroyerHull.png"
import Patrol from "../assets/ShipPatrolHull.png"
import Submarine from "../assets/ShipSubMarineHull.png"

const ships = [
    {
        name: "submarine",
        style: "not-rotated"
    },
    {
        name: "patrol",
        style: "not-rotated"
    }
]

function ShipPlacingBoard() {
    const[ships_rotation, setRotate] = useState(ships);
    const rotate = (idx: string) => {
        console.log(idx);
        setRotate(
            ships_rotation.map((ship) =>
                ship.name === idx 
                ? {
                    ...ship, style: ship.style === "rotated" ? "not-rotated" : "rotated"
                } : { ...ship }
            )
            // if (ships[idx].style === "not-rotated") setRotate("rotated");
            // else setRotate("not-rotated");
        );
        console.log(ships_rotation);
        
    };
    return (
        <div>
            <div id="placing_ships">
                <Board id="placing_board"/>
                <div id="elements_table">
                    <img src={Destroyer} alt="Destroyer" />
                    <img src={Battleship} alt="Battleship" />
                    <img src={Patrol} alt="Patrol" />
                    <img src={Submarine} alt="Submarine" className={ships[0].style} onDoubleClick={() => rotate("submarine")}/>

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
