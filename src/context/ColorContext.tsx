import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export type ColorContextType = {
  color: string;
  newColor: () => void;
};

export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorProvider = ({ children }: Props) => {
  const [color, setColor] = useState<string>("");

  const newColor = () => {
    const color = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    setColor(color);
  };

  return (
    <ColorContext.Provider value={{ color, newColor }}>
      {children}
    </ColorContext.Provider>
  );
};
