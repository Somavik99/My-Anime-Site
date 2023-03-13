import "./Card.css";
import React from "react";
import { Card } from "@chakra-ui/react";
const CardPage = ({ image }) => {
  return (
    <Card className="Card">
     <img src={image}/>
    </Card>
  );
};

export default CardPage;
