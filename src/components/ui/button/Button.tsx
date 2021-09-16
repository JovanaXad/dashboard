import styled from "styled-components";
import { ButtonProps } from "./types";

const ButtonWrapper = styled.button<{ width?: string }>`
  border: none;
  padding: 1rem 2rem;
  background-color: orange;
  color: white;
  transition: 1s all;
  cursor: pointer;
  font-size: 1.5rem;
  width: ${({ width }) => width && width};

  :hover {
    background-color: #ba8421;
  }
`;

const Button = ({
  children,
  type,
  width,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper width={width} type={type} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
