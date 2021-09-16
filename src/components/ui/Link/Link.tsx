import { LinkProps } from "./types";
import Link from "next/link";
import styled from "styled-components";

const AWrapper = styled.a<{ width?: string; margin?: string; hover?: boolean }>`
  padding: 1rem;
  color: #e0a327;
  font-size: 1.7rem;
  border: 1px solid orange;
  cursor: pointer;
  text-align: center;
  width: ${({ width }) => width && width};
  margin: ${({ margin }) => margin && margin};
  transition: 0.5s all;

  :hover {
    background: ${({ hover }) => hover && "orange"};
    color: ${({ hover }) => hover && "white"};
  }
`;

const LinkUi = ({
  children,
  href,
  width,
  margin,
  hover,
}: LinkProps): JSX.Element => {
  return (
    <Link href={href} passHref>
      <AWrapper margin={margin} width={width} hover={hover}>
        {children}
      </AWrapper>
    </Link>
  );
};

export default LinkUi;
