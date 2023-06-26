import Container from "../Container";
import { FiFilter } from "react-icons/fi";
import "./Filter.css";
import {
  categoriesFilter,
  colorsFilter,
  costFilter,
} from "./filters.constants";
import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../App";

const Filter = () => {
  const { dispatch, appliedFilters } = useContext(StoreContext);
  const [categories, setCategories] = useState(appliedFilters.categories || []);
  const [colors, setColors] = useState(appliedFilters.colors || []);
  const [costsArray, setCostsArray] = useState(appliedFilters.costs || []);

  const handleCategoryChange = (e, category) => {
    if (e.target.checked) {
      setCategories((prev) => [...prev, category]);
    } else {
      setCategories((prev) => prev.filter((item) => item !== category));
    }
  };

  const handleColorChange = (e, color) => {
    if (e.target.checked) {
      setColors((prev) => [...prev, color]);
    } else {
      setColors((prev) => prev.filter((item) => item !== color));
    }
  };

  const handleCostChange = (e, cost) => {
    if (e.target.checked) {
      setCostsArray((prev) => [...prev, cost]);
    } else {
      setCostsArray((prev) => prev.filter((item) => item !== cost));
    }
  };

  const handleApply = () => {
    let costs = {};
    if (costsArray.length) {
      let min =
        costsArray[0].split("-")[0] || costsArray[0].split("+")[0] || "";
      let max = costsArray[0].split("-")[1] || "";
      costsArray.forEach((item) => {
        if (item.includes("-")) {
          if (item.split("-")[0] < min) {
            min = item.split("-")[0];
          } else if (item.split("-")[1] > max) {
            max = item.split("-")[1];
          }
        } else if (item.includes("+")) {
          if (item.split("+")[0] < min) {
            min = item.split("+")[0];
          }
          max = "";
        }
      });
      costs = { min, max };
    }
    dispatch({
      method: "APPLY_FILTERS",
      payload: { colors, categories, costs, costsArray },
    });
  };
  const handleReset = () => {
    dispatch({
      method: "RESET_FILTERS",
    });
  };

  useEffect(() => {
    if (!appliedFilters.categories.length) {
      setCategories([]);
    }

    if (!appliedFilters.colors.length) {
      setColors([]);
    }

    if (!appliedFilters.costs.length) {
      setCostsArray([]);
    }
  }, [appliedFilters]);
  return (
    <Container width={18}>
      <div className="filterHeading">
        <h2>Filters</h2>
        <FiFilter size={25} />
      </div>

      {/* Cost filter starts */}
      <div>
        <h3>Cost</h3>
        <div>
          {costFilter.map((cost) => {
            return (
              <div>
                <input
                  checked={costsArray.includes(cost.code)}
                  value={cost.code}
                  name={cost.code}
                  type="checkbox"
                  id={cost.code}
                  onChange={(e) => handleCostChange(e, cost.code)}
                />
                <label htmlFor={cost.code}>{cost.display_name}</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Colors filter starts */}
      <div>
        <h3>Colors</h3>
        <div className="colorsContainer">
          {colorsFilter.map((color) => {
            return (
              <div className="colorBlock">
                <input
                  value={color}
                  name={color}
                  type="checkbox"
                  id={color}
                  onChange={(e) => handleColorChange(e, color)}
                />
                <label
                  className={colors.includes(color) && "activeColor"}
                  style={{ backgroundColor: color }}
                  htmlFor={color}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Category filter starts */}
      <div>
        <h3>Category</h3>
        <div>
          {categoriesFilter.map((category) => {
            return (
              <div>
                <input
                  checked={categories.includes(category.code)}
                  value={category.code}
                  name={category.code}
                  type="checkbox"
                  id={category.code}
                  onChange={(e) => handleCategoryChange(e, category.code)}
                />
                <label htmlFor={category.code}>{category.display_name}</label>
              </div>
            );
          })}
        </div>
        <div className="btnContainer">
          <button onClick={handleApply}>Apply</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
