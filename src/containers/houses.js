import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsync, removeAsync } from "../redux/houseSlice";

const Houses = ({ history }) => {
  const houses = useSelector((state) => state.houseReducer.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsync());
  }, []);

  const removeHandler = (id) => {
    dispatch(removeAsync(id));
  };

  return (
    <div>
      <h3>List of houses</h3>
      <ul>
        {houses &&
          houses.map((house) => {
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

export default Houses;
