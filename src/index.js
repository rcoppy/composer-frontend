import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import { store } from './redux/helpers';

import App from "./components/app.js";

console.log(store.getState());

// this tutorial (while dated in some ways that broke things) was super helpful:
// https://www.freecodecamp.org/news/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75/
//
// and this more recent tutorial: https://react-redux.js.org/next/api/hooks

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById("root"));