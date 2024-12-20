import HomePage from "./component/HomePage.jsx";
//all files from authentication page
import Login from './authentication-page/login.jsx'
import SignUp from './authentication-page/SignUp.jsx'
import ForgotPassword from './authentication-page/ForgotPassword.jsx'
import ResetPassword from './authentication-page/ResetPassword.jsx'
import Verification from './authentication-page/Verification.jsx'
import NotFoundPage from './authentication-page/NotFound.jsx'
import Role from './authentication-page/Role.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Narbar from "./component/Narbar";
// import CategoryCard from "./component/CategoryCard";

import SellerPage from "./Page/SellerPage";
// import SellerDashboard from "./Page/SellerDashboard";
// import Messages from "./component/SellerUI/Message";
// import Login from "./component/Login";


const App = function () {
  // create route for application using createBrowserRouter
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
      errorElement:<NotFoundPage/>,
    },
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/forgotpassword',
      element:<ForgotPassword/>,
    },
    {
      path:'/signup',
      element:<SignUp/>,
    },
    {
      path:'/resetpassword',
      element:<ResetPassword/>,
    },
    {
      path:'/verification',
      element:<Verification/>,
    },
    {
      path:'/role',
      element:<Role/>,
    },
    {
      path:'/seller',
      element:<SellerPage/>
    },
    {
      path:'/customer',
      element:<h1>Customer Page</h1>,
    }
  ]);
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
