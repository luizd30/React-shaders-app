import { useState } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";

const Box = styled.div`
  position: absolute;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #18181b;
  cursor: pointer;
`;
const Color = styled.div`
  background: #a855f7;
  border-radius: 100px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  height: 100%;
`;

const Container = styled.div`
  position: relative;
`;

export const ColorPicker = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showColorPicker = () => {
    setIsVisible((state) => !state);
  };

  return (
    <Container>
      <Wrapper onClick={showColorPicker}>
        <Color></Color>
      </Wrapper>

      {isVisible ? (
        <Box>
          <HexColorPicker />
        </Box>
      ) : null}
    </Container>
  );
};
