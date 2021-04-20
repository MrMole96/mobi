import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../consts/API";

export const houseSlice = createSlice({
  name: "house",
  initialState: {
    houses: [],
    currentHouse: {},
  },
  reducers: {
    add: (state, action) => {
      state.houses.push(action.payload);
    },
    remove: (state, action) => {
      state.houses = state.houses.filter(
        (house) => house._id !== action.payload
      );
    },
    get: (state, action) => {
      state.houses = action.payload;
    },
    getOne: (state, action) => {
      state.currentHouse = state.houses.find(house=>house._id === action.payload)
    },
  },
});

export const addAsync = (house) => async (dispatch) => {
  const data = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(house),
  })
    .then((response) => response.json())
    .then((data) => data.result);

  dispatch(add(data));
};

export const getAsync = () => async (dispatch) => {
  const data = await fetch(`${API_URL}/all`)
    .then((response) => response.json())
    .then((data) => data.results);

  dispatch(get(data));
};

export const removeAsync = (id) => async (dispatch) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  dispatch(remove(id));
};

export const { add, remove, get } = houseSlice.actions;

export default houseSlice.reducer;
