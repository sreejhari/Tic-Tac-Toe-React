import Square from "./Square";
import React, { useState } from "react";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);

  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
// try ternary opretor as we have onlt one line of code in each loop
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);

    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);

  let status;
// try ternary opretor as we have onlt one line of code in each loop
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        {/* <Square value={squares[0]} onSquareClick={() => handleClick(0)} />

        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />

        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />

        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />

        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />

        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> 

        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />  */}

        {/* squares.map(function(currentValue, index, arr){ 
         console.log("currentVal------>",currentValue);
console.log("index------>",index);
console.log("arr------>",arr);
))}  */}

        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

//Convert to array function and move this to top
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6],
  ];
// Try to use Other loop like map 
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
export default Board;
