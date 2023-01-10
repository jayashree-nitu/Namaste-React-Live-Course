// Manipulate the HTML DOM using React
//Create nested React elements

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Akshaay Saini"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Teacher"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  //this is an array
  [heading, heading2]
);
console.log(heading);

//create root using createRoot

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(container);
