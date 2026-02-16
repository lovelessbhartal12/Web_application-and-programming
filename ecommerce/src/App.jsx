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

// import Button from "./Components/Button";
// import ProduceCard from "./Components/ProduceCard";
// import React from "react";

// const App = () => {
//   const laptops = [
//     {
//       myname: "lenovo",
//       price: 1000,
//       image: "./src/assets/image/laptop.png",
//     },
//     {
//       myname: "acer",
//       price: 2000,
//       image: "./src/assets/image/acer.jpg",
//     },
//     {
//       myname: "mac",
//       price: 3000,
//       image: "./src/assets/image/mac.jpg",
//     },
//   ];
//   return (
//     <>
//       {laptops.map((laptop, i) => (
//         <ProduceCard key={i} {...laptop} />
//       ))}
//     </>
//   );
// };

// export default App;
// import { useState } from "react";

// function LoginStatus() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {/* Using ternary operator */}
//       <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>

//       {/* Using && operator */}
//       {isLoggedIn && <p>You have 3 new messages</p>}

//       {!isLoggedIn && <p>Log in to see your messages</p>}

//       {/* Toggle button */}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// }

// export default LoginStatus;

// import React, { useEffect } from "react";
// import { useState } from "react";

// export default function App() {
//   const [width, setwidth] = useState(window.innerWidth);

//   useEffect(() => {
//     function handleResize() {
//       setwidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div>
//       <h3>width: {width}</h3>
//     </div>
//   );
// }

// import About from "./pages/About";
// import Home from "./pages/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import React from "react";

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// counter part

// import Counter from "./Components/Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function LoginStatus() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <h2>
//         {isLoggedIn ? "Welcome back !" : "Please log in loblesh bhartal file"}
//       </h2>

//       {isLoggedIn && <p>You have new messages</p>}

//       {!isLoggedIn && <p>Log in to see your messages</p>}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// }

// export default LoginStatus;

// import RegistrationForm from "./Components/Registrationform";

// function App() {
//   return (
//     <div>
//       <RegistrationForm />
//     </div>
//   );
// }

// export default App;

// import WindowResizeListener from "./Components/window_size_listener";

// function App() {
//   return (
//     <div>
//       <WindowResizeListener />
//     </div>
//   );
// }

// export default App;
// import FetchUsers from "./Components/fetch_user";

// function App() {
//   return (
//     <div>
//       <FetchUsers />
//     </div>
//   );
// }

// export default App;

// import FocusInput from "./Components/focus_input";
// function App() {
//   return (
//     <div>
//       <FocusInput />
//     </div>
//   );
// }

// export default App;
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";

// function Home() {
//   return <h2>welcome to lobless Home Page</h2>;
// }

// function About() {
//   return <h2>About loblesh</h2>;
// }

// function UserProfile() {
//   const { userId } = useParams();

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>User ID: {userId}</p>
//     </div>
//   );
// }

// function Navigation() {
//   return (
//     <nav style={{ marginBottom: "20px" }}>
//       <Link to="/" style={{ marginRight: "10px" }}>
//         Home
//       </Link>
//       <Link to="/about" style={{ marginRight: "10px" }}>
//         About
//       </Link>
//       <Link to="/user/101">User 101</Link>
//     </nav>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ textAlign: "center", marginTop: "40px" }}>
//         <Navigation />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user/:userId" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.jsx
// import React from "react";
// import Card from "./Components/card";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Card Component Example</h1>

//       <Card>
//         <p>This is a simple text paragraph inside the Card component.</p>
//       </Card>

//       <Card>
//         <button onClick={() => alert("Button Clicked!")}>Click Me</button>
//       </Card>

//       <Card>
//         <h3>Features</h3>
//         <ul>
//           <li>Reusable Component</li>
//           <li>Uses Children Prop</li>
//           <li>Clean UI Structure</li>
//         </ul>
//       </Card>
//     </div>
//   );
// }

// export default App;

// App.jsx
import React from "react";
import Grandparent from "./Components/Grandparent";

function App() {
  return (
    <div>
      <h1>Props Drilling Example</h1>
      <Grandparent />
    </div>
  );
}

export default App;
