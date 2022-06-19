import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Support from './components/pages/Support';
import Bill from './components/pages/Bill';
import SignUp from './components/pages/SignUp';
import Account from './components/pages/Account';
import Usage from './components/pages/Usage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}  />
          <Route path='/support' element={<Support/>} />
          <Route path='/bill' element={<Bill/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/usage' element={<Usage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
