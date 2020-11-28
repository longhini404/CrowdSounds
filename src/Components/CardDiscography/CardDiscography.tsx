import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./cardDiscography.css";
import { Discography } from "../../types/Discography";
import { match } from "react-router-dom";

type Props = {
  dataDiscography?: Discography;
  match?: match<{ id: string }>;
};

const CardDiscography: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center pt-2">
          <p>{props.dataDiscography?.tipoDiscografia}</p>
        </Row>
      </Container>

      <Row className="justify-content-center" xs={2} md={4} lg={6}>
        <Card className="csCard">
          <Card.Img
            src={`data:image/jpeg;base64,${props.dataDiscography?.imagemDiscografia}`}
          />
          <Card.Body>
            <Card.Title className="csTitle">
              {props.dataDiscography?.nomeDiscografia}
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default CardDiscography;
