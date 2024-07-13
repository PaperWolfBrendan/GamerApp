import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
