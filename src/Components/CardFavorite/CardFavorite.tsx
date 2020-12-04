import React from "react";
import { Card, Image } from "react-bootstrap";
import "./cardFavorite.css";

import BioMorf from "./BioMorf.jpg";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const CardFavorite: React.FC<Props> = (props) => {
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
          <Card.Title className="csTitle">BioMorf</Card.Title>
          <FaHeart className="heart" />
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardFavorite;
