import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar.js";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/slice/sidebarSlice.js";
import { Link } from "react-router-dom";
import { YOU_TUBE_SUGGESTION_API } from "../config.js";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/slice/searchSlice.js";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  function handleSideBarToggle() {
    dispatch(toggleSidebar());
  }

  //useEffect for getting suggestions
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function getSuggestions() {
    const data = await fetch(YOU_TUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestionList(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  }

  return (
    <>
      <nav className="px-4 shadow-lg h-16 bg-white text-black flex justify-between items-center fixed z-20 w-full top-0">
        {/* Logo and SIDEBAR */}
        <div className="flex items-center ">
          <i
            onClick={handleSideBarToggle}
            className="cursor-pointer text-3xl mr-4 px-3 fa-solid fa-bars"
          ></i>

          {/* <Link to={"/"}></Link> */}
          <Link to="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              className="h-14 cursor-pointer"
            />
          </Link>
        </div>

        {/* SearchBar */}
        <div className="w-1/2 border-2 rounded-full border-gray-500 h-[40px] ml-4 flex">
          <input
            className="border outline-none px-2 rounded-l-full grow "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              if (!showSuggestion) setShowSuggestion(true);
            }}
            onBlur={() => {
              if (showSuggestion) setShowSuggestion(false);
            }}
          />
          <button className="px-4">
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </div>

        {/* Search Suggestion */}
        {showSuggestion && (
          <div className="grow fixed top-16 left-[22rem] bg-white py-2  w-[34.5rem] rounded-md shadow-lg z-10 border">
            <ul>
              {suggestionList.map((suggestion, id) => (
                <li
                  key={id}
                  className="py-2 px-4 shadow-sm hover:bg-gray-300 cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* User,Notification */}
        <div className="space-x-6 mr-4">
          <i className="text-3xl  fa-solid fa-video"></i>
          <i className="text-3xl fa-solid fa-bell"></i>
          <i className=" text-3xl fa-solid fa-user"></i>
        </div>
      </nav>

      {<Sidebar toggle={handleSideBarToggle} />}
    </>
  );
};

export default Header;
// {
//   "src": "favicon.ico",
//   "sizes": "64x64 32x32 24x24 16x16",
//   "type": "image/x-icon"
// },
// {
//   "src": "logo192.png",
//   "type": "image/png",
//   "sizes": "192x192"
// },
// {
//   "src": "logo512.png",
//   "type": "image/png",
//   "sizes": "512x512"
// }
