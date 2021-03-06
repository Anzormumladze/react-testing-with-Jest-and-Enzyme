import React from "react";
import Header from "./components/header";
import Headline from "./components/headline/index";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
