import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:-[5.25rem] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;