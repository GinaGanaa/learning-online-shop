import "./Card.css";
function Card({ product }) {
  return <p className="text-color">{product.name}</p>;
}
export default Card;
