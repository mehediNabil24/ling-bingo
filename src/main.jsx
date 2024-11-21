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
import LearningDetails from './Components/LearningDetails.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';
import MyProfile from './Components/MyProfile.jsx';
import Error from './Components/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('/feedback.json')

      },
      {
        path: '/start-learning',
        element: <StartLearning></StartLearning>,
        loader: ()=> fetch('/japan.json')

      },
      {
        path: '/tutorial',
        element: <PrivateRoutes><Tutorials></Tutorials></PrivateRoutes>
      },
      {
        path:'/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path:'/details/:id',
        element: <PrivateRoutes><LearningDetails></LearningDetails></PrivateRoutes>,
        loader: async ({params})=>{
          const res = await fetch('/japan.json');
          const data = await res.json();
          const singleData = data.find(d=>d.id==params.id)
          console.log('data',data)
          console.log('params',params.id)
          console.log('single',singleData)
          return singleData;
          
        },
        
      },
      {
        path:'/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/my-profile',
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
