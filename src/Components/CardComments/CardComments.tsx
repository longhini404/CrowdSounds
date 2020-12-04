import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import "./cardComments.css";

import { Link } from "react-router-dom";

import User from "./User.jpg";

type Props = {};

const CardComments: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container className="csCard">
        <h2>Colaboradores</h2>
      </Container>
      <Card className="csCard">
        <Card.Body>
          <Link to="/User">
            <Image
              src={User}
              roundedCircle
              className="csProfilePicture mb-1"
            />
          </Link>
          <Card.Title className="csUsername">Guilherme Longhini</Card.Title>
          <Card.Text className="csComment">Mensagem</Card.Text>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardComments;
