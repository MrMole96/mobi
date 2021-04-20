import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAsync } from "../redux/houseSlice";

const House = ({ match, history }) => {
  const house = useSelector((state) => state.houseReducer.currentHouse);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeAsync(id));
    history.push("/houses");
  };
  return (
    <div>
      <h2>House</h2>
      <div>{house.description}</div>
      <button onClick={() => removeHandler(match.params.id)}>REMOVE</button>
    </div>
  );
};
export default House;
