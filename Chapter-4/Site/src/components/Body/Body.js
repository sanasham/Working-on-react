import React, { useEffect, useState } from 'react';
import { RestrauntList } from '../../constants';
import RestrauntCard from '../RestrauntCard/RestrauntCard';
import Simmer from '../Shimmer/Simmer';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';

const filterData = (searchText, restaurents) => {
  if (searchText != '') {
    console.log('searchText', searchText);
    const filteredData = restaurents.filter((restaurent) =>
      restaurent?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log('filteredData', filteredData);
    return filteredData;
  } else {
    return restaurents;
  }
};

const Body = () => {
  const [allRestraurents, setAllRestraurents] = useState([]);
  const [filteredRestraurents, setFilteredRestraurents] = useState([]);
  let [searchText, setSearchText] = useState('');

  async function getRestaurents() {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await response.json();
    setAllRestraurents(json?.data?.cards[2]?.data.data?.cards);
    setFilteredRestraurents(json?.data?.cards[2]?.data.data?.cards);
    console.log('data', json);
    console.log('allRestraurents', json?.data?.cards[2]?.data.data?.cards);
  }

  const offline = useOnline();
  if (!offline) {
    return <h1>You are offline!!, please check your internet connection</h1>;
  }

  useEffect(() => {
    getRestaurents();
  }, []);

  const OnChangeInput = (e) => setSearchText(e.target.value);
  console.log('render');

  return filteredRestraurents.length === 0 ? (
    <Simmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          className="search-input"
          placeholder="search"
          id="search"
          value={searchText}
          onChange={OnChangeInput}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestraurents);
            setFilteredRestraurents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restarent-constainer">
        {filteredRestraurents.map((x, i) => {
          return (
            <Link to={'restaurants/' + x.data.id} key={x.data.id}>
              <RestrauntCard {...x.data} key={x.data.cloudinaryImageId} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
