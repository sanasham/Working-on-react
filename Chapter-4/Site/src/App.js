import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import '/src/App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/Navigation/About';
import Error from './components/Error/Error';
import Contact from './components/Navigation/Contact';
import RestrarentMenu from './components/RestarentsMenus/RestrarentMenu';
import Profile from './components/ClassBasedComponents/Profile';

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: <Error />,
    children: [
      {
        path: '/About',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile name="Sayyed" />,
          },
        ],
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:id',
        element: <RestrarentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//async defer

root.render(<RouterProvider router={appRouter} />);
