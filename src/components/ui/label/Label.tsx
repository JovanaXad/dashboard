import styled from "styled-components";
import { LabelProps } from "./types";

const LabelWrapper = styled.label<{ padding?: string }>`
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Label = ({ children, htmlFor }: LabelProps): JSX.Element => {
  return <LabelWrapper htmlFor={htmlFor}>{children}</LabelWrapper>;
};

export default Label;
