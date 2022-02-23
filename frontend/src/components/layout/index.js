import Head from 'next/head';
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, data }) => {
  return (
    <>
      <div>
        <Head>
          <link rel="shortcut icon" href={ data?.header?.favicon} />
        </Head>
        <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
        <div>{children}</div>
        <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
      </div>
    </>
  );
};

export default Layout;
