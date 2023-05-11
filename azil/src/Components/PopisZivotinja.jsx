import { useState, useEffect } from "react";
import axios from "axios";
import './PopisZivotinja.css';

function PopisZivotinja({ zivotinje }) {
  const [data, setData] = useState([]);
  const [filterVrsta, setFilterVrsta] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("db.json");
      setData(result.data.zivotinje);
    };
    fetchData();
  }, []);

  const filteredData = data
    .filter((zivotinja) =>
      filterVrsta ? zivotinja.vrsta === filterVrsta : true
    )
    .filter((zivotinja) =>
      filterStatus
        ? zivotinja.udomljen === (filterStatus === "udomljena")
        : true
    )
    .filter((zivotinja) =>
      searchTerm
        ? zivotinja.ime.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );

  return (
    
    <div className="animal-list-container">
      <h1 className="animal-list-title">Popis životinja u azilu</h1>
      <div className="animal-list-filters">
        <div className="animal-list-filter">
          <label htmlFor="filter-vrsta">Vrsta:</label>
          <select
            id="filter-vrsta"
            value={filterVrsta}
            onChange={(e) => setFilterVrsta(e.target.value)}
          >
            <option value="">Sve vrste</option>
            <option value="mačka">Mačka</option>
            <option value="pas">Pas</option>
            <option value="ptica">Ptica</option>
          </select>
        </div>
        <div className="animal-list-filter">
          <label htmlFor="filter-status">Status:</label>
          <select
            id="filter-status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Svi statusi</option>
            <option value="udomljena">Udomljene</option>
            <option value="nije-udomljena">Nisu udomljene</option>
          </select>
        </div>
        <div className="animal-list-filter">
          <label htmlFor="search">Pretraga:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <table className="animal-list-table">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Vrsta</th>
            <th>Godine</th>
            <th>Status udomljavanja</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((zivotinja) => (
            <tr
              key={zivotinja.id}
              className={zivotinja.udomljen ? "udomljena" : "nije-udomljena"}
            >
              <td>{zivotinja.ime}</td>
              <td>{zivotinja.vrsta}</td>
              <td>{zivotinja.godine}</td>
              <td>{zivotinja.udomljen ? "Udomljena" : "Nije udomljena"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PopisZivotinja;