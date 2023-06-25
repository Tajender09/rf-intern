import "./ProductCard.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, rating, image, id } = product;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/store/product/${id}`)}
      className="productContainer"
    >
      <div className="greybg productImage">
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
