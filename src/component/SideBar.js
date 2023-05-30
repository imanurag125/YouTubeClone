import React from "react";
import { useSelector } from "react-redux";
import { exploreLink, mainLinks, secondaryLinks } from "../config";

const Sidebar = (props) => {
  const isOpen = useSelector((store) => store.sidebar.isSideBarOpen);
  const style = {
    left: isOpen ? "0" : "-100%",
  };
  return (
    <>
      <div
        style={style}
        className="transition-all duration-700 ease-linear box-border w-[280px] h-screen fixed top-0 left-0 text-black bg-gray-200 overflow-auto "
      >
        <div className=" px-4 flex h-14 items-center">
          <i
            onClick={props.toggle}
            className="cursor-pointer text-3xl mr-4 px-3 fa-solid fa-bars"
          ></i>

          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            className="h-14 "
          />
        </div>

        <div className="p-3 text-black ">
          {/* Primary Links */}
          <div className="border-b border-black pb-3 mb-6">
            {mainLinks.map((ele, idx) => (
              <div
                key={idx}
                className="cursor-pointer flex items-center mb-1.5 justify-start text-xl font-semibold px-3 h-12 hover:bg-slate-400 rounded-lg"
              >
                <i className={`${ele.icon} text-xl mr-6`}></i>
                {ele.name}
              </div>
            ))}
          </div>

          {/* Secondary Navbar */}
          <div className="border-b border-black pb-3 mb-6">
            {secondaryLinks.map((ele, idx) => (
              <div
                key={idx}
                className="cursor-pointer flex items-center mb-1.5 justify-start text-xl font-semibold px-3 h-12 hover:bg-slate-400 rounded-lg"
              >
                <i className={`${ele.icon} text-xl mr-6`}></i>
                {ele.name}
              </div>
            ))}
          </div>

          <div className="">
            {exploreLink.map((ele, idx) => (
              <div
                key={idx}
                className="cursor-pointer flex items-center mb-1.5 justify-start text-xl font-semibold px-3 h-12 hover:bg-slate-400 rounded-lg"
              >
                <i className={`${ele.icon} text-xl mr-6`}></i>
                {ele.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
