import React from "react"

const UpdateUser = (props) => {
   
   let id = parseInt(props.id)
    return (
        <div>
            <form action={'/users/' + id} method="put"> 
              <label for="name">Name</label>
              <input type="text" id="name" name="fullName"></input>
              <label for="age">Age</label>
              <input type="text" id="age" name="age"></input>
              <label for="gender">Gender</label>
              <input type="text" id="gender" name="gender"></input>
              <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default UpdateUser;
