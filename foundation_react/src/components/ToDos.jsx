import React from "react";

const User = ({ name, surname, email }) => {
  return (
    <div className="divs">
      <div className="div">
        {" "}
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  );
};

export default User;
