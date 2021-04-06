import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeHouse } from "../redux/actions";

const House = ({ dispatch, match, history, removeHouse }) => {
  const [house, setHouse] = useState({});

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
    removeHouse(id);
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
export default connect(null, { removeHouse })(House);
