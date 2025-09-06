import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const productCost = 10 + 2 * 8;
console.log(productCost);
const shippingCost = 5;

const root = ReactDOM.createRoot(document.querySelector("#root"));

setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  root.render(
    <p>
      Current time: {hours}:{minutes}:{seconds}
    </p>
  );
}, 1000);
