export const reducer = (state, action) => {
  switch (action.method) {
    case "ADD_ITEM":
      return { ...state, cartData: [...state.cartData, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartData: state.cartData.filter((data) => data.id !== action.payload),
      };

    case "APPLY_CATEGORY":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          categories: action.payload,
        },
        storeData: state.storeData.filter((data) =>
          action.payload.includes(data.category)
        ),
      };

    case "APPLY_COLOR":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          colors: action.payload,
        },
        storeData: state.storeData.filter((data) =>
          action.payload.includes(data.color)
        ),
      };

    case "APPLY_COST":
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          cost: action.payload,
        },
        storeData: state.storeData.filter((data) =>
          action.payload.max
            ? data.price > +action.payload.min &&
              data.price < +action.payload.max
            : data.price > +action.payload.min
        ),
      };

    case "RESET_FILTERS":
      return {
        ...state,
        appliedFilters: {
          categories: [],
          colors: [],
          prices: [],
        },
        storeData: state.initialStore,
      };
    default:
      return state;
  }
};
