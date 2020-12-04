import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepCrowdfunding.css";
import Form from "react-bootstrap/Form";
type Props = {};

const InputsKeepCrowdfunding: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">
                Título do Crowdfunding
              </Form.Label>
              <Form.Control className="csInput" id="titulo" name="titulo" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Valor a ser alcançado</Form.Label>
              <Form.Control className="csInput" id="valor" name="valor" />
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
              <Form.Label className="csLabel mt-4">
                Imagem do Crowdfunding
              </Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagem"
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
                Criar Crowdfunding
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default InputsKeepCrowdfunding;
