import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Shoping from './Shoping';
import Usestate from './Usestate';
import UseEffect from './UseEffect';
import About from './About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route index element={<Home/>} />
        <Route path="/shoping" element={<Shoping />}></Route>
        <Route path="/about" element={<About  />}></Route>
        <Route path="/useeffect" element={<UseEffect />}></Route>
        <Route path="/usestate" element={<Usestate />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
