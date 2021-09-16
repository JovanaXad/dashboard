import Head from "next/head";
import dynamic from "next/dynamic";
import { Container } from "src/components/ui";
const Navigation = dynamic(() =>
  import("src/components/frontend").then((module) => module.Navigation)
);
import { useSession } from "next-auth/client";

const Layout: React.FC = ({ children }): JSX.Element => {
  const [session] = useSession();

  return (
    <Container justifyContent="center" alignItem="center">
      <Head>
        <title>Proenglish dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {session && <Navigation />}
      {children}
    </Container>
  );
};

export default Layout;
