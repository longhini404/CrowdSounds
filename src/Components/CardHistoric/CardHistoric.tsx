import React from "react";
import { Card, Image } from "react-bootstrap";
import "./cardHistoric.css";

import BioMorf from "./BioMorf.jpg";
import { Donation } from "../../types/Donation";
import { Link } from "react-router-dom";

type Props = {
  donation: Donation;
};

const CardHistoric: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Card className="csCard">
        <Card.Body>
          <Link
            to={(location: any) => ({
              ...location,
              pathname: `/homeArtist/${props.donation.crowdfunding.artista.id}`,
            })}
          >
            <Image
              src={BioMorf}
              className="csProfilePicture mb-1"
              roundedCircle
            />
          </Link>
          <Card.Title className="csColorWhite">
            {props.donation.crowdfunding.titulo}
          </Card.Title>
          <Card.Text className="csColorGrey">{props.donation.valor}</Card.Text>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardHistoric;
