import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { action, originals } from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/footer/footer'; // Import Footer

import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Banner />
        <RowPost url={originals} title="Netflix Originals" />
        <RowPost url={action} title="Action" isSmall />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

