
// import react
import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const Users = (props) => {
 
  const renderUsers = () => {
    console.log("renderUsers called");
    return props.users.map((user) => {
      return (
        <div>
          <h1>{user.title}</h1>
          <p>{user.description}</p>
        </div>
      );
    });
  };
  return <p>Users Here: {renderUsers()}</p>;
};

// export the component
export default Users;