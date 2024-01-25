import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoList from './components/CryptoList/CryptoList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetchCryptoData();
    const intervalId = setInterval(fetchCryptoData, 30000); 

    return () => clearInterval(intervalId); 
  }, []);

  const fetchCryptoData = () => {
    fetch('https://api.coincap.io/v2/assets')
      .then((res) => res.json())
      .then((data) => setCryptos(data.data));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CryptoList cryptos={cryptos} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;