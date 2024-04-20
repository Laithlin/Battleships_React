import React from 'react';
import '../styles/BattleGame_style.css';
import Board from '../components/Board';

// function Square({value, onSquareClick}: {value :number, onSquareClick: React.MouseEventHandler<HTMLElement>}) {
//   return (
//     <button className='value' onClick={onSquareClick}>
//     </button>
//   );
// }

function Game() {
  return (
    <div className="Game">
      <header className="Battleships Game">
        <div >
            <Board  id='board'/>
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
