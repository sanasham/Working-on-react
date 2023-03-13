import React, { useEffect, useState } from 'react';
import HamburgLogo from '../assets/images/hamburger-menu-fold.png';
import YoutubeLogo from '../assets/images/youtube-logo-png-46020.png';
import UserIcon from '../assets/images/UseIconLogo.png';
import SearchIcon from '../assets/images/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggelMenu } from '../utils/appSlice';
import { YOUTUBE_AUTO_SUGGETION_API_URL } from '../utils/constants';
import AutoImage from '../assets/images/Auto-search-icon.png';
import { cacheResults } from '../utils/searchSlice';
const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_AUTO_SUGGETION_API_URL + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  const searchChache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchChache[searchQuery]) {
        setSuggestions(searchChache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggelMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu-logo"
          onClick={() => toggleMenuHandler()}
          src={HamburgLogo}
        />
        <a href="#">
          <img className="h-8 mx-2" alt="youtube-logo" src={YoutubeLogo} />
        </a>
      </div>

      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onScroll={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-50">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 mx-2 px-2 w-[43.7rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion + 1}
                  className="py-2 shadow-sm hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className=" col-span-1">
        <img className="h-8" alt="user-icon" src={UserIcon} />
      </div>
    </div>
  );
};

export default Head;
