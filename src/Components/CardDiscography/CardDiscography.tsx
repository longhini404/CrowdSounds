import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./cardDiscography.css";
import EP from "./EP.jpg";

type Props = {};

const CardDiscography: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center pt-2">
          <p>Singles e EPs</p>
        </Row>
      </Container>

      <Row className="justify-content-center" xs={2} md={4} lg={6}>
        <Card className="csCard">
          <Card.Img src={EP} />
          <Card.Body>
            <Card.Title className="csTitle">Rise of the Machines</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default CardDiscography;
