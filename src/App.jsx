import React from "react";
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
    </div>
  );
};

export default App;
