import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// const data = {   // Object with variable counters
// 	counters: 5  // anytime you add props to a component you have to add it to bottom
// }
// add data={data} left of = is what will be shared on other pages, right is what data is equal to .  Is a key value pair. data is above as a const.
ReactDOM.render(<App/>, document.getElementById("root"));
//data={data}