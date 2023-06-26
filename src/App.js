import Header from "./components/header";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Journey from "./pages/journey";
import Store from "./pages/store";
import Product from "./pages/product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useReducer } from "react";
import shoeImg from "./assets/shoe.png";
import shoe2Img from "./assets/shoe2.png";
import shoe3Img from "./assets/shoe3.png";
import { reducer } from "./reducers";

export const StoreContext = createContext();

const storeData = [
  {
    id: 1,
    name: "KSL 01",
    price: 2000,
    rating: 3,
    image: shoeImg,
    company: "KICKSUP",
    category: "sneakers",
    color: "black",
  },
  {
    id: 2,
    name: "KSW 01",
    price: 2500,
    rating: 2,
    image: shoe3Img,
    company: "KICKSUP",
    category: "loafers",
    color: "brown",
  },
  {
    id: 3,
    name: "Royal S 01",
    price: 6000,
    rating: 4,
    image: shoe2Img,
    company: "ROYAL",
    category: "sneakers",
    color: "white",
  },
  {
    id: 4,
    name: "KSL 01",
    price: 2000,
    rating: 3,
    image: shoeImg,
    company: "KICKSUP",
    category: "sneakers",
    color: "black",
  },
  {
    id: 5,
    name: "KSW 01",
    price: 2500,
    rating: 2,
    image: shoe3Img,
    company: "KICKSUP",
    category: "loafers",
    color: "brown",
  },
  {
    id: 6,
    name: "Royal S 01",
    price: 6000,
    rating: 4,
    image: shoe2Img,
    company: "ROYAL",
    category: "sneakers",
    color: "white",
  },
  {
    id: 7,
    name: "KSL 01",
    price: 9000,
    rating: 3,
    image: shoeImg,
    company: "KICKSUP",
    category: "sneakers",
    color: "black",
  },
  {
    id: 8,
    name: "Royal S 01",
    price: 12000,
    rating: 4,
    image: shoe2Img,
    company: "ROYAL",
    category: "sneakers",
    color: "white",
  },
];

const initialState = {
  storeData,
  filteredData: storeData,
  cartData: [],
  appliedFilters: {
    categories: [],
    colors: [],
    costs: [],
  },
};
function App() {
  const router = createBrowserRouter([
    {
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Journey />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/store/product/:id",
          element: <Product />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  );
}

export default App;
