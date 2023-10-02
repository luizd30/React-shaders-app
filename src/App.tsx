import {  ColorProvider } from "./context/ColorContext";
import { Container } from "./components/container";

function App() {
  return (
    <ColorProvider>
      <Container>container</Container>
    </ColorProvider>
  );
}

export default App;
