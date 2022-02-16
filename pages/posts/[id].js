import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { useRouter } from "next/router";

// Add this import
import Date from "../../components/date";

// Add this import at the top of the file
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (Object.keys(postData).length === 0) {
    return <Layout>404 Page Not Found</Layout>;
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        {/* <Date dateString={postData.date} /> */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  console.log(paths, "paths");
  
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  console.log(params, "params", postData);

  return {
    props: {
      postData: postData || {},
    },
    revalidate: 1,
  };
}
