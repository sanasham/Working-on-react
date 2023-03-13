import React, { useEffect, useState } from 'react';
import { Restraurant_API_URL } from '../../constants';

export const useRestaurants = (id) => {
  const [myRestaurants, setMyRestaurants] = useState(null);

  useEffect(() => {
    getRestarentInfo();
    console.log(id);
  }, []);
  async function getRestarentInfo() {
    const response = await fetch(Restraurant_API_URL + id);
    const data = await response.json();
    setMyRestaurants(data?.data);
    return myRestaurants;
  }
};
