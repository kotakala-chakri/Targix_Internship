import styled from 'styled-components';

export const Container = styled.div`
margin: 20px auto;
   padding: 20px;
   font-family: Arial, sans-serif;
  background-color: #04ff19;
`;

export const Title = styled.h2`
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px;
   border: 3px solid #010102;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 8px;
   margin: 5px;
  border-radius: 5px;
  border: 3px solid #010102;
`;

export const Button = styled.button`
  padding: 8px 12px;
    margin: 5px;
  background-color: #007bff;
     color: white;
   border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 3px solid #010102;

  &:hover {
    background-color: #101111;
  }
`;

export const List = styled.ul`
  margin-top: 15px;
  color: #010a0c;
background-color: #04ffea;
  border: 3px solid #0f0fec;
  border-radius: 5px;
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;
