// Code Keypad Component Here

import React from "react";

function Keypad() {
  function change(event) {
    console.log(`Entering ${event.target.type}...`);
  }
  return (
    <div>
      <input type="password" onChange={change}></input>
    </div>
  );
}

export default Keypad;
