import { ReactNode, createContext, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export type ColorContextType = {
  color: string;
  newColor: () => void;
  setColor: (color: string) => void;
};

export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorProvider = ({ children }: Props) => {
  const [color, setColor] = useState<string>("");

  const newColor = () => {
    const color = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    setColor(`#${color}`);
  };

  useEffect(() => {
    newColor();
  }, []);

  return (
    <ColorContext.Provider value={{ color, setColor, newColor }}>
      {children}
    </ColorContext.Provider>
  );
};
