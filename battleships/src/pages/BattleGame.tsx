import React from 'react';
import '../styles/BattleGame_style.css';

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

  if(row){   
    return (
      <div id="test">
        <button id="row">{row}</button> 
        <Square field={"A" + row}/>
        <Square field={"B" + row}/>
        <Square field={"C" + row}/>
        <Square field={"D" + row}/>
        <Square field={"E" + row}/>
        <Square field={"F" + row}/>
        <Square field={"G" + row}/>
        <Square field={"H" + row}/>
        <Square field={"I" + row}/>
        <Square field={"J" + row}/>
      </div>
      
    );

  }else{
    return (
    <div id="firstRow">
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

}

function Letters(){ 
  return (
    <div>
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
