import styled from "styled-components";
import { Icon } from "@iconify/react";

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #f4f4f5;
  &:focus,
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RandomColor = () => {
  return (
    <Button>
      <Icon icon="mi:switch" color="#09090b" width="16" height="16" />
    </Button>
  );
};
