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

  const clickSquareAction = (i) => {
    const newSquares = [...squares];
    const nextPlayer = xIsNext ? 'X' : 'O'
    newSquares[i] = nextPlayer;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
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
