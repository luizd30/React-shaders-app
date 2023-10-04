import { InputHTMLAttributes, useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

type ColorProp = {
  color: string;
};

type Props = {
  name: keyof ColorProp;
  required?: boolean;
  register: UseFormRegister<ColorProp>;
  color: string;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const SInput = styled.input`
  width: 100px;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid #d4d4d8;
  outline: none;
`;

export const Input: React.FC<InputProps> = ({
  name,
  required,
  register,
  color,
  ...inputProps
}) => {
  const [input, setInput] = useState(color);

  useEffect(() => {
    setInput(color);
  }, [color]);

  return (
    <SInput
      value={input.toUpperCase()}
      {...register(name, {
        required,
        onChange: (e) => setInput(e.target.value),
      })}
      {...inputProps}
    />
  );
};
