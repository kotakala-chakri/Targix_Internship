import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./ContextApi";

const Button = styled.button`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  border: none;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;

export const Controls = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <div>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</Button>
      <Button onClick={() => dispatch({ type: "RESET" })}>RESET</Button>
    </div>
  );
};
