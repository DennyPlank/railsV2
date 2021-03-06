
// import react
import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const Users = (props) => {
 
  const renderUsers = () => {
    console.log(props);
    console.log("renderUser was hit");
    return props.users.map((user) => {
      return (
        <div>
          <h1>{user.fullName}</h1>
          <p>{user.age}</p>
          <p>{user.gender}</p>
        </div>
      );
    });
  };
  return <p>Users Here: {renderUsers()}</p>;
};

// export the component
export default Users;