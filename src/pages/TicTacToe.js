import React, { useState } from "react";
import Cell from "../components/Tictactoe/Cell";
import "../Styles/tictactoe.scss";

const TicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [choose, setChoose] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleWinner = (newCells) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winConditions.forEach((condition) => {
      //   console.log(newCells[condition[0]]);
      if (
        newCells[condition[0]] &&
        // 0                                4 xet vong lap thu 7
        newCells[condition[0]] === newCells[condition[1]] &&
        // 0                                8 xet vong lap thu 7
        newCells[condition[0]] === newCells[condition[2]]
      ) {
        setWinner(newCells[condition[0]]);
      }
    });
  };

  const handleClick = (index) => {
    const newCells = [...cells];
    if (cells[index] || winner) {
      return;
    }
    if (choose === "X") {
      newCells[index] = "X";
      setChoose("O");
      setCells(newCells);
    } else {
      newCells[index] = "O";
      setChoose("X");
      setCells(newCells);
    }
    handleWinner(newCells);
  };

  const handleReset = () => {
    setWinner(null);
    setChoose(winner || "X");
    setCells(Array(9).fill(null));
  };

  return (
    <div className="container">
      <div className="main">
        <table>
          <tbody>
            <tr>
              <Cell onClick={handleClick} index={0} cells={cells} />
              <Cell onClick={handleClick} index={1} cells={cells} />
              <Cell onClick={handleClick} index={2} cells={cells} />
            </tr>
            <tr>
              <Cell onClick={handleClick} index={3} cells={cells} />
              <Cell onClick={handleClick} index={4} cells={cells} />
              <Cell onClick={handleClick} index={5} cells={cells} />
            </tr>
            <tr>
              <Cell onClick={handleClick} index={6} cells={cells} />
              <Cell onClick={handleClick} index={7} cells={cells} />
              <Cell onClick={handleClick} index={8} cells={cells} />
            </tr>
          </tbody>
        </table>
      </div>
      {winner && <h1>{winner} is the winner</h1>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
