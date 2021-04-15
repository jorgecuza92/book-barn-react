import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';

function Register() {
  const [user, setUser] = useState([])


  const handleOnChange = (e) => {
    setUser({
      ...user,
      
    })
  }

  return (
    <div>
      <h1>REGISTER</h1>
      <input type="text" placeholder="create username" name = "username"/>
      <input type="text" placeholder="create password" name = "password"/>
      <Button>Register</Button>
    </div>

  )
}


export default Register




// create UI login
// capture in state (when you type get the value and send to state); handle the click;
// send the post request 
