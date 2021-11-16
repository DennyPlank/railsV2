import React from 'react'

const NewUser = (props) => {
    return (
        <div>
            <form action="/users" method="post"> 
              <label for="name">Name</label>
              <input type="text" id="name" name="name"></input>
              <label for="age">Age</label>
              <input type="text" id="age" name="age"></input>
              <label for="gender">Gender</label>
              <input type="text" id="gender" name="gender"></input>

              <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default NewUser;
