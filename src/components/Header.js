import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";
// import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /*
  
  searchCache = {
    "iphone" : ["iphone12","iphone11"]
  }

  searchQuery = iphone

  */

  useEffect(() => {
    // API call
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        // console.log(suggestions); // if searchQuery is ip = ['iphone 15 pro max', 'iphone 15', 'iphone 14 pro max', 'iphone 11', 'iphone 15 pro', 'iphone', 'iphone 13', 'iphone 13 pro max', 'iphone 14', 'iphone 11 pro max']
      } else {
        getSearchSuggention(); // make an api call so that i can update my searchCache
      }
    }, 200); // make this api call after 200ms

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]); // every time my serachQuery changes i hit my api call

  const getSearchSuggention = async () => {
    console.log("API call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]); // json[1] = ['iphone 15 pro max', 'iphone 15', 'iphone 14 pro max', 'iphone 11', 'iphone 15 pro', 'iphone', 'iphone 13', 'iphone 13 pro max', 'iphone 14', 'iphone 11 pro max']

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="slide_menu"
        />
        <a href="/">
          <img
            className="h-12 mx-3"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="youtube_logo_img"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)} // it means focus out
          />

          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"
          alt="user_icon"
        />
      </div>
    </div>
  );
};

export default Header;
