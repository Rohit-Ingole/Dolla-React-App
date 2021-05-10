export const initialState = {
  isOpen: false,
};

export const actionTypes = {
  SET_ISOPEN: "SET_ISOPEN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ISOPEN:
      return {
        ...state,
        isOpen: action.isOpen,
      };

    default:
      return state;
  }
};

export default reducer;
