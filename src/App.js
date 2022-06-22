
import Card from "./components/Card";

import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [amount, setAmount] = useState(null);
  //const [amountPesos, setAmountPesos] = useState(0);

  const [koders, setKoders] = useState([
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "f",
      photoURL: "https://media4.giphy.com/media/5sYyfIMRcpJWNqdySh/giphy.gif",
    },
  ]);

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => {
      console.log(firstName);
      return (
        <Card
          key={index}
          photoURL={photoURL}
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
        />
      );
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AGREGAR KODER");
    const newKoders = [
      ...koders,
      {
        firstName,
        lastName,
        age,
        gender,
        photoURL,
      },
    ];

    setKoders(newKoders);

    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhotoURL("");
  };

  console.log(koders, "KODERS");

  const USD = 20.21;
  const handleChangeAmount = ({ target: { value } }) => {
    const newAmount = Number(value);
    setAmount(newAmount);
    
  };
  //const Pesos = 20.21;
  //const handleChangeAmountPesos = ({ target: { value } }) => {
   // const newAmountPesos = Number(value);
   // setAmount(newAmountPesos);
    
  //};

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input value={age} onChange={(event) => setAge(event.target.value)} />
        <input
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
        <input
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
        <button type="submit">Agregar Koder</button>
      </form>

      <div>
        <p className="title">
          La cantidad en USD es ${!amount ? "0.00" : (amount / USD).toFixed(2)}
        </p>
        <input type="number" value={amount} onChange={handleChangeAmount} />
      </div>
      <div>
        <p className="title">
          La cantidad en Pesos es ${!amount ? "0.00" : (amount * USD).toFixed(2)}
        </p>
        <input type="number" value={amount} onChange={handleChangeAmount} />
      </div>
    </div>
  );
}

export default App;

