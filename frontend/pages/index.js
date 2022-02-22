import Head from "next/head";
import Image from "next/image";
import client from "../src/apollo/client";
import { GET_MENUS } from "../src/apollo/queries/get-menu";
import Layout from "../src/components/layout";

export default function Index({ data }) {

  return (
    <>
      <Layout data={data}>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-600">
            Hello World
          </h3>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { data, loading, netWorkStatus } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: {
        menus: {
          headerMenus: data?.headerMenus?.edges || {},
          footerMenus: data?.footerMenus?.edges || {},
        },
      },
    },
  };
}
