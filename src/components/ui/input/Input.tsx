import styled from "styled-components";
import { InputProps } from "./types";

const InputWrapper = styled.input`
  padding: 1rem;
`;

const Input = ({ register, type }: InputProps): JSX.Element => {
  return <InputWrapper type={type} {...register} />;
};

export default Input;
