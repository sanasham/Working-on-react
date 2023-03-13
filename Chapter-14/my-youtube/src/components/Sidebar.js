import React from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg col-span-1">
      <MenuItems />
    </div>
  );
};

export default Sidebar;
