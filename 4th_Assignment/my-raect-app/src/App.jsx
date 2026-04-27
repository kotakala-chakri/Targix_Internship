import styled, { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { AppProvider } from "./AppProvider";
import { AppContext } from "./ContextApi";
import { Counter } from "./Counter";
import { Controls } from "./Controls";
import { ThemeToggle } from "./ThemeToggle";

const lightTheme = {
  bg: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  bg: "#121212",
  text: "#faf5f5",
};

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`;

function AppContent() {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
      <Container>
        <h1 style={{ color: "red" }}>Simple Counter App</h1>
        <ThemeToggle />
        <Counter />
        <Controls />
      </Container>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
