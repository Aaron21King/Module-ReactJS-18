import "./CardIC.css";

export default function CardIC({
    firstName,
    lastName,
    age,
    gender,
  }) {
    return (
        <div className="card-item-content">
            <p className="title"></p>
            <p className="content">
                {firstName} {lastName}
            </p>
        <div className="card-item-content">
          <p className="title">Edad</p>
          <p className="content">{age}</p>
        </div>
        <div className="card-item-content">
          <p className="title">Gender</p>
          <p className="content">{gender === "m" ? "Masculino" : "Femenino"}</p>
        </div>
        </div>
      
    );
  }