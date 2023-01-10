/*
 * Created A server
 * HMR - Hot Module Replacement=>(parcel is doing for us this means parcel will keep track of all the file which are updating it tells the server if you go  change if you go change anything in your index.css you do make it yellow save it up if you go back parcel it atomatically change)
 * File Watcher algorithm =>(palcel is doing for us is written in C++)
 *  npx parcel build index.html it just creats a delopment build for us it host in an server (how I tell parcel make a production build I tell it using build command .when you say this it creates a lot of things. )
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and production field
 * Super Fast build algorithim
 * Image OptimiZation
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * Port Number(we should put parcel-cache at gitignore)
 * Consistant hashing Algorithim
 * Zero Config
 * Tree Shaking - Removing un-wanted (npm you want your things to be install inside your pakage)
 *                                    (npx for executing  pakage without downloading it)
 *
 *Transitive Dependencies(we have a pakage manager which handles and takes care of our transitive depandencies of our code)
 */

//imported react and reactDOM from nodmodule folder
// import {React, createElement as ce } from 'react';

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [ce(
//     "h1",
//     {
//       key: "Title",
//     },
//   "Title"), 
//  ce(
//     "ul",
//     {
//       key: "ul",
//     },
//   [ce(
//     "li",
//     {
//       key: "Home",
//     },
//   "Home"),ce(
//     "li",
//     {
//       key: "About Us",
//     },
//   "About Us")])]
// )

// React.createElement => object =>HTML(DOM)

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",// bye bye React.createElement
//     key:"h1"
//   },
//   "Heading 1 for parcel"
// );

// const heading2= React.createElement(
//   "h1",
//   {
//     id: "title",// bye bye React.createElement
//     key:"h1" why we need key(h.w) => reconcilation key
//   },
//   "heading2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container", // bye bye React.createElement
//     hello:"world",
//   },
//   "heasding, heading2"
// );

// create heading element using JSX
// JSX => React.createElement => object =>HTML(DOM)

const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
  </h1> //js expression
);

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1> // functional component or normal javascript function
);

//React Component
// 1 => Functional componet (new) is a normal fuction it just returning some piece of JSX or it can also return some piece of reactelement
// 2 => Class Based Component(old)
// Name of the component starts with capital letter -it's not mandatory but a ggod practice to use that

// var xyz = 10;
// cross site scripting attack (XSS)
// const data = api.getData();

// Component composition(composing component)=>when we use component inside component or nested component

//header component is functional component
const HeaderComponent = () => {
  // it's returning jsx
  // return <div><h1>Namaste React functional component</h1><h2>This is a h2 tag</h2></div> return -arrow function thing

  return (
    <div>
      {/* {heading2} */}

      {/* <Title/>  it is use for functional component */}

      {/* {Title()} */}

      {/* {console.log("Any js code")} */}

      {/* {data} */}
      <Title />

      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

//we use this type of code further

// const HeaderComponent2 = () => (
//     <div>
//       <h1>Namaste React functional component</h1>
//       <h2>This is a h2 tag</h2>
//     </div>
//   );

// create root using createRoot

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(<HeaderComponent />);
