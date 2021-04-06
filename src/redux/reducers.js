const initialState = {
  houses: [],
};

export function houseReducer(state = initialState, action) {
  console.log("action", action.payload);
  console.log("state", {
    ...state,
    houses: state.houses.filter((house) => house._id !== action.payload.id),
  });
  switch (action.type) {
    case "ADD_HOUSE":
      return { ...state, houses: [...state.houses, action.payload] };
    case "REMOVE_HOUSE":
      return {
        ...state,
        houses: state.houses.filter((house) => house._id !== action.payload.id),
      };
    case "GET_HOUSES":
      return {
        ...state,
        houses: action.payload,
      };
    default:
      return state;
  }
}
