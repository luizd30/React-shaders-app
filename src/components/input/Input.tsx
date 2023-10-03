import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SInput = styled.input`
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid #d4d4d8;
  outline: none;
`;

export const Input: React.FC<InputProps> = ({ ...InputProps }) => {
  return <SInput {...InputProps} />;
};
