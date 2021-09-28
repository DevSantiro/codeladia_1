import "./style.scss";

interface CardProps {
  data: string;
  titulo: string;
  text: string;
}

export const Card = ({data, titulo, text}: CardProps) => {
  return (
    <div className="card">
      <div className="card_data">
        <span>{data}</span>
        <span><i className="far fa-heart"></i></span>
      </div>
      <div className="card_detais">
        <h3>{titulo}</h3>
        <p>{text}</p>
      </div>

    </div>
  )
}