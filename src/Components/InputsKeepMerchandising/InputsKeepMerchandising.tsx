import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepMerchandising.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsKeepMerchandising: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Título</Form.Label>
              <Form.Control className="csInput" id="titulo" name="titulo" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Preço</Form.Label>
              <Form.Control className="csInput" id="preco" name="preco" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Categoria</Form.Label>
              <Form.Control className="csInput" as="select" name="categoria">
                <option>Vestuário</option>
                <option>Mídia Física</option>
                <option>Conjuntos</option>
                <option>Acessórios</option>
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Descrição</Form.Label>
              <Form.Control
                className="csInput"
                id="descricao"
                name="descricao"
                as="textarea"
                rows={4}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-2">
                Foto do Merchandising
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

          <Row className="mt-4 mb-4">
            <Col>
              <Button
                variant="btn-block"
                className="csButton"
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

export default InputsKeepMerchandising;
