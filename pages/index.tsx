import dynamic from "next/dynamic";
const LoginPage = dynamic(() =>
  import("src/components/frontend").then((module) => module.LoginPage)
);

const Home: React.FC = (): JSX.Element => {
  return <LoginPage />;
};

export default Home;
