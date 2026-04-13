import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  margin: 20px auto;
`;

export const Title = styled.h1`
  color: #030405;
`;

export const Card = styled.div`
  background: #045269;
  color: white;
  justfy-content: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
export const Button = styled.button`
  width: 30%;
  padding: 10px 20px;
  background: #066581;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #079767;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 200px;
`;

export const Click = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  background: #ac0909;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #06143a;
  }
`;

export const Message = styled.p`
  color: #2df51b;
  font-weight: bold;
`;
