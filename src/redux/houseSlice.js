import { createSlice } from "@reduxjs/toolkit";

export const houseSlice = createSlice({
  name: "house",
  initialState: {
    houses: [],
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
  },
});

export const addAsync = (house) => async (dispatch) => {
  const data = await fetch(
    "http://mobile-reality-backend.sadek.usermd.net/houses",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(house),
    }
  )
    .then((response) => response.json())
    .then((data) => data.result);

  dispatch(add(data));
};

export const getAsync = () => async (dispatch) => {
  const data = await fetch(
    "http://mobile-reality-backend.sadek.usermd.net/houses/all"
  )
    .then((response) => response.json())
    .then((data) => data.results);

  dispatch(get(data));
};

export const removeAsync = (id) => async (dispatch) => {
  await fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
    method: "DELETE",
  });
  dispatch(remove(id));
};

export const { add, remove, get } = houseSlice.actions;

export default houseSlice.reducer;
