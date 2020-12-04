import React from "react";
import { Card, Image } from "react-bootstrap";
import "./cardHistoric.css";

import BioMorf from "./BioMorf.jpg";
import { Link } from "react-router-dom";

type Props = {};

const CardHistoric: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Card className="csCard">
        <Card.Body>
          <Link to="homeArtist">
            <Image
              src={BioMorf}
              className="csProfilePicture mb-1"
              roundedCircle
            />
          </Link>
          <Card.Title className="csColorWhite">Home Studio</Card.Title>
          <Card.Text className="csColorGrey">R$ 25,00</Card.Text>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardHistoric;
