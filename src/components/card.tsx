import { useState } from "react";
import rupucu from "../assets/rupucu.png";

type props = {
  age: number;
};

const Card = ({ age }: props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="back">
        <p>Happy {age}</p>
      </div>
    </div>
  );
};

export default Card;
