import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import Narbar from "./component/Narbar";
import CategoryCard from "./component/CategoryCard";

const App = function () {
	return (
    // <BrowserRouter>
    //   <Narbar />
    //   {/* <Routes>
    //     <Route path='/' element={<HomePage />} />
    //   </Routes> */}
    // </BrowserRouter>
    <>
      <Narbar />
      <HomePage />
      {/* <CategoryCard/> */}
    </>
  );
};

export default App;
