import './TicTacToe.css';
import Square from '../Square';
import { useState } from 'react';
import X from '../X';
import O from '../O';

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

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("Tic Tac Toe Game In React");
  const [winner, setWinner] = useState<React.ReactNode>(null);

  const handleClick = (index: number) => {
    if (squares[index] || checkWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isXTurn ? 'x' : 'o';
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
    updateStatus(newSquares);
  };

  const updateStatus = (squares: Array<string>) => {
    const winner = checkWinner(squares);
    if (winner) {
      setStatus(`Congratulations: `);
      setWinner(
        <>
          {winner === 'x' ? <X /> : <O />}
          {` Wins!`}
        </>
      );
    } else if (squares.every(Boolean)) {
      setStatus("It's a draw!");
      setWinner(null);
    } else {
      setStatus(`Next player: ${isXTurn ? 'X' : 'O'}`);
      setWinner(null);
    }
  };

  const checkWinner = (squares: Array<string>) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setStatus("Tic Tac Toe Game In React");
    setWinner(null);
  };

  return (
    <div className='container'>
      <h1 className='title'>{status}{winner}</h1>
      <div className='board'>
        {Array(9).fill(null).map((_, i) => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button className='reset' onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;