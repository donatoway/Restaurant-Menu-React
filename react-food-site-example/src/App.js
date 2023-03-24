import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/error/Error404';
import Cuisine from './Pages/Cuisine';
import Menu from './components/Menu/menu';
import  Searched  from './Pages/Searched';
import Details from './Pages/Details';
import {Home} from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/search/:searchValue" element={<Searched />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
