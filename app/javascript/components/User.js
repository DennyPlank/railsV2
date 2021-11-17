
// import react
import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const User = (props) => {
    let user = props.user
      return (
        <div>
          <h1>{user.fullName}</h1>
          <p>{user.age}</p>
          <p>{user.gender}</p>
        </div>
        
      );
};

// export the component
export default User;