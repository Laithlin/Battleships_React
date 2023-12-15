import React from 'react';
import './BattleGame_style.css';

function Game() {
  return (
    <div className="Game">
      <header className="Battleships Game">
      
        <table id="upper-row">
          <td>A</td> <td>B</td> <td>C</td> <td>D</td> <td>E</td> <td>F</td>
          <td>G</td> <td>H</td> <td>I</td> <td>J</td>
        </table>
        <div id="leftRow">
            <table>
                <tr><td>1</td></tr> <tr><td>2</td></tr> <tr><td>3</td></tr> <tr><td>4</td></tr> <tr><td>5</td></tr>
                <tr><td>6</td></tr> <tr><td>7</td></tr> <tr><td>8</td></tr> <tr><td>9</td></tr> <tr><td>10</td></tr>
            </table>
        </div>
        <div className="float: left">
            <canvas id="playerField" width="610" height="610"></canvas>
        </div>

        <div className="game">
            <p id="action"></p>
            {/* <input (keydown.enter)='playerMove()'  id="input" type="text" placeholder="a5"> */}
            <button id="play">ENTER</button>

        </div>
        
        <div className="game">
            <button id="start">START</button>
        </div>
        
      </header>
    </div>
  );
}

export default Game;
