import React from "react";
import ReactDOM from "react-dom/client";

//core of react
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hi Salaaam react"
// );

// const heading2 = <h1 id="heading">Salaam React from the JSX Syntax 🚀</h1>;

const Heading = () => {
  return <h1>Salaam React ❤️</h1>;
};

const elem = <h2>Happy Side 😊</h2>;

const Page = function () {
  return <h2>Plain Function Waa 💕</h2>;
};

const Data = () => (
  <div className="container">
    <Page />
    {Heading()}
    {elem}
    <Heading />
    <h1>React Functional Component 🚀 </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Data />);

// JSX come into action
