import React, { useState } from "react";
import { Button } from "./components/ui/button";
import CardStyle from "./_components/cardStyle";
import Xarrow, { Xwrapper } from "react-xarrows";

const App: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleClick = () => {
    setCardNumber((prevNumber) => prevNumber + 1);
  };

  const handleDraw = (index: number) => {
    if (selectedCard === null) {
      setSelectedCard(index);
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <>
      <div className="relative overflow-scroll scrollbar-custom bg-gradient-to-b from-sky-300 to-blue-700 min-h-screen p-4">
        <div>
          <Button
            className="bg-sky-900 hover:bg-white hover:text-gray-700 mb-10 mt-10 ml-10"
            onClick={handleClick}
          >
            Add More Card
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Xwrapper>
            {Array.from({ length: cardNumber }).map((_, index) => {
              const cardId = `card-${index}`;
              const isDisabled =
                selectedCard !== null && selectedCard === index;

              return (
                <div key={index} style={{ position: "relative" }}>
                  <CardStyle
                    id={cardId}
                    onClick={() => handleDraw(index)}
                    disabled={isDisabled}
                    setCardNumber={setCardNumber}
                  />
                  {selectedCard !== null && selectedCard !== index && (
                    <Xarrow
                      start={`card-${selectedCard}`}
                      end={cardId}
                      color="black"
                    />
                  )}
                </div>
              );
            })}
          </Xwrapper>
        </div>
      </div>
    </>
  );
};

export default App;
