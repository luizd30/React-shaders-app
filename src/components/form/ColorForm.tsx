import { useContext } from "react";
import { ColorPicker } from "../colorpicker";
import { Input } from "../input/Input";
import styled from "styled-components";
import { ColorContext, ColorContextType } from "../../context/ColorContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type ColorType = {
  color: string;
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ColorSchema = z.string();

export const ColorForm = () => {
  const { color,setColor } = useContext(ColorContext) as ColorContextType;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ColorType>({ resolver: zodResolver(ColorSchema) });

  const onSubmit: SubmitHandler<ColorType> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ColorPicker />
      <Input register={register} name="color" required value={color}/>
    </Form>
  );
};
