import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
import Search from './pages/Search';

function App() {
  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path='/' element={<Homescreen />}></Route>
       <Route path='/details/:type/:id' element={<Details />}></Route>
       <Route path='/browse/:type' element={<Browse />}></Route>
       <Route path='/browsebygenre/:type/:genreid' element={<BrowseByGenre />}></Route>
       <Route path='/search' element={<Search />}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
