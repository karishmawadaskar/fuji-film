import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import  Home from './views/Home/Home';
import Film from './views/EditFilm/EditFilm';
import AddFilm from './views/AddFilm/AddFilm';
import EditFilm from './views/EditFilm/EditFilm';

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
  {
    path:"/film/edit/:id",
    element:<EditFilm/>,
  }
 ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  });

root.render(<RouterProvider router={router}/>);


