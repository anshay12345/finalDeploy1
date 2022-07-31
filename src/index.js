import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import curdStore from "./components/Store/crud-store";
console.log("hi");
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={curdStore}>
      <App />
    </Provider>
  
);

















// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "tailwindcss/tailwind.css";

// console.log("hi");

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
