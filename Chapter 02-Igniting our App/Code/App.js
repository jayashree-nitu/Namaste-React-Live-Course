 /*
 * HMR - Hot Module Reloading=>(parcel is doing for us this means parcel will keep track of all the file which are updating it tells the server if you go  change if you go change anything in your index.css you do make it yellow save it up if you go back parcel it atomatically change)
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
 *
*/
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Akshaay Saini from parcel"
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
  // console.log(heading);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing a react element inside the root
  
  root.render(container);
