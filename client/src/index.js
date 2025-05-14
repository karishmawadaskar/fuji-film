import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import  Home from './views/Home/Home';
import Film from './views/Film/Film';
import AddFilm from './views/AddFilm/AddFilm';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
   {
    path:"/home",
    element:<Home />,
  },
  {
    path:"/film/:id",
    element:<Film/>,
  },
  {
    path:"/addfilm",
    element:<AddFilm/>,
  },
 ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  });

root.render(<RouterProvider router={router}/>);


