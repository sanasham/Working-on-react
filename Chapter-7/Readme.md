1) component will always render when change of state of varible in the componet
1) if you don't pass any dependecy useEffect will call every rerender
2) if we pass as empty array it means no dependency , useEffect will call once after initial render.
3) if we pass some dependency variable, useEffect will call every change of state of variable.
4) we can create more than one useEffect



Note: never create a component inside component
      you can componse component if you want 

Hooks conditions:
1) never ever create useState inside if condition
2) never write useState inside for loop
3) useState is a hook that react gives us to create local state varible inside component, never create a useState outside of fuctional component



How do i import my images locally?
why do use CDN to store images?
 CDN is the best place to store the images as it optimised images in CDN. because we don't to need them optimised inside our browser when it render.

Note:formik is the best library to create forms in react. it is open source library


Finding Path: 

react-router : version 6

npm i react-router-dom

it will add into package.json as dependency

react router configuration:
---------------------------
how many routers are available in react-router-dom?
mainly 3
1) createBrowserRouter
2) createMemoryRouter
3) createHashRouter

but react recommended one is for all react projects : createBrowserRouter

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    errorElement: <Error />,
  },
  {
    path: '/About',
    element: <About />,
  },
]);

root.render(<RouterProvider router={appRouter} />);

SPA: single page application
if we use anchor tag -- it load whole page


there are 2 types of routings:
1) client side routing    -----  it get from our code
2) server side routing    ---- all are pages coming from server , it means when we request a page it loads all html, css from server.

<Link> tag --- ultimately anchor tag ---which was made by remix --in react router dom

<Outlet>  --- all the childerence going into the outlet

Dynamic Segments  == Dynamic routings







