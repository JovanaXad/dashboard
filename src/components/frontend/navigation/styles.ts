import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 20rem;
  box-shadow: 0 1px 1rem rgb(26 26 36 / 15%);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

export const Ul = styled.ul`
  width: 100%;
  background: #ee9a20;
`;

export const Li = styled.li`
  color: white;
  list-style-type: none;
  padding: 1rem;
  border: #f2af4f 0.5px solid;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
`;
