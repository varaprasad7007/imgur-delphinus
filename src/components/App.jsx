import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      //props.user                        

      <Card user = {contacts[0].name} />

      
      
    </div>
  );
}

export default App;
