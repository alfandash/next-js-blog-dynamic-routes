import { isEmpty } from "lodash";
import { useRouter } from 'next/router';
import client from "../src/apollo/client";
import { GET_PAGE } from '../src/apollo/queries/pages/get-page';
import { GET_PAGES_URI } from "../src/apollo/queries/pages/get-pages";
import Layout from '../src/components/layout';
import {sanitize} from '../src/utils/miscellaneous';

const Pages = ({data}) => {
  console.log('data', data)
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading....</div>
  }
  return (
    <Layout data={data}>
			<div dangerouslySetInnerHTML={{__html: sanitize( data?.page?.content ?? {} )}}/>
		</Layout>
  )
};

export default Pages;

export async function getStaticProps({params}) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  });

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };

}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
