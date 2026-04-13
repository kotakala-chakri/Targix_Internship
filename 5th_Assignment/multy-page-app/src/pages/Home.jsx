import {
  Title,
  Container,
  Button,
  Click,
  Card,
  Input,
  Message,
} from "../Layouts";
import { useState } from "react";
export const Home = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (name && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter name and password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName("");
    setPassword("");
  };
  return (
    <Container> 
      <Title>Welcome to React Router + React Query App</Title>
      <p>This is the home page. you want to navigate to other pages.</p>
 
      <Card>
        {!isLoggedIn ? (
          <>
            <h3>Login</h3>

            <Input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Click onClick={handleLogin}>Login</Click>
          </>
        ) : (
          <>
            <Message>Login Successful</Message>
            <p>Welcome, {name}</p>

            <Click onClick={handleLogout}>Logout</Click>
          </>
        )}
      </Card>
    </Container>
  );
};
