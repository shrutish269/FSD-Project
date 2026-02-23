export const initialState = {
  items: [],
  theme: "light"
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };

    case "CLEAR_ITEMS":
      return {
        ...state,
        items: []
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    default:
      return state;
  }
};