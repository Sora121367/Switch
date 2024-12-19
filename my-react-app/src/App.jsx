import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import Narbar from "./component/Narbar";
import CategoryCard from "./component/CategoryCard";

import SellerPage from "./Page/SellerPage";
import SellerDashboard from "./Page/SellerDashboard";
import Messages from "./component/SellerUI/Message";
import Login from "./component/Login";

const App = function () {
  return (
    // <BrowserRouter>
    //   <Narbar />
    //   {/* <Routes>
    //     <Route path='/' element={<HomePage />} />
    //   </Routes> */}
    // </BrowserRouter>
    <>
       {/* <Narbar />  */}
       {/* <Login/> */}
      {/* <HomePage />  */}
      {/* <CategoryCard/> */}
       {/* <SellerPage/> */}
      <SellerDashboard />
      
    </>
  );
};

export default App;
