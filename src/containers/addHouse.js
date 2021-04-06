import React, { useState } from "react";
import { connect } from "react-redux";
import { addHouseAsync } from "../redux/actions";

const AddHouse = ({ dispatch, history, addHouseAsync }) => {
  const [values, setValues] = useState({
    description: "",
    address: "",
    floorsNumber: 0,
    label: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addHouseAsync(values);
    history.push("/houses");
  };
  return (
    <div>
      <h2>form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="descript"
        />
        <input
          name="floorsNumber"
          type="number"
          value={values.floorsNumber}
          onChange={handleChange}
          placeholder="floorsNumber"
        />
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          placeholder="adress"
        />
        <input
          name="label"
          value={values.label}
          onChange={handleChange}
          placeholder="label"
        />
        <button type="submit" value="Send">
          SEND
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addHouseAsync })(AddHouse);
