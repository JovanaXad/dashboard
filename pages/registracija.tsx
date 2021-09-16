import dynamic from "next/dynamic";
const RegisterPage = dynamic(() =>
  import("src/components/frontend").then((module) => module.RegisterPage)
);

const Registracija: React.FC = (): JSX.Element => {
  return <RegisterPage />;
};

export default Registracija;
