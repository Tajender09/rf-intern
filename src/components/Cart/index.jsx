import Container from "../Container";
import { LuShoppingBag } from "react-icons/lu";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../../App";
import { FaRegTimesCircle } from "react-icons/fa";

const Cart = () => {
  const { cartData, dispatch } = useContext(StoreContext);
  const removeItem = (id) => {
    dispatch({
      method: "REMOVE_ITEM",
      payload: id,
    });
  };
  return (
    <Container width={20}>
      <div className="filterHeading">
        <h2>Cart</h2>
        <LuShoppingBag size={25} />
      </div>
      <div className="cartItemsContainer">
        {cartData.length ? (
          cartData.map((cartItem) => {
            return (
              <div className="cartItem">
                <div className="cartItemImage greybg">
                  <FaRegTimesCircle onClick={() => removeItem(cartItem.id)} />
                  <img src={cartItem.image} alt={cartItem.name} />
                </div>
                <div className="cartItemDetails">
                  <p className="cartItemName">{cartItem.name}</p>
                  <p className="cartItemCompany">by {cartItem.company}</p>

                  <p className="cartItemPrice">Rs. {cartItem.price}/-</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>What's stopping you, designer</p>
        )}
      </div>
      <button className="orderBtn" disabled={!cartData.length}>
        Order
      </button>
    </Container>
  );
};

export default Cart;
