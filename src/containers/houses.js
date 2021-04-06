import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchAsync, removeHouse } from "../redux/actions";

const Houses = ({ houses, fetchAsync, history, removeHouse }) => {
  useEffect(() => {
    fetchAsync();
  }, []);

  const removeHandler = (id) => {
    removeHouse(id);
  };
  console.log("houses", houses);
  return (
    <div>
      <h3>List of houses</h3>
      <ul>
        {houses.map((house) => {
          return (
            <li key={house._id}>
              {house.description}
              <button onClick={() => history.push(`houses/${house._id}`)}>
                Details
              </button>
              <button onClick={() => removeHandler(house._id)}>Remove</button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => history.push("houses/add")}>Add</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export default connect(mapStateToProps, { fetchAsync, removeHouse })(Houses);
