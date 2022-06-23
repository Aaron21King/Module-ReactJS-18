import { Outlet, Link } from "react-router-dom";
import "./AppContainer.css";

export default function AppContainer() {
  return (
    <div>
      <nav>
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="profile">Profile</Link>
        <Link to="editP">Editar Perfil</Link>
      </nav>
      <Outlet />
    </div>
  );
}