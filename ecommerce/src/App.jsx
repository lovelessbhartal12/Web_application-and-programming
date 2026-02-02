// import React from "react";
// export default function app() {
//   const myname = "loblesh";
//   const age = 22;

//   return (
//     <>
//       <button onClick={() => console.log("hello world")}>hello</button>
//       <label htmlFor="name">Name</label>
//       <div>
//         <h1>Hi {myname}</h1>
//         <h2> you are {age} years old</h2>
//         <h2>{age > 18 ? "adult" : "child"}</h2>
//       </div>
//     </>
//   );
// }

import Button from "./Components/Button";
import ProduceCard from "./Components/ProduceCard";
import React from "react";

const App = () => {
  const laptops = [
    {
      myname: "lenovo",
      price: 1000,
      image: "./src/assets/image/laptop.png",
    },
    {
      myname: "acer",
      price: 2000,
      image: "./src/assets/image/laptop.png",
    },
    {
      myname: "mac",
      price: 3000,
      image: "./src/assets/image/laptop.png",
    },
  ];
  return (
    <>
      {laptops.map((laptop, i) => (
        <ProduceCard key={i} {...laptop} />
      ))}
    </>
  );
};

export default App;
