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

const removeHouse2 = (id) => {
  return {
    type: "REMOVE_HOUSE",
    payload: { id },
  };
};

export const removeHouse = (id) => {
  return async (dispatch) => {
    await fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
      method: "DELETE",
    });
    dispatch(removeHouse2(id));
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
