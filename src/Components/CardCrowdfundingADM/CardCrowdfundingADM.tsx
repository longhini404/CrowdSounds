import React from "react";
import { Row, Card, Image, Button } from "react-bootstrap";
import "./cardCrowdfundingADM.css";

import { FaTrash, FaCheck } from "react-icons/fa";
import BioMorf from "./BioMorf.jpg";
import HomeStudio from "./HomeStudio.jpg";
import { Link } from "react-router-dom";

type Props = {};

const CardCrowdfundingADM: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Card className="csCardADM">
        <Card.Body>
          <Card.Img src={HomeStudio} width="auto" height="380" />
          <Row className="justify-content-center mt-2 mb-2">
            <Link to="/HomeArtist">
              <Image
                src={BioMorf}
                className="csProfilePicture mb-1"
                roundedCircle
              />
            </Link>
          </Row>
          <Card.Title className="csTitle text-grey">Home Studio</Card.Title>
          <Card.Text className="csDiscription text-grey">Descrição</Card.Text>
          <Card.Text className="csPrice">R$ 100,00</Card.Text>

          <Button variant="danger p-2 mr-2">
            <FaTrash className="icon" />
          </Button>

          <Button variant="success p-2 ml-2">
            <FaCheck className="icon" />
          </Button>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardCrowdfundingADM;
