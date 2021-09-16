import React from "react";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";
const TableWidget = dynamic(() =>
  import("src/components/widgets").then((module) => module.TableWidget)
);
import { server } from "config/server";
const url = "/api/headings/update-title";

const HeadingsPage: React.FC<{ headings: object[] }> = ({
  headings,
}): JSX.Element => {
  return <TableWidget data={headings} url={url} />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const apiUrl = `${server}/api/headings`;
  const headings = await fetch(apiUrl).then((res) => res.json());

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { headings },
  };
}

export default HeadingsPage;
