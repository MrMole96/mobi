const addHouse = (house) => {
  return {
    type: "ADD_HOUSE",
    payload: house,
  };
};

export const addHouseAsync = (house) => {
  return async (dispatch) => {
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

    dispatch(addHouse(data));
  };
};

export const removeHouse = (id) => {
  fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
    method: "DELETE",
  });
  return {
    type: "REMOVE_HOUSE",
    payload: { id },
  };
};

const fetchHouses = (houses) => {
  return {
    type: "GET_HOUSES",
    payload: houses,
  };
};

export const fetchAsync = () => {
  return async (dispatch) => {
    const data = await fetch(
      "http://mobile-reality-backend.sadek.usermd.net/houses/all"
    )
      .then((response) => response.json())
      .then((data) => data.results);

    dispatch(fetchHouses(data));
  };
};
