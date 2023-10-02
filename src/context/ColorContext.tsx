import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ColorContextType = {color: string};

export const ColorContext = createContext<ColorContextType|null>(null);

export const ColorProvider = ({ children }: Props) => {
  const [color, setColor] = useState("#A855F7");
  return (
    <ColorContext.Provider value={{ color }}>{children}</ColorContext.Provider>
  );
};
