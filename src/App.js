import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { action, originals } from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/footer/footer'; // Import Footer
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/netflix-clone"> {/* Replace with your repository name */}
      <div className="App">
        <NavBar />
        <Banner />
        <RowPost url={originals} title="Netflix Originals" />
        <RowPost url={action} title="Action" isSmall />
        <Footer /> {/* Include Footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
