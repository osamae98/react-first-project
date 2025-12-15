import { Routes, Route } from "react-router-dom";

import Navbar from "./compomemts/Navbar/Navbar";
import Footer from "./compomemts/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
