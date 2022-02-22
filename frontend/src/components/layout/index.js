import Header from "./header";

const Layout = ({ children, data }) => {
  return (
    <>
      <div>
        <Header headerMenus={data?.menus?.headerMenus}/>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
