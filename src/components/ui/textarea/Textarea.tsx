import React, { forwardRef } from "react";
import styled from "styled-components";

const TextareaWrapper = styled.textarea`
  color: red;
  width: 70rem;
  font-size: 2rem;
  padding: 0.5rem;
`;

// export const Textarea: React.FC<{ defaultValue: string; rows: number }> = (
//   props
// ): JSX.Element => {
//   return <TextareaWrapper {...props} />;
// };

// export const TextareaComponent: React.FC<{
//   defaultValue: string;
//   rows: number;
// }> = (props): JSX.Element => {
//   return <TextareaWrapper {...props} />;
// };

// type ComponentProps =  React.InputHTMLAttributes<HTMLInputElement>

interface PropsType {
  defaultValue: string;
  rows: number;
}

const handlerTextArea = (Component: any | any, props: PropsType, ref: any) => {
  return <Component {...props} ref={ref} />;
};

export const Textarea = React.forwardRef((props: PropsType, ref) =>
  handlerTextArea(TextareaWrapper, props, ref)
);
