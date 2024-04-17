import React from 'react';
import './BattleGame_style.css';

// function Square({value, onSquareClick}: {value :number, onSquareClick: React.MouseEventHandler<HTMLElement>}) {
//   return (
//     <button className='value' onClick={onSquareClick}>
//     </button>
//   );
// }

function Square({value="", field=""}){
  return (
    <button className='butt' id={field}>
      {value}
    </button>
    );
}

function FewSquares({row}: {row:number}){
  let final_row = "";

  if(row){
    final_row = row.toString();
  }else{
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
    )
  }

  return (
    <div id="test">
      <button id="row">{final_row}</button> 
      <Square field={"A" + final_row}/>
      <Square field={"B" + final_row}/>
      <Square field={"C" + final_row}/>
      <Square field={"D" + final_row}/>
      <Square field={"E" + final_row}/>
      <Square field={"F" + final_row}/>
      <Square field={"G" + final_row}/>
      <Square field={"H" + final_row}/>
      <Square field={"I" + final_row}/>
      <Square field={"J" + final_row}/>
    </div>
    
  );
}

function Letters(){ 
  return (
    <div>
      {/* <Square />
      <Square value='A'/>
      <Square value='B'/>
      <Square value='C'/>
      <Square value='D'/>
      <Square value='E'/>
      <Square value='F'/>
      <Square value='G'/>
      <Square value='H'/>
      <Square value='I'/>
      <Square value='J'/> */}
      <FewSquares row={0} />
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
      
        {/* <table id="upper-row">
          <td>A</td> <td>B</td> <td>C</td> <td>D</td> <td>E</td> <td>F</td>
          <td>G</td> <td>H</td> <td>I</td> <td>J</td>
        </table>
        <div id="leftRow">
            <table>
                <tr><td>1</td></tr> <tr><td>2</td></tr> <tr><td>3</td></tr> <tr><td>4</td></tr> <tr><td>5</td></tr>
                <tr><td>6</td></tr> <tr><td>7</td></tr> <tr><td>8</td></tr> <tr><td>9</td></tr> <tr><td>10</td></tr>
            </table>
        </div> */}
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
