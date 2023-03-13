import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../../constants';
import Shimmer from '../Shimmer/Simmer';
import { useRestaurants } from '../Utils/useRestaurant';
function RestrarentMenu() {
  // how to read the dynamic url
  const parasms = useParams();
  const { id } = parasms;

  const myRestaurants = useRestaurants(id);

  return !myRestaurants ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>RestrarentMenu id:{myRestaurants.id}</h1>
        <h1>{myRestaurants.name}</h1>
        <img src={IMG_CDN_URL + myRestaurants.cloudinaryImageId} />
        <h3>{myRestaurants.area}</h3>
        <h3>{myRestaurants.costForTwo}</h3>
        <h3>{myRestaurants.avgRating}</h3>
      </div>
      <div>
        <h1>menu items</h1>
        {Object.values(myRestaurants?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
}

export default RestrarentMenu;
