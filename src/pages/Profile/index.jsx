import { Link } from "react-router-dom";
import "./Profile.css"
export default function Profile() {
    return (
      <div className="profile-container">

        <img  alt=""id="pictureP" src="https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg"></img>

        <div className="name">Aaron Enciso</div>
        <div className="age">21</div>
        <div className="education">Estudiante en Kodemia</div>
        <div className="email">aaron@gmail.com</div>
        <div className="phone">6691008819</div>
        <div className="hello">Hola, soy Aaron y este es mi perfil de Aaron Page!!</div>
        <Link to="editP"><button className="boton">Editar perfil</button></Link>

        
        
        
      </div>
      
    );
  }