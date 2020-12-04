import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import "./cardHomeADM.css";

import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import User from "./User.jpg";

type Props = {};

const CardHomeADM: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Card className="csCardADM">
        <Card.Body>
          <Link to="/HomeArtist">
            <Image src={User} className="csProfilePicture mb-1" roundedCircle />
          </Link>
          <Card.Title className="csTitle">Guilherme Longhini</Card.Title>
          <Button variant="danger p-2">
            <FaTrash className="icon" />
          </Button>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardHomeADM;
