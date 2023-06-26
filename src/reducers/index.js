export const reducer = (state, action) => {
  switch (action.method) {
    case "ADD_ITEM":
      return { ...state, cartData: [...state.cartData, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartData: state.cartData.filter((data) => data.id !== action.payload),
      };

    case "APPLY_FILTERS":
      const { categories, colors, costs, costsArray } = action.payload;
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          colors,
          categories,
          costs: costsArray,
        },
        filteredData: state.storeData.filter(
          (data) =>
            (categories.some((category) => category === data.category) ||
              !categories.length) &&
            (colors.some((color) => color === data.color) || !colors.length) &&
            (costs.some(
              ({ min, max }) =>
                (data.price >= +min || !min.length) &&
                (data.price < +max || !max.length)
            ) ||
              !costs.length)
        ),
      };

    case "RESET_FILTERS":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          colors: [],
          categories: [],
          costs: [],
        },
        filteredData: state.storeData,
      };
    default:
      return state;
  }
};
