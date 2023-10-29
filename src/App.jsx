// import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Pepper",
//       breed: "Cockateil",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Doink",
//       breed: "Mixed",
//     }),
//   ]);
// };
