import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import "./cardMerchandising.css";

import CD from "./CD.jpg";

type Props = {};

const CardMerchandising: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center pt-2">
          <p>Categoria</p>
        </Row>
      </Container>

      <Row className="justify-content-center pt-2" xs={2} md={4} lg={6}>
        <Card className="csCard">
          <Card.Img src={CD} />
          <Card.Body>
            <Card.Title className="csTitle">Disco</Card.Title>
            <Card.Text className="csPrice">R$ 50,00</Card.Text>
            <Card.Text className="csDescription">Mídia física</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default CardMerchandising;
