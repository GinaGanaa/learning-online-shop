import "./Card.css";

function Card({ product }) {
  function generateStars(rating) {
    let starElements = [];
    for (let i = 0; i < rating; i++) {
      starElements.push(
        <img className="card_star" src="images/star-colored.svg" alt="" />
      );
    }
    for (let i = 0; i < 5 - rating; i++) {
      starElements.push(
        <img className="card_star" src="images/star-black.svg" alt="" />
      );
    }
    return starElements;
  }
  return (
    <div className="card">
      <img className="card_image" src={product.image} width="50px" alt="" />
      <p className="card_name">{product.name}</p>
      <p className="card_desc">{product.description.slice(0, 30)}</p>
      <p className="card_price"> ${product.price}</p>
      <div className="card_rating">
        {generateStars(Math.round(product.rating))}
      </div>
      <button className="card_button">Buy Now</button>
    </div>
  );
}
export default Card;
