import {  ColorProvider } from "./context/ColorContext";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  return (
    <ColorProvider>
      <Container>
        <Header/>
        <Main/>
      </Container>
    </ColorProvider>
  );
}

export default App;
