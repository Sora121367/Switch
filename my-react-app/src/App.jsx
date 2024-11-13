import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import Narbar from './component/Narbar';

function App() {
  return (
    // <BrowserRouter>
    //   <Narbar />
    //   {/* <Routes>
    //     <Route path='/' element={<HomePage />} />
    //   </Routes> */}
    // </BrowserRouter>
    <>
    <Narbar/>
    </>
  );
}

export default App;
