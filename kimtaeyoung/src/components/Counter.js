import styled from "styled-components";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const onClick = (num) => {
    setCounter((current) => current + num);
  };

  return (
    <Box>
      <Button onClick={() => onClick(-2)}>- 2</Button>
      <Button onClick={() => onClick(-1)}>- 1</Button>
      <h1>{counter}</h1>
      <Button onClick={() => onClick(1)}>+ 1</Button>
      <Button onClick={() => onClick(2)}>+ 2</Button>
    </Box>
  );
}

export default Counter;

const Box = styled.div`
  height: 400px;
  width: 400px;
  border: 5px solid royalblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  background: lightgrey;
  border: 0;
  border-radius: 5px;
  margin: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;
