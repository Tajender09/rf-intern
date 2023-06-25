import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../App";
import Container from "../components/Container";
import { BsChevronLeft } from "react-icons/bs";
import Cart from "../components/Cart";
import "../styles/product.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { storeData, cartData, dispatch } = useContext(StoreContext);
  const productDetails = storeData.filter((product) => product.id === +id)[0];
  const { name, price, rating, image, company } = productDetails;

  const addToCart = () => {
    dispatch({
      payload: productDetails,
      method: "ADD_ITEM",
    });
  };
  return (
    <div className="productPage wrapperWidth">
      <Container width={65}>
        <div className="productPageHeading">
          <BsChevronLeft onClick={() => navigate(-1)} size={34} />
          <h1>Your Design Space</h1>
        </div>
        <div className="productPageContainer">
          <div className="productPageImage greybg">
            <img src={image} alt={name} />
          </div>

          <div className="productPageThumbnailContainer">
            <div className="productPageThumbnail greybg">
              <img src={image} alt={name} />
            </div>
            <div className="productPageThumbnail greybg">
              <img src={image} alt={name} />
            </div>
            <div className="productPageThumbnail greybg">
              <img src={image} alt={name} />
            </div>
          </div>

          <div>
            <div className="productPageName">
              <h2>{name}</h2>
              <p>by {company}</p>
            </div>
            <div className="productPageRating">
              <p className="productRating">
                {[1, 2, 3, 4, 5].map((item) => {
                  return item <= rating ? (
                    <AiFillStar color="gold" size={16} />
                  ) : (
                    <AiOutlineStar color="gold" size={16} />
                  );
                })}
              </p>
              <p className="ratingText">80 reviews</p>
            </div>
            <div>
              <p className="productPrice">Rs. {price}/-</p>
              <p className="priceText">
                Get an exclusive 20% off shopping with HDFC bank
              </p>
            </div>
            <div>
              <p>Size:</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <span className="sizeBox activeSizeBox">7</span>
                <span className="sizeBox">8</span>
                <span className="sizeBox">9</span>
                <span className="sizeBox">10</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={addToCart}
          disabled={cartData?.some((item) => item.id === +id)}
          className="cartBtn"
        >
          Add to Cart
        </button>
      </Container>
      <Cart />
    </div>
  );
};

export default Product;
