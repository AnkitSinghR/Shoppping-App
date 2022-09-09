import React from "react";
const User = ({ data }) => {
  return (
    <div>
      <h3>User Component</h3>
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
    </div>
  );
};
export default User;
