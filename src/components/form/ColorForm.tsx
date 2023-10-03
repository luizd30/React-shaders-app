import React from "react";
import { ColorPicker } from "../colorpicker";
import { Input } from "../input/Input";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ColorForm = () => {
  return (
    <Form>
      <ColorPicker />
      <Input />
    </Form>
  );
};
