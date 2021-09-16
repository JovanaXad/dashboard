import React from "react";
import styled from "styled-components";
import { FormProps } from "./types";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form = ({ onSubmit, children }: FormProps): JSX.Element => {
  return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
};

export default Form;
