import React from "react";
import Home from "./pages/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
