import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeAsync } from "../redux/houseSlice";

const House = ({ match, history }) => {
  const [house, setHouse] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `http://mobile-reality-backend.sadek.usermd.net/houses/${match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHouse(data.result);
      });
  }, []);

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
