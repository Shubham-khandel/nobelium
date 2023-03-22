import Square from "./square";
import {useState} from 'react'

function Board() {
    const[state, setState] = useState(Array(9).fill(null))
    const[xTurn, setxTurn] = useState(true)

    function checkWinner(){
      const winnerPossibilities = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for(let logic of winnerPossibilities){
        const [a,b,c] = logic;
        if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
          return state[a];
        }
      }
      return false;
  };

  const isWinner = checkWinner();

    function handleClick(index){
      if(state[index] !==null){
        return;
      }
        const copyIn = [...state];
        copyIn[index] = xTurn ? 'X' : 'O';
        setState(copyIn);
        setxTurn(!xTurn);
    }

    function restartGame(){
      setState(Array(9).fill(null))
    }
  return (
    <div className="board-container">
      {isWinner?(<><h1>{isWinner} is the Winner!!!!!</h1><button onClick={restartGame}>Restart</button></>)
      :
      (<><h2>{xTurn?"X":'O'} Turn</h2><div className="board-row">
        <Square onClickk={()=>handleClick(0)} value={state[0]}/>
        <Square onClickk={()=>handleClick(1)} value={state[1]}/>
        <Square onClickk={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div className="board-row">
        <Square onClickk={()=>handleClick(3)} value={state[3]}/>
        <Square onClickk={()=>handleClick(4)} value={state[4]}/>
        <Square onClickk={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className="board-row">
        <Square onClickk={()=>handleClick(6)} value={state[6]}/>
        <Square onClickk={()=>handleClick(7)} value={state[7]}/>
        <Square onClickk={()=>handleClick(8)} value={state[8]}/>
      </div><button onClick={restartGame}>Reset</button></>)}
      
    </div>
  );
}

export default Board;
