import React from "react";
import ReactDOM from "react-dom";

// this tutorial (while dated in some ways that broke things) was super helpful: 
// https://www.freecodecamp.org/news/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75/

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));