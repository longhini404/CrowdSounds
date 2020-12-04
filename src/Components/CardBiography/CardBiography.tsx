import React from "react";
import { Container, Card } from "react-bootstrap";
import "./cardBiography.css";

import Band from "./Band.jpg";

type Props = {};

const CardBiography: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Img src={Band} width="auto" height="380" />
          </Card.Body>
        </Card>

        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Text className="csBiography">Biografia</Card.Text>
          </Card.Body>
        </Card>

        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Text className="csBiography">Gênero</Card.Text>
          </Card.Body>
        </Card>

        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Text className="csBiography">Integrantes</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default CardBiography;
