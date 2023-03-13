import "./Card.css";
import React from "react";
const Card = ({ image }) => {
  return (
    <Card className="Card">
      <p>{image}</p>
    </Card>
  );
};

export default Card;
