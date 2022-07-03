import Counter from "./components/Counter";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}

export default App;
