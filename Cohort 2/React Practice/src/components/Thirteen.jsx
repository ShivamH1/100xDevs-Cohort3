//This component is used to create a registration and login form
//It uses useState hook to manage the state of email,password,isRegistered,isLoggedIn,users
import React, { useState } from "react";

//This is the main function component
export default function Thirteen() {
  //Define the state variable for email,password,isRegistered,isLoggedIn,users
  const [email, setEmail] = useState(""); //email state variable
  const [password, setPassword] = useState(""); //password state variable
  const [isRegistered, setIsRegistered] = useState(false); //isRegistered state variable
  const [isLoggedIn, setIsLoggedIn] = useState(false); //isLoggedIn state variable
  const [users, setUsers] = useState([]); //users state variable

  //This function handles the authentication process
  const handleAuthentication = () => {
    //If user is registered
    if (isRegistered) {
      //LogIn
      //Find the user with the given email and password
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      //If user exists, set isLoggedIn to true
      if (user) {
        setIsLoggedIn(true);
      } else {
        //If user doesn't exist, show an alert
        alert("Login failed.Please check your credential");
      }
    } else {
      //If user is not registered
      //Create a new user with the given email and password
      const newUser = { email, password };
      //Add the new user to the users array
      setUsers([...users, newUser]);
      //Save the users array to localStorage
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      //Set isLoggedIn to true
      setIsLoggedIn(true);
    }
  };

  //This function handles the logout process
  const handleLogout = () => {
    //Set isLoggedIn to false
    setIsLoggedIn(false);
    //Set email and password to empty string
    setEmail("");
    setPassword("");
  };

  //Render the JSX based on the state
  return (
    <div>
      {/* Check if user is logged in */}
      isLoggedIn ? (
        <div>
          {/* Welcome message with user's email */}
          <h2>Welcome , {email}!</h2>
          {/* Logout button */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {/* Login/Register header based on isRegistered state */}
          <h2>{isRegistered ? "Login" : "Register"} </h2>

          {/* Login/Register form */}
          <form>
            {/* Email input field */}
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} //Handle email input change
            />
            {/* Password input field */}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} //Handle password input change
            />
            {/* Login/Register button */}
            <button onClick={handleAuthentication}>
              {/* Login/Register button text based on isRegistered state */}
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>

          {/* Register now message or Login now message based on isRegistered state */}
          <p>
            {isRegistered
              ? "Dont have an account? Register now" //Register now message
              : "Already have an account? Log in!"} 
          </p>

          {/* Toggle between Login and Register button */}
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )
    </div>
  );
}


