import { CiSearch } from "react-icons/ci";
import "./ProductsContainer.css";

const ProductsContainer = () => {
  return (
    <div className="productsContainer">
      <div>
        <h2>Shoes</h2>
        <div>
          <CiSearch />
          <button>Sort by</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
