import React from 'react';
import './BattleGame_style.css';

// function Square({value, onSquareClick}: {value :number, onSquareClick: React.MouseEventHandler<HTMLElement>}) {
//   return (
//     <button className='value' onClick={onSquareClick}>
//     </button>
//   );
// }

function Square({value=""}){
  return (
    <button className='butt'>
      {value}
    </button>
    );
}

function FewSquares({row}: {row:number}){
  return (
    <div id="test">
      <button id="pTest">{row}</button> 
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
    
  );
}

function test() {
  for(var i = 0; i < 5; i++){
    <button>i</button>
  }
}

function Letters(){ 
  return (
    <div>
      <Square />
      <Square value='A'/>
      <Square value='B'/>
      <Square value='C'/>
      <Square value='D'/>
      <Square value='E'/>
      <Square value='F'/>
      <Square value='G'/>
      <Square value='H'/>
      <Square value='I'/>
      <Square value='J'/>
  </div>
  );
}
  

function Board() {
  return (
    <div className="playerField">
      <Letters/>
      <FewSquares row={1} />
      <FewSquares row={2}/>
      <FewSquares row={3}/>
      <FewSquares row={4}/>
      <FewSquares row={5}/>
      <FewSquares row={6}/>
      <FewSquares row={7}/>
      <FewSquares row={8}/>
      <FewSquares row={9}/>
      <FewSquares row={10}/>
    </div>
  );
  
}

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
        <div >
            <Board  />
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
