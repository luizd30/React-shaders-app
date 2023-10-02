import {  ColorProvider } from "./context/ColorContext";
import { Container } from "./components/container";
import { Header } from "./components/header";

function App() {
  return (
    <ColorProvider>
      <Container>
        <Header/>
      </Container>
    </ColorProvider>
  );
}

export default App;
