import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepUser.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsKeepUser: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Nome</Form.Label>
              <Form.Control
                className="csInput"
                id="username"
                name="nomeUsuario"
                type="text"
                minLength={1}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Email</Form.Label>
              <Form.Control
                className="csInput"
                id="email"
                name="email"
                type="email"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Foto de Perfil</Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagem"
                name="imagem"
                className="csFileUploadButton"
                accept="image/png, image/jpeg"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                variant="btn-block"
                className="csButton mt-4 mb-4"
                size="lg"
                block
                type="submit"
              >
                Confirmar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};
export default InputsKeepUser;
