import { useState } from 'react';
import styled from "styled-components";


const SSquare = styled.button`
  display: block;
  width: 64px;
  height: 64px;
  border: solid 1px #000;
  font-size: 32px;
  line-height: 64px;
  text-align: center;
  background-color: #fff;
`;

const SFlex = styled.div`
display: flex;
`;

const Square = (props) => {
  const { num, clickAction } = props;


  return(
    <>
      <SSquare onClick={clickAction}>
        {num}
      </SSquare>
    </>
  )
};

const Borad = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));

  const [xIsNext, setXIsNext] = useState(true);

  const [winner, setWinner] = useState(null);

  const clickSquareAction = (i) => {
    const newSquares = [...squares];
    const nextPlayer = xIsNext ? 'X' : 'O'
    newSquares[i] = nextPlayer;

    setSquares(newSquares);
    if(calculateWinner(newSquares) != null){
      setWinner(calculateWinner(newSquares))
    }
    setXIsNext(!xIsNext);
  }

  const calculateWinner = (squares) => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const resetGame = () => {
    setWinner(null);
    setXIsNext(true);
    setSquares(Array(9).fill(''))
  }

  return(
    <>
      <div>
        { [0,1,2].map((i) => (
            (<SFlex key={i}>
              <Square num = {squares[3*i + 0]} clickAction={() => clickSquareAction(3*i + 0)} />
              <Square num = {squares[3*i + 1]} clickAction={() => clickSquareAction(3*i + 1)} />
              <Square num = {squares[3*i + 2]} clickAction={() => clickSquareAction(3*i + 2)} />
            </SFlex>)
        ))
        }
        <p>{winner}</p>
        <button onClick={()=>resetGame()}>リセット</button>
      </div>
    </>
  )
}


export const App = () => {


  return(
    <div>
      <h1>丸罰ゲーム</h1>
      <Borad/>
    </div>
  )

}
