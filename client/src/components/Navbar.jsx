import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/images/logo.png";
const navItems = ["Market", "Exchange", "Tutorials", "Wallet"];

const NavbarItem = ({ title, classProps }) => {
  return (
    <li
      className={`mx-4 cursor-pointer ${classProps}`}
      eventKey={`${title}_${classProps}`}>
      {title}
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="Company Logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navItems.map((item, index) => {
          return <NavbarItem title={item} classProps={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
