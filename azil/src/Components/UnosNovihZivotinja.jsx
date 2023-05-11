import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UnosNovihZivotinja = () => {
  const { isAdmin } = useContext(UserContext);
  const [zivotinja, setZivotinja] = useState({
    ime: "",
    vrsta: "",
    godine: "",
    udomljen: false,
    napomena: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setZivotinja((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setZivotinja((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/zivotinje", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(zivotinja)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setZivotinja({
      ime: "",
      vrsta: "",
      godine: "",
      udomljen: false,
      napomena: "",
    });
  };

  return (
    <div>
        {isAdmin ? (
            <div>
            <h2>Unos nove životinje</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Ime:
                <input
                type="text"
                name="ime"
                value={zivotinja.ime}
                onChange={handleInputChange}
                required
              />
              </label>
              <br />
              <label>
                Vrsta životinje:
              <select name="vrsta" value={zivotinja.vrsta} onChange={handleInputChange} required>
                <option value="">Odaberi vrstu životinje</option>
                <option value="mačka" label="mačka">Mačka</option>
                <option value="pas" label="pas"> Pas</option>
                <option value="ptica" label="ptica">Ptica</option>
                <option value="riba" label="riba">Riba</option>
              </select>
              </label>
              <br />
              <label>
              Godine životinje:
              <input
                type="number"
                name="godine"
                value={zivotinja.godine}
                onChange={handleInputChange}
                required
              />
              </label>
              <br />
              <label>
                Udomljen:
                <input
                type="checkbox"
                name="udomljen"
                checked={zivotinja.udomljen}
                onChange={handleCheckboxChange}
              />
              </label>
              <br />
              <label>
                Napomena:
                <textarea name="napomena" value={zivotinja.napomena} onChange={handleInputChange} />
              </label>
              <br />
              <button type="submit">Spremi</button>
            </form>
          </div>
        ) : (
        <div>Morate biti prijavljeni kao administrator.</div>
        )}
    </div>
  );
};

export default UnosNovihZivotinja;
