import React from "react";
import "./App.css";
import { Navbar } from "./components/index";
import { Blog, Footer, Header, Features } from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Features />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
