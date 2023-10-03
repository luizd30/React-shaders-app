import { InputHTMLAttributes, useContext } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { ColorContext, ColorContextType } from "../../context/ColorContext";

type ColorProp = {
  color: string;
};

type Props = {
  name: keyof ColorProp;
  required?: boolean;
  register: UseFormRegister<ColorProp>;
  onChange?: () => void;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const SInput = styled.input`
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid #d4d4d8;
  outline: none;
`;

export const Input: React.FC<InputProps> = ({
  name,
  required,
  register,
  onChange,
  ...inputProps
}) => {
  const { setColor } = useContext(ColorContext) as ColorContextType;
  return (
    <SInput
      {...register(name, {
        required,
        onChange: (e) => setColor(e.target.value),
      })}
      {...inputProps}
    />
  );
};
