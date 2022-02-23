import { isEmpty } from "lodash";
import Nav from "./nav";

const Header = ({ header, headerMenus }) => {
  console.log('headerMenus', headerMenus)
  if (isEmpty(headerMenus)) {
    return null;
  }
  return (
    <header>
      <Nav header={header} headerMenus={headerMenus} />
    </header>
  );
};

export default Header;
