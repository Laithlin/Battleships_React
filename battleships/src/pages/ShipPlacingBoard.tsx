import Board from "../components/Board";
import "../styles/ShipPlacingBoard_style.css"

function ShipPlacingBoard() {
    return (
        <div>
            <div id="placing_ships">
                <Board id="placing_board"/>
                <div id="elements_table">

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
