import styled from "styled-components";

type Props = {
  message: string;
};

const Message = styled.p`
  color: #ff5757;
  font-size: 12px;
  font-weight: 500;
`;

export const ErrorMessage = ({ message }: Props) => {
  return <Message>{message}</Message>;
};
