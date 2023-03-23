import { useState } from "react";
import {
  Footer,
  Blog,
  Possibility,
  Header,
  Features,
  WhatGPT3,
} from "./containers";
import { Cta, Navbar, Brand } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
