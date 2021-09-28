import { useEffect, useState } from "react";
import "./style.scss";

interface CardProps {
  data: string;
  titulo: string;
  text: string;
}

export const Card = ({data, titulo, text}: CardProps) => {
  const [like, setLike] = useState(0);

  const [icon, setIcon] = useState([
    <i className="far fa-heart"></i>,
    <i className="fas fa-heart"></i>
  ]);

  function alterLike(){
    like ? setLike(0) : setLike(1);
  }
  
  return (
    <div className="card">
      <div className="card_data">
        <span>{data}</span>
        <span onClick={alterLike}>{icon[like]}</span>
      </div>
      <div className="card_detais">
        <h3>{titulo}</h3>
        <p>{text}</p>
      </div>

    </div>
  )
}