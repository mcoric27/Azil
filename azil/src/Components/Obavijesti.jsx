import React, { useState } from "react";
import "./Obavijesti.css"

function Obavijesti() {
  const [naslov, setNaslov] = useState("");
  const [tekst, setTekst] = useState("");
  const [obavijesti, setObavijesti] = useState([
    {
      id: 1,
      naslov: "Prva obavijest",
      tekst: "Ovo je tekst prve obavijesti.",
      vrijeme: new Date("2023-05-12T10:00:00Z"),
    },
    {
      id: 2,
      naslov: "Druga obavijest",
      tekst: "Ovo je tekst druge obavijesti.",
      vrijeme: new Date("2023-05-10T14:30:00Z"),
    },
    {
      id: 3,
      naslov: "Treća obavijest",
      tekst: "Ovo je tekst treće obavijesti.",
      vrijeme: new Date("2023-05-09T08:45:00Z"),
    },
  ]);
  const [isAdmin, setIsAdmin] = useState(true);

  const handleNaslovChange = (event) => {
    setNaslov(event.target.value);
  };

  const handleTekstChange = (event) => {
    setTekst(event.target.value);
  };

  const handleDodajObavijest = () => {
    const novaObavijest = {
      id: obavijesti.length + 1,
      naslov: naslov,
      tekst: tekst,
      vrijeme: new Date(),
    };
    setObavijesti([novaObavijest, ...obavijesti]);
    setNaslov("");
    setTekst("");
  };

  const handleObrisiObavijest = (id) => {
    if (!isAdmin) {
      alert("Samo admin može brisati obavijesti.");
      return;
    }
  
    setObavijesti((obavijesti) => obavijesti.filter((obavijest) => obavijest.id !== id));
  };
  



  return (
    <div>
      <h1>Obavijesti</h1>
      {isAdmin && (
        <div>
          <h3>Nova obavijest</h3>
          <form>
            <label>
              Naslov:
              <input type="text" value={naslov} onChange={handleNaslovChange} />
            </label>
            <br />
            <label>
              Tekst:
              <textarea value={tekst} onChange={handleTekstChange} />
            </label>
            <br />
            <button type="button" onClick={handleDodajObavijest}>
              Dodaj obavijest
            </button>
          </form>
        </div>
      )}
      <h3>Popis obavijesti</h3>
      {obavijesti.length === 0 ? (
        <p>Trenutno nema obavijesti.</p>
      ) : (
        <ul>
          {obavijesti.map((obavijest) => (
            <li key={obavijest.id}>
              <div>
                <strong>{obavijest.naslov}</strong> -{" "}
                {obavijest.vrijeme.toLocaleString()}
                {isAdmin && (
                  <button onClick={() => handleObrisiObavijest(obavijest.id)}>
                    Obriši
                  </button>
                )}
              </div>
              <div>{obavijest.tekst}</div>
            </li>
          ))}

        </ul>
      )}
    </div>
  );
}
export default Obavijesti;