import React from "react";
import "./user.css";

const User = ({ id, name, email, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <div className="list">
        <span>{name}</span>
        <span>{email}</span>
        <span>
          <button className="edit" type="button" class="btn btn-secondary ">
            Edit
          </button>
          <button
            onClick={handleDelete}
            type="button"
            class="btn btn-danger ml-5"
          >
            Delete
          </button>
        </span>
      </div>
    </>
  );
};

export default User;
