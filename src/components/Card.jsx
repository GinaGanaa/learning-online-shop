import "./Card.css";

function Card({ product }) {
  return (
    <div className="product">
      <img className="proImage" src="./products.image" width="50px" alt="" />
      <p className="proName">{product.name}</p>
      <p className="proDesc">{product.description}</p>
      <p className="proPrice"> ${product.price}</p>
      {/* <img src="./images/star-black.svg" alt="" />
      <img src="./images/star-colored.svg" alt="" /> */}
      <p className="buyNow">Buy Now</p>
    </div>
  );
}
export default Card;
