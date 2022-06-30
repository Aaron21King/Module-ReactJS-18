import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/users";
import { deleteList as deleteUsers } from "../../../services/users";

import "./Detail.css";

export default function ProfileDetail() {

  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const data = await retrieveUser(id);
     
      setTimeout(() => {
        setUser(data);
      }, 1000);
      console.log(data);
    };

    getUser();
  }, []);



  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <img src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <button onClick={() => navigate(-1)}>Regresar</button>
          <button onClick={() => navigate(1)}>Delete</button>
        </div>
      )}
    </div>
  );
}

// EJERCICIO: EDIT PROFILE
// 1. Recibir variable de la URL
// 2. Consultar la información en la DB (firebase)
// 3. Cuando se tenga disponible la información,
// ACTUALIZAR EL ESTADO DE LOS INPUTS
// 4. Crear formulario
// 5. Enviar PATCH a firebase
