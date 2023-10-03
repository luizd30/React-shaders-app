import styled from "styled-components";
import { ColorContext, ColorContextType } from "../../context/ColorContext";
import { useContext, useState } from "react";
import Values from "values.js";

const Container = styled.main`
  display: flex;
  flex: 1;
`;

const ColorBox = styled.div<{ $current: boolean }>`
  height: 100%;
  width: ${(props) => (props.$current ? "600px" : "60px")};
  transition: width 0.3s ease-in-out;
`;

export const Main = () => {
  const [setlected, setSelecter] = useState(0);
  const { color } = useContext(ColorContext) as ColorContextType;

  const shaders = new Values(color).all();

  return (
    <Container>
      {shaders.map((color, index) => (
        <ColorBox
          onClick={() => setSelecter(index)}
          style={{ backgroundColor: "#" + color.hex }}
          $current={setlected === index}
          key={index}
        />
      ))}
    </Container>
  );
};
