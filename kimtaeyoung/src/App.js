import styled, { ThemeProvider } from "styled-components";
import TodoBoard from "./components/TodoBoard";

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <TodoBoard />
      </ThemeProvider>
    </Container>
  );
}

export default App;

const theme = {
  main: "royalblue",
  dark: "navy",
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
