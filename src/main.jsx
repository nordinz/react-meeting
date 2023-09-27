import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import FavoritesPage from './routes/Favorites';
import AllMeetupsPage from './routes/AllMeetups';
import NewMeetupPage from './routes/NewMeetup';
import Root from './routes/Root';
import { FavoritesContextProvider } from './store/favorites-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/favorites',
        element: <FavoritesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/new-meetup',
        element: <NewMeetupPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/',
        element: <AllMeetupsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <RouterProvider router={router} />
    </FavoritesContextProvider>
  </React.StrictMode>
);
