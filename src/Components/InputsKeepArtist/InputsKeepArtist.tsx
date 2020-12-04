import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepArtist.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsKeepArtist: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Gênero</Form.Label>
              <Form.Control className="csInput" id="genero" name="genero" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Nome</Form.Label>
              <Form.Control className="csInput" id="nome" name="nome" />
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
              <Form.Label className="csLabel">Facebook</Form.Label>
              <Form.Control className="csInput" id="facebook" name="facebook" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">YouTube</Form.Label>
              <Form.Control className="csInput" id="youtube" name="youtube" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Instagram</Form.Label>
              <Form.Control
                className="csInput"
                id="instagram"
                name="instagram"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Contato</Form.Label>
              <Form.Control
                className="csInput"
                id="celular"
                name="celular"
                maxLength={11}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Foto de Perfil</Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagemFotoDePerfil"
                name="imagemFotoDePerfil"
                className="csFileUploadButton"
                accept="image/png, image/jpeg"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Foto de Capa</Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagemFotoDeCapa"
                name="imagemFotoDeCapa"
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

export default InputsKeepArtist;
