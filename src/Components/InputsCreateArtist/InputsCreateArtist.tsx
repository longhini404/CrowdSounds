import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsCreateArtist.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsCreateArtist: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Nome do Artista</Form.Label>
              <Form.Control
                className="csInput"
                id="nome"
                name="nome"
                type="text"
                minLength={1}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Biografia</Form.Label>
              <Form.Control
                className="csInput"
                id="biografia"
                name="biografia"
                as="textarea"
                rows={4}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Integrantes</Form.Label>
              <Form.Control
                className="csInput"
                id="integrantes"
                name="integrantes"
                as="textarea"
                rows={4}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">
                Documento de um dos integrantes
              </Form.Label>
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
                variant="btn-block mt-4 mb-4"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Enviar Solicitação
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default InputsCreateArtist;
