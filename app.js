// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello from React!")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(heading)
// root.render(heading)



/*
>>  <div id=="parent">

>>  <div id="child">
      <h1>
      <h2>

>>  <div id="child2">
      <h1>
      <h2>
*/


const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "heading h1"), React.createElement("h2", {}, "heading h2")]
  ), React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "heading h1"), React.createElement("h2", {}, "heading h2")]
  )]
)

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)