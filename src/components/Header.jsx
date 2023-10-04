import React, { useState } from "react";
import { images } from "../constants";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navitem = ({ item }) => {

  const [dropdown,setDropdown] = useState(false);

  const toggleDropdownHand = ()=>{
    setDropdown((curState)=>{
      return !curState;
    })
  }

  return (
    <li className="  relative group">
        {
            item.type === "link" ? <><a href="/" className=" px-4 py-2 ">
            {item.name}
          </a>
          <span className=" cursor-pointer lg:text-blue-500 text-red-500  absolute duration-500  transition-all font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span></>:<div className="flex flex-col item-center">
            <button  className=" px-4 py-2 "
            onClick={toggleDropdownHand}>
            <div className="flex flex-row gap-x-1 items-center">
            {item.name}
            <MdKeyboardArrowDown/>
            </div>
          </button>
          <div className={`${dropdown ? "block":"hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
             <ul className=" bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden ">
                {
                    item.items.map((page)=>{
                        return<>
                        <a href="/" className="hover:bg-dark-hard  hover:text-white px-4 py-2 lg:text-dark-soft ">
                                {
                                    page
                                }
                            </a>
                        </> 
                            
                
                    })
                }
             </ul>
          </div>
           </div>
        }
      
    </li>
  );
};

const NavitemInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact Us"] },
  { name: "Picing", type: "link" },
  { name: "Faq", type: "link" },
];

const Header = () => {
  const [navisvisible, setNavisvisible] = useState(false);

  const NavVisibilityHandler = () => {
    setNavisvisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className=" container m-auto px-5 flex justify-between py-4 items-center">
        <div cla>
          <img className="w-12 " src={images.logo} alt="logo" />
        </div>
        <div className="z-50 lg:hidden">
          {navisvisible ? (
            <MdOutlineCloseFullscreen
              size={25}
              onClick={NavVisibilityHandler}
            />
          ) : (
            <CgMenuGridO size={25} onClick={NavVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navisvisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent flex w-full lg:w-auto  justify-center lg:justify-end flex-col fixed top-0 bottom-0   gap-x-9 items-center lg:static  lg:flex-row z-[49] gap-y-10`}
        >
          <ul
            className={`text-white lg:text-dark-soft flex flex-col lg:flex-row gap-x-2  gap-y-5  font-semibold items-center `}
          >
            {NavitemInfo.map((item) => (
              <Navitem key={item.name} item={item} />
            ))}
          </ul>
          <button className=" border-2 border-blue-500 px-5 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 ">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
