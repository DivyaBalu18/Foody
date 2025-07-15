import logo from "../../public/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { IoSearch, IoCartOutline, IoHelpBuoyOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="flex justify-between mt-5">
      <div className="w-10 m-1 ml-10 ">
        <img src={logo} />
      </div>
      <div className="flex justify-around text-2xl font-normal mr-10">
        <div className="flex justify-between m-3 mr-8 text-2xl hover:text-orange-400 hover:cursor-pointer ">
          <IoSearch className="mr-1 font-black" />
          <span className="text-lg">Search</span>
        </div>
        <div className="flex justify-between m-3 mr-8 text-2xl hover:text-orange-400 hover:cursor-pointer  ">
          <FaRegUser className="mr-1 font-normal " />
          <span className="text-lg">Sign In</span>
        </div>

        <div className="flex justify-between m-3 mr-8 text-2xl hover:text-orange-400 hover:cursor-pointer ">
          <IoCartOutline className="mr-1 font-normal" />
          <span className="text-lg">Cart</span>
        </div>

        <div className="flex justify-between m-3  text-2xl hover:text-orange-400 hover:cursor-pointer ">
          <IoHelpBuoyOutline className="mr-1 font-black" />
          <span className="text-lg">Help</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
