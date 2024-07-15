import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/about";
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
      }> 
      </Route>

      <Route path="/about" element={<><Navbar/><About/></>}></Route>
      <Route path="/contact" element={<><Navbar/><Contact/></>}></Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}
