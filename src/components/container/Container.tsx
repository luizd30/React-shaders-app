import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = ({ children }: Props) => {
  return <SContainer>{children}</SContainer>;
};
