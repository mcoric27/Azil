import React from 'react';
import { Link } from 'react-router-dom';
import OpciPodaci from './OpciPodaci';
import PopisZivotinja from './PopisZivotinja';
import Donacije from './Donacije';
import UnosNovihZivotinja from './UnosNovihZivotinja';
import './Home.css'


function Home() {
  return (
    <div>
      <h1>Azil za životinje</h1>
      <ul>
        <li><Link to="/oNama">O nama</Link></li>
        <li><Link to="/PopisZivotinja">Popis životinja</Link></li>
        <li><Link to="/Donacije">Donacije</Link></li>
        <li><Link to="/Obavijesti">Obavijesti</Link></li>
        <li><Link to="/UnosNovihZivotinja">Unos novih životinja</Link></li>
      </ul>
    </div>
  );
}

export default Home;
