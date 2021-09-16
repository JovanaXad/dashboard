import styled from "styled-components";

export default styled.div<{
  height?: string;
  column?: boolean;
  justifyContent?: string;
  alignItem?: string;
  maxWidth?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  align-items: ${(props) => (props.alignItem ? props.alignItem : "normal")};
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  width: 100vw;
  height: ${(props) => props.height && props.height};
  padding: ${(props) => props.padding && props.padding};
  /* outline: 1px solid red; */
`;
