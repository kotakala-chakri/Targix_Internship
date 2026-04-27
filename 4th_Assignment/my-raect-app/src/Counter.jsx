import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./ContextApi";

const CountText = styled.h2`
  font-size: 40px;
  color: ${({ value }) => (value > 0 ? "green" : value < 0 ? "red" : "yellow")};
`;

export const Counter = () => {
  const { state } = useContext(AppContext);

  return <CountText value={state.count}>{state.count}</CountText>;
};
