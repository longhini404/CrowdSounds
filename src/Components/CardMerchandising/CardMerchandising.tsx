import React, { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import "./cardMerchandising.css";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import { Merchandising } from "../../types/Merchandising";

import { Link } from "react-router-dom";

type Props = {
  dataMerch: Merchandising;
};

const CardMerchandising: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center pt-2">
          <p>{props.dataMerch.categoria}</p>
        </Row>
      </Container>

      <Row className="justify-content-center pt-2" xs={2} md={4} lg={6}>
        <Card className="csCard">
          <Card.Img src={`data:image/jpeg;base64,${props.dataMerch.imagem}`} />
          <Card.Body>
            <Card.Title className="csTitle">
              {props.dataMerch.titulo}
            </Card.Title>
            <Card.Text className="csPrice">
              R$ {props.dataMerch.preco}
            </Card.Text>
            <Card.Text className="csDescription">
              {props.dataMerch.descricao}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default CardMerchandising;
