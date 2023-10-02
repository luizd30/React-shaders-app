import { ReactNode } from "react";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  padding: 24px 48px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d4d4d8;
  background: #fff;
`;

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return <SHeader>{children}</SHeader>;
};
