import React from 'react';
import UserIcon from '../assets/images/UseIconLogo.png';
const ChartMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm px-2 ">
      <img className="h-8 py-1 ml-1" alt="user-icon" src={UserIcon} />
      <span className="mx-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChartMessage;
