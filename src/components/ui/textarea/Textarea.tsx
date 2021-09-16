import React from "react";
import styled from "styled-components";

const TextareaWrapper = styled.textarea`
  color: red;
  width: 70rem;
  font-size: 2rem;
  padding: 0.5rem;
`;

const Textarea: React.FC<{ defaultValue: string; rows: number }> = (
  props
): JSX.Element => {
  return <TextareaWrapper {...props} />;
};

export default Textarea;
