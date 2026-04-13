import { useState } from "react";
import styled from "styled-components";
import { Container, Title, Card } from "../Layouts";

const Input = styled.input`
  padding: 8px;
  margin: 5px;
`;

const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  cursor: pointer;
  background: #a00a87;
  color: white;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #3af1e2;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
`;
const TodoText = styled.span`
  color: ${(props) => (props.active ? "black" : "red")};
  font-weight: bold;
`;

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>Add Todo List</Title>

      <Card>
        <h3>Todo List</h3>

        <Input
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button onClick={addTodo}>Add</Button>

        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <TodoText active={true}>{todo}</TodoText>
            <Button onClick={() => removeTodo(index)}>Delete</Button>
          </TodoItem>
        ))}
      </Card>
    </Container>
  );
};
