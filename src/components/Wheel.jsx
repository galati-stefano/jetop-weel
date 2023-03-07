import React, { useState } from "react";
import leftArrow from "../assets/left-arrow.png";
import "./weel.css";
import Modal from "./Modal";

function Wheel(props) {
  const prizes = [
    "👕 T-Shirt Reply",
    "🚀 Sticker",
    " J.E.To.P",
    "✏️ Matita",
    "J.E.To.P",
    "👕 T-Shirt Reply",
    "🚀 Sticker",
    "J.E.To.P",
    "Matita",
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [emailSt, setEmail] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [done, setDone] = useState(false);

  const selectItem = () => {
    if (selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * items.length);
      if (props.onSelectItem) {
        props.onSelectItem(selectedItem);
      }

      console.log(selectedItem);
      setSelectedItem(selectedItem);

      const form = document.createElement("form");
      form.method = "POST";
      form.action =
        "https://script.google.com/macros/s/AKfycbwZxBOrp1PSK4-jT7dHev-70VcKmJEfl8CUk3oewQf9KGUgH1w4RPc6udO7LV223BY/exec";
      
      // form.action = "https://script.google.com/macros/s/AKfycbwh4Id0r56JXk93CybWJIeMCj9qoWq5n3s5JFlnePMs3nl4XHYkfcR9YWZ7OBFfkpQ/exec";
      //   ;

      const email = document.createElement("input");
      email.type = "email";
      email.className = "w-[1px] h-[1px] hidden";
      email.name = "Email";
      email.value = emailSt;
      form.appendChild(email);

      const prize = document.createElement("input");
      prize.type = "text";
      prize.className = "w-[1px] h-[1px] hidden";
      prize.name = "Prize";
      prize.value =
        prizes[selectedItem] !== "J.E.To.P." ? prizes[selectedItem] : "";
      form.appendChild(prize);

      const date = document.createElement("input");
      date.type = "text";
      date.className = "w-[1px] h-[1px] hidden";
      date.name = "Date";
      date.value = new Date();
      form.appendChild(date);

      document.body.appendChild(form);

      setTimeout(() => {
        form.submit();
      }, 5000);
    } else {
      setSelectedItem(null);
    }
  };

  const { items } = props;
  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": selectedItem,
  };

  const spinning = selectedItem !== null ? "spinning" : "";

  return (
    <div>
      {!done && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="text-center">
            <h2 className="text-lg font-semi-bold mb-2">
              Inserisci la tua email personale
            </h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={emailSt}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <p className="text-[10px] text-gray-600 mt-2 max-w-sm">
                Dichiaro, ai sensi del Regolamento UE 2016/679, di acconsentire
                al trattamento dei miei dati personali per l’invio di una
                Newsletter da parte di JEToP, recante i contenuti di seguito
                elencati: comunicazioni pubblicitarie relative a corsi di
                formazione, convegni ed eventi divulgativi o culturali offerti
                e/o pubblicizzati da JEToP.
              </p>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">
                  Accetto la seguente privacy policy
                </span>
              </label>
            </div>
            <button
              className={`block mx-auto py-2 px-4 ${
                privacyChecked
                  ? "bg-gradient-to-l from-purple-300 via-purple-500 to-teal-400"
                  : "bg-slate-400"
              } text-white rounded`}
              onClick={privacyChecked ? () => setDone(true) : null}
            >
              Gioca a JEToP Wheel
            </button>
          </div>
        </Modal>
      )}
      {done && (
        <div>
          <div className="grid grid-cols-6 gap-2">
            <div
              className={`wheel ${spinning} col-span-5`}
              style={wheelVars}
              onClick={selectItem}
            >
              {items.map((item, index) => (
                <div
                  className="wheel-item"
                  key={index}
                  style={{ "--item-nb": index }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="col-span-1 grid grid-rows-3">
              <div></div>
              <div>
                <img
                  src={leftArrow}
                  alt="left_arrow"
                  className="w-[50px] fill-red-400 pt-10"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wheel;
