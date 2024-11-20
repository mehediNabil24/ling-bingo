import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout.jsx';
import Home from './Components/Home.jsx';
import StartLearning from './Components/StartLearning.jsx';
import Tutorials from './Components/Tutorials.jsx';
import AboutUs from './Components/AboutUs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/start-learning',
        element: <StartLearning></StartLearning>

      },
      {
        path: '/tutorial',
        element: <Tutorials></Tutorials>
      },
      {
        path:'/about-us',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
