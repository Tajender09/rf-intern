import shoeImg from "../assets/shoe.png";
import shoe2Img from "../assets/shoe2.png";
import shoe3Img from "../assets/shoe3.png";
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";

const Store = () => {
  const storeData = [
    {
      id: 1,
      name: "KSL 01",
      price: 2000,
      rating: 3,
      image: shoeImg,
    },
    {
      id: 2,
      name: "KSW 01",
      price: 2500,
      rating: 2,
      image: shoe3Img,
    },
    {
      id: 3,
      name: "Royal S 01",
      price: 6000,
      rating: 4,
      image: shoe2Img,
    },
    {
      id: 4,
      name: "KSL 01",
      price: 2000,
      rating: 3,
      image: shoeImg,
    },
    {
      id: 5,
      name: "KSW 01",
      price: 2500,
      rating: 2,
      image: shoe3Img,
    },
    {
      id: 6,
      name: "Royal S 01",
      price: 6000,
      rating: 4,
      image: shoe2Img,
    },
  ];
  return (
    <div>
      <ProductsContainer storeData={storeData} />
      {storeData.map((product) => {
        return (
          <ProductCard
            name={product.name}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        );
      })}
    </div>
  );
};

export default Store;
