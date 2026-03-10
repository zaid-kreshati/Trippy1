import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { FaHouseUser } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Footer from "./Footer/Footer";
const navItems = [
  { icon: FaHouseUser, content: "Home", to: "/" },
  { icon: FaCircleInfo, content: "About", to: "/about" },
  { icon: FaBriefcase, content: "Service", to: "/services" },
  { icon: RiContactsBookFill, content: "Contact", to: "/contact" },
];

const Layout = () => {
  const icons = [
    FaFacebookSquare,
    FaTwitterSquare,
    ImBehance2,
    FaInstagramSquare,
  ];

  return (
    <>
      <NavBar logo="Trippy" items={navItems} btn="Sign Up" />
      <Outlet />
      <Footer
        title="Trippy"
        subTitle="Choose Your Favourite Destination"
        icons={icons}
      />
    </>
  );
};

export default Layout;
