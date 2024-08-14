import React, { forwardRef, useState } from "react";
import { Rnd } from "react-rnd";
import Modal from "./modal";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useXarrow } from "react-xarrows";

interface CardProps {
  id: string;
  removeCard: (id: string) => void; // Function to remove card
  onClick: () => void;
  disabled: boolean;
}

const CardStyle = forwardRef<HTMLDivElement, CardProps>(
  ({ removeCard, onClick, id, disabled }, ref) => {
    const [showMore] = useState<boolean>(false);
    const text = `
      Welcome to our service, where you can experience the best features designed to bring you seamless interactions and top-notch performance.
      Whether you're looking to stay connected, manage your tasks, or explore new opportunities, our service is here to help you achieve your goals.
      With cutting-edge technology and a user-friendly interface, we ensure that you get the most out of every interaction.
      Our platform is built to cater to your needs, whether it's personal management or professional networking.
      Join a community of like-minded individuals who are all working towards making their lives more efficient and connected.
      Don't miss out on the latest updates, tools, and resources that we offer.
      Stay ahead of the curve with our innovative solutions, and let us help you navigate the ever-changing digital landscape.
      Sign up today and see the difference for yourself. We're confident that once you start using our service, you'll wonder how you ever managed without it.
      Enjoy unparalleled support, regular updates, and a commitment to excellence that drives everything we do.
    `;

    const truncateText = (text: string, wordLimit: number): string => {
      const words = text.split(" ");
      if (words.length <= wordLimit) {
        return text;
      }
      return words.slice(0, wordLimit).join(" ") + "...";
    };

    const handleClick = () => {
      removeCard(id); // Call the removeCard function with the card's id
    };

    const updateArrow = useXarrow();
    return (
      <Rnd
        default={{
          x: 100,
          y: 100,
          width: 320,
          height: 380,
        }}
        id={id}
        minWidth={200}
        minHeight={100}
        onDrag={updateArrow}
        onDragStop={updateArrow}
        style={{ overflow: "hidden" }}
      >
        <div
          ref={ref}
          className="w-full h-full bg-gradient-to-b from-blue-200 to-blue-900 p-6 rounded-lg shadow-lg text-white relative"
        >
          <h2 className="text-2xl font-bold mb-2">Welcome to Our Service</h2>
          <Button
            className="h-6 w-6 p-1 top-2 right-2 absolute"
            onClick={handleClick}
          >
            <X className="text-red-500" />
          </Button>
          <p className="text-base mb-4">
            {showMore ? text : truncateText(text, 50)}
          </p>
          <div className="flex justify-between">
            <Modal text={text} />
            <Button onClick={onClick} disabled={disabled}>
              Draw Arrow
            </Button>
          </div>
        </div>
      </Rnd>
    );
  }
);

CardStyle.displayName = "CardStyle";

export default CardStyle;
