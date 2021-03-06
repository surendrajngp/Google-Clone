// Initial State
export const initialState = {
  term: null,
};

// Action
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM: {
      return {
        ...state,
        term: action.term,
      };
    }

    default:
      return state;
  }
};

export default reducer;
