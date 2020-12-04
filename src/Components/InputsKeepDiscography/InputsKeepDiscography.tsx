import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepDiscography.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsKeepDiscography: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Título</Form.Label>
              <Form.Control
                className="csInput"
                id="titulo"
                name="nomeDiscografia"
                type="text"
                minLength={1}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Categoria</Form.Label>
              <Form.Control
                as="select"
                className="csInput"
                id="categoria"
                name="idTipoDiscografia"
              >
                <option>Álbuns</option>
                <option>Singles e EPs</option>
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Link</Form.Label>
              <Form.Control
                className="csInput"
                id="link"
                name="linkIntegracao"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Capa do Disco</Form.Label>
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

export default InputsKeepDiscography;
