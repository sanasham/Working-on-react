import React from 'react';
import Search from './Search';
import CardItems from './Card-items';
import Services from './Services';

const Body = () => {
  return (
    <div className="m-2">
      <Search />
      <Services />
      <CardItems />
    </div>
  );
};

export default Body;
