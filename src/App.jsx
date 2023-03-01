import React from "react";
// import Wheel from './components/weel';
import Wheel from "./components/Wheel";

const App = () => {
  const prizes = [
    "T-Shirt Reply",
    "Sticker",
    "J.E.To.P",
    "Matita",
    "J.E.To.P",
    "Sticker",
    "J.E.To.P",
    "Matita",
  ];

  return (
    <div>
      <Wheel items={prizes} />
      {/* <Weel prizes={prizes}/> */}
    </div>
  );
};

export default App;
