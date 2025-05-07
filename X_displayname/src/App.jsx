import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

function handleSubmit(event){
  event.preventDefault();
   setfirstName(event.target.elements.firstname.value);
  setlastName(event.target.elements.lastname.value);
}

  return (
    <>
      <h1>Full Name Display</h1>
      <form className="form" onSubmit={handleSubmit}>
       <div> <label htmlFor="first">First Name :</label> <input id="first"name="firstname" required placeholder="enter first name"/></div> 
       <div> <label htmlFor="last">Last Name :</label> <input id="last"name="lastname" required placeholder="enter last name"/></div> 
       <button className="button" type="submit"> submit</button>
      </form>
      {firstName && lastName &&  ( <div className="displaytext"><span>Full Name:</span> <h3>{`${firstName} ${lastName}`}</h3> </div>) }
    </>
  );
}

export default App;
