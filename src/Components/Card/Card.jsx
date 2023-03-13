import React from "react";
import "./Card.css";
const Card = ({ image }) => {
  return (
    <Card className="Card">
      <body>{image}</body>
    </Card>
  );
};

export default Card;
