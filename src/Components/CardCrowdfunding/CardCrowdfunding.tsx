import React from "react";
import { Card, Button } from "react-bootstrap";
import "./cardCrowdfunding.css";

import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import { Link } from "react-router-dom";

import HomeStudio from "./HomeStudio.jpg";
import BioMorf from "./BioMorf.jpg";

type Props = {};

const CrowdfundingCard: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Card className="csCard">
        <Link to="crowdfunding">
          <Card.Img src={HomeStudio} width="auto" height="380" />
        </Link>
        <Card.Body>
          <Link to="/HomeArtist">
            <Image
              src={BioMorf}
              className="csArtistPicture mb-1"
              roundedCircle
            />
          </Link>
          <Card.Title className="csTitle">Home Studio</Card.Title>
          <Card.Text className="csDiscription">Descrição</Card.Text>
          <ProgressBar variant="primary" className="csProgressBar" now={25} />
          <Card.Text className="csDiscription mt-2">
            R$ 25,00 de R$ 100,00
          </Card.Text>
          <Link to="donate">
            <Button
              variant="btn-block mt-2"
              className="csButton"
              size="lg"
              block
            >
              Contribuir
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CrowdfundingCard;
