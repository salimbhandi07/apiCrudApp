import React from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };
  return (
    <div className="list">
      <form onSubmit={handleOnSubmit}>
        <h4>Add User</h4>
        <input placeholder="Name" name="name" required />
        <input placeholder="Email" name="email" required type="email" />

        <button className="btn btn-primary" onSubmit={handleOnSubmit}>
          Add
        </button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
