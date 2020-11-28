import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { Crowdfunding } from "../../types/Crowdfunding";
import "./cardComments.css";

import { Link } from "react-router-dom";

import avatar from "./avatar.png";

type Props = {
  dataCrowdfunding: Crowdfunding;
};

const CardComments: React.FC<Props> = (props) => {
  const dados = props.dataCrowdfunding;

  return (
    <React.Fragment>
      <Container className="csCard">
        <h2>Colaboradores</h2>
      </Container>

      {dados.doacoes.map((doacao, id) => (
        <Card className="csCard" key={id}>
          <Card.Body>
            <Link to="/User">
              {doacao.nomeDoador && (
                <Image
                  src={avatar}
                  roundedCircle
                  className="csProfilePicture mb-1"
                />
              )}
              {doacao.nomeDoador == undefined && (
                <Image
                  src={`data:image/jpeg;base64,${doacao.nomeDoador}`}
                  roundedCircle
                  className="csProfilePicture mb-1"
                />
              )}
            </Link>
            <Card.Title className="csUsername">{doacao.nomeDoador}</Card.Title>
            <Card.Text className="csComment">{doacao.mensagem}</Card.Text>
            <hr></hr>
          </Card.Body>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default CardComments;
