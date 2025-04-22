import { useState } from "react";
import "./dice.css";

const DiceGame = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);

  //   const [diceThree, setDiceThree] = useState(1);

  const [throwsLeft, setThrowsLeft] = useState(4);

  const rollDice = () => {
    if (throwsLeft <= 0) return;

    const newDiceOne = Math.floor(Math.random() * 6 + 1);
    const newDiceTwo = Math.floor(Math.random() * 6 + 1);
    // const newDiceThree = Math.floor(Math.random() * 6 + 1);

    setDiceOne(newDiceOne);
    setDiceTwo(newDiceTwo);
    // setDiceThree(newDiceThree);
    setThrowsLeft(throwsLeft - 1);
  };

  console.log(diceOne, diceTwo);

  return (
    <div className="w-full flex flex-col space-y-12">
      <div className="min-h-96 w-full flex items-center p-8 md:p-28 border-[1rem] justify-center bg-green-700 border-lime-500 rounded-lg">
        <div className="flex items-center justify-center h-full space-x-10">
          <div className={`dice dice-one show-${diceOne}`}>
            <div className={`side one ${diceOne === 1 ? "show" : ""}`}>
              <div className="dot one-1"></div>
            </div>
            <div className={`side two ${diceOne === 2 ? "show" : ""}`}>
              <div className="dot two-1"></div>
              <div className="dot two-2"></div>
            </div>
            <div className={`side three ${diceOne === 3 ? "show" : ""}`}>
              <div className="dot three-1"></div>
              <div className="dot three-2"></div>
              <div className="dot three-3"></div>
            </div>
            <div className={`side four ${diceOne === 4 ? "show" : ""}`}>
              <div className="dot four-1"></div>
              <div className="dot four-2"></div>
              <div className="dot four-3"></div>
              <div className="dot four-4"></div>
            </div>
            <div className={`side five ${diceOne === 5 ? "show" : ""}`}>
              <div className="dot five-1"></div>
              <div className="dot five-2"></div>
              <div className="dot five-3"></div>
              <div className="dot five-4"></div>
              <div className="dot five-5"></div>
            </div>
            <div className={`side six ${diceOne === 6 ? "show" : ""}`}>
              <div className="dot six-1"></div>
              <div className="dot six-2"></div>
              <div className="dot six-3"></div>
              <div className="dot six-4"></div>
              <div className="dot six-5"></div>
              <div className="dot six-6"></div>
            </div>
          </div>
          <div className={`dice dice-two show-${diceTwo}`}>
            <div className={`side one ${diceTwo === 1 ? "show" : ""}`}>
              <div className="dot one-1"></div>
            </div>
            <div className={`side two ${diceTwo === 2 ? "show" : ""}`}>
              <div className="dot two-1"></div>
              <div className="dot two-2"></div>
            </div>
            <div className={`side three ${diceTwo === 3 ? "show" : ""}`}>
              <div className="dot three-1"></div>
              <div className="dot three-2"></div>
              <div className="dot three-3"></div>
            </div>
            <div className={`side four ${diceTwo === 4 ? "show" : ""}`}>
              <div className="dot four-1"></div>
              <div className="dot four-2"></div>
              <div className="dot four-3"></div>
              <div className="dot four-4"></div>
            </div>
            <div className={`side five ${diceTwo === 5 ? "show" : ""}`}>
              <div className="dot five-1"></div>
              <div className="dot five-2"></div>
              <div className="dot five-3"></div>
              <div className="dot five-4"></div>
              <div className="dot five-5"></div>
            </div>
            <div className={`side six ${diceTwo === 6 ? "show" : ""}`}>
              <div className="dot six-1"></div>
              <div className="dot six-2"></div>
              <div className="dot six-3"></div>
              <div className="dot six-4"></div>
              <div className="dot six-5"></div>
              <div className="dot six-6"></div>
            </div>
          </div>
          {/* <div className={`dice dice-three show-${diceThree}`}>
            <div className={`side one ${diceThree === 1 ? "show" : ""}`}>
              <div className="dot one-1"></div>
            </div>
            <div className={`side two ${diceThree === 2 ? "show" : ""}`}>
              <div className="dot two-1"></div>
              <div className="dot two-2"></div>
            </div>
            <div className={`side three ${diceThree === 3 ? "show" : ""}`}>
              <div className="dot three-1"></div>
              <div className="dot three-2"></div>
              <div className="dot three-3"></div>
            </div>
            <div className={`side four ${diceThree === 4 ? "show" : ""}`}>
              <div className="dot four-1"></div>
              <div className="dot four-2"></div>
              <div className="dot four-3"></div>
              <div className="dot four-4"></div>
            </div>
            <div className={`side five ${diceThree === 5 ? "show" : ""}`}>
              <div className="dot five-1"></div>
              <div className="dot five-2"></div>
              <div className="dot five-3"></div>
              <div className="dot five-4"></div>
              <div className="dot five-5"></div>
            </div>
            <div className={`side six ${diceThree === 6 ? "show" : ""}`}>
              <div className="dot six-1"></div>
              <div className="dot six-2"></div>
              <div className="dot six-3"></div>
              <div className="dot six-4"></div>
              <div className="dot six-5"></div>
              <div className="dot six-6"></div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="space-y-4">
        <button onClick={rollDice} className="bg-black text-sm text-white px-8 py-4 rounded-lg shadow-md w-full">
          Thrwo the Dice ({throwsLeft} left)
        </button>
        <div className="grid grid-cols-3 gap-2">
          <button className="border border-black text-sm text-black px-2 md:px-4 py-2 rounded-lg w-full">Odd</button>
          <button className="border border-black text-sm text-black px-2 md:px-4 py-2 rounded-lg w-full">Pick a number</button>
          <button className="border border-black text-sm text-black px-2 md:px-4 py-2 rounded-lg w-full">Even</button>
        </div>
      </div>
    </div>
  );
};

export default DiceGame;
