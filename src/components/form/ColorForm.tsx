import { useContext } from "react";
import { ColorPicker } from "../colorpicker";
import { Input } from "../input/Input";
import styled from "styled-components";
import { ColorContext, ColorContextType } from "../../context/ColorContext";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ColorForm = () => {
  const { color } = useContext(ColorContext) as ColorContextType;
  return (
    <Form>
      <ColorPicker />
      <Input value={color} />
    </Form>
  );
};
