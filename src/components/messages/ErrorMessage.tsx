import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Message = styled.p`
  color: #ff5757;
  font-size: 12px;
  font-weight: 500;
`;

export const ErrorMessage = ({ children }: Props) => {
  return <Message>{children}</Message>;
};
