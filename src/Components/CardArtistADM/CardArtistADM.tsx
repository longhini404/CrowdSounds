import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import "./cardArtistADM.css";

import { FaTrash, FaCheck } from "react-icons/fa";

import BioMorf from "./BioMorf.jpg";
import { Link } from "react-router-dom";

type Props = {};

const CardArtistADM: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Card className="csCardADM">
        <Card.Body>
          <Link to="/HomeArtist">
            <Image
              src={BioMorf}
              className="csProfilePicture mb-1"
              roundedCircle
            />
          </Link>
          <Card.Title className="csTitle">BioMorf</Card.Title>
          <Button variant="danger p-2">
            <FaTrash className="icon" />
          </Button>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardArtistADM;
