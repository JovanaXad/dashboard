import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th<{ width?: string }>`
  width: ${({ width }) => width && width};
  background: orange;
  padding: 1rem;
  font-size: 2.5rem;
  text-transform: capitalize;
  color: white;
`;

export const Tr = styled.tr`
  border: 1px solid #ddd;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Td = styled.td<{ width?: string; display?: string }>`
  width: ${({ width }) => width && width};
  padding: 2rem;
  font-size: 2.2rem;
  text-transform: capitalize;
  border: 1px solid #ddd;
  /* &:hover {
    background-color: #ddd;
  } */

  ${({ display }) => {
    if (display) {
      return {
        display: display,
        justifyContent: "center",
        flexDirection: "column",
        border: "none",
      };
    }
  }}
`;
