import styled from "styled-components";
import { RandomColor } from "../button";
import { ColorPicker } from "../colorpicker";

const SHeader = styled.header`
  display: flex;
  padding: 24px 48px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d4d4d8;
  background: #fff;
`;

export const Header = () => {
  return (
    <SHeader>
      <ColorPicker></ColorPicker>
      <RandomColor />
    </SHeader>
  );
};
