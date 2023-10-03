import styled from "styled-components";
import { ColorForm } from "../form";
import { RandomColor } from "../button";

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
      <ColorForm/>
      <RandomColor/>
    </SHeader>
  );
};
