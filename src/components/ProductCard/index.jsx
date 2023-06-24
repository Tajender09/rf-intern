import "./ProductCard.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ name, price, rating, image }) => {
  return (
    <div className="productContainer">
      <div className="productImage">
        <img src={image} alt="Shoe" />
      </div>
      <h3>{name}</h3>
      <div className="productInfo">
        <p>Rs. {price}/-</p>
        <p>
          {[1, 2, 3, 4, 5].map((item) => {
            return item <= rating ? (
              <AiFillStar color="gold" size={16} />
            ) : (
              <AiOutlineStar color="gold" size={16} />
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
