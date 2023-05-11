import { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import OpciPodaci from './Components/OpciPodaci';
import PopisZivotinja from './Components/PopisZivotinja';
import Donacije from './Components/Donacije';
import Obavijesti from './Components/Obavijesti';
import UnosNovihZivotinja from './Components/UnosNovihZivotinja';
import { UserContext, UserProvider } from './Components/UserContext';
import Header from './Components/Header';


function App() {
  const { userRole, setUserRole } = useContext(UserContext);

  return (
  <UserProvider>
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oNama" element={<OpciPodaci />} />
          <Route path="/PopisZivotinja" element={<PopisZivotinja />} />
          <Route path="/Donacije" element={<Donacije />} />
          <Route path="/Obavijesti" element={<Obavijesti />} />
          <Route path="/UnosNovihZivotinja" element={<UnosNovihZivotinja />} />
        </Routes>
      </Router>
    </div>
  </UserProvider>

  )
}

export default App;