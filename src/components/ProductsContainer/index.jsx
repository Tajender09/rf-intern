import { BiSearch } from "react-icons/bi";
import "./ProductsContainer.css";
import ProductCard from "../ProductCard";
import Container from "../Container";
import { StoreContext } from "../../App";
import { useContext } from "react";

const ProductsContainer = () => {
  const { storeData } = useContext(StoreContext);

  return (
    <Container width={45}>
      <div className="productsContainerHeading">
        <h2>Shoes</h2>
        <div>
          <BiSearch size={25} />
          <button className="sortButton">Sort by</button>
        </div>
      </div>
      <div className="productsList">
        {storeData.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </Container>
  );
};

export default ProductsContainer;
