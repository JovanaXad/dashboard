import { Nav, Logo, Ul, Li, LinkWrapper } from "./styles";
import logoImg from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <Nav>
      <Logo>
        <Image src={logoImg} alt="logo" />
      </Logo>
      <Ul>
        <Li>
          <Link href="/dashboard/title" passHref>
            <LinkWrapper>Title</LinkWrapper>
          </Link>
        </Li>

        {/* <Li>
          <Link href="/dashboard/headings" passHref>
            <LinkWrapper>Headings</LinkWrapper>
          </Link>
        </Li> */}

        {/* <Li>
          <Link href="/dashboard/blog" passHref>
            <LinkWrapper>Blog</LinkWrapper>
          </Link>
        </Li>

        <Li>
          <Link href="/dashboard/events" passHref>
            <LinkWrapper>Events</LinkWrapper>
          </Link>
        </Li>

        <Li>
          <Link href="/dashboard/about" passHref>
            <LinkWrapper>About</LinkWrapper>
          </Link>
        </Li> */}
      </Ul>
    </Nav>
  );
};

export default Navigation;
