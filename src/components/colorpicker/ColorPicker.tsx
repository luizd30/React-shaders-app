import { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ColorContext, ColorContextType } from "../../context/ColorContext";

const ColorPickerBox = styled.div`
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

const Color = styled.div<{ $bg: string }>`
  background: ${(props) => props.$bg};
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  height: 100%;
`;

const Container = styled.div`
  position: relative;
`;

export const ColorPicker = () => {
  const { color, setColor } = useContext(ColorContext) as ColorContextType;

  const [isShow, setIsShow] = useState(false);
  const ref = useRef();

  console.log(color);

  useOutsideClick(ref, () => setIsShow(false));
  return (
    <Container ref={ref}>
      <Wrapper onClick={() => setIsShow(!isShow)}>
        <Color $bg={color} />
      </Wrapper>

      {isShow ? (
        <ColorPickerBox>
          <HexColorPicker color={color} onChange={setColor} />
        </ColorPickerBox>
      ) : null}
    </Container>
  );
};
