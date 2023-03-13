import React from 'react';
import { Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <div>About</div>
      <Outlet />
    </div>
  );
}

export default About;
