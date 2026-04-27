import { Title, Container, Click, Box, Input, Message } from "../Layouts";
import { useState } from "react";

export const Home = () => {
  const [password, setPassword] = useState("");

const savedUser = localStorage.getItem("user");

const [name, setName] = useState(savedUser || "");
const [isLoggedIn, setIsLoggedIn] = useState(!!savedUser);



  const handleLogin = () => {
    if (name && password) {
      setIsLoggedIn(true);
      localStorage.setItem("user", name); //update this to save user to localStorage on login
    } else {
      alert("Please enter name and password");
    }
  };


  const handleLogout = () => { 
    setIsLoggedIn(false);
    setName("");
    localStorage.removeItem("user");  //update this to remove user from local storage
  };

  return (
    <Container>
      <Title>Welcome to React Router + React Query App</Title>
      <p>Please login to access Todolist.</p>

      <Box>
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
      </Box>
    </Container>
  );
};
