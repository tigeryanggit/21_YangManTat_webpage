
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import PageTokyo from './components/PageTokyo';
import PageSeoul from './components/PageSeoul';
import PageBangkok from './components/PageBangkok';
import PageLondon from './components/PageLondon';  
import About from './components/About';   



function App() {

  return (
    <>
      <BrowserRouter>
            
          <Main />
          {/* <PageTokyo /> */}
          {/* <PageSeoul /> */}
          {/* <PageBangkok /> */}
          {/* <PageLondon /> */}
          {/* <About /> */}
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>



      </BrowserRouter>



    </>
  ) 
}

export default App
