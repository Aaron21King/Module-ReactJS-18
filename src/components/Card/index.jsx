import CardIC from "../CardItemContent";
import "./Card.css";

export default function Card({
  photoURL,
  
}) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img alt="profile" src={photoURL} className="card-image" />
      </div>
      <div className="card-content">
        <CardIC className="card-item-content" ></CardIC>

      </div>
    </div>
  );
}