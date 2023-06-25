import ProductsContainer from "../components/ProductsContainer";
import Filter from "../components/Filter";
import Cart from "../components/Cart";
import "../styles/store.css";

const Store = () => {
  return (
    <div className="storeContainer wrapperWidth">
      <Filter />
      <ProductsContainer />
      <Cart />
    </div>
  );
};

export default Store;
