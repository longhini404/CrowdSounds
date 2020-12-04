import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsDonate.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsDonate: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Valor da Colaboração</Form.Label>
              <Form.Control
                className="csInput"
                id="valor"
                name="valor"
                placeholder="R$"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Nome</Form.Label>
              <Form.Control
                className="csInput"
                id="donationName"
                name="nomeDoador"
                type="text"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">E-mail</Form.Label>
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
              <Form.Label className="csLabel">CPF</Form.Label>
              <Form.Control className="csInput" id="cpf" name="cpf" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Forma de Pagamento</Form.Label>
              <Form.Control
                className="csInput"
                as="select"
                name="tipoPagamento"
              ></Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Número do cartão</Form.Label>
              <Form.Control
                className="csInput"
                id="numeroCartao"
                name="numeroCartao"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Validade</Form.Label>
              <Form.Control
                className="csInput"
                id="validadeCartao"
                name="validadeCartao"
                type="date"
                placeholder="00/00/0000"
              />
            </Col>

            <Col>
              <Form.Label className="csLabel">CVV</Form.Label>
              <Form.Control
                className="csInput"
                id="cvv"
                name="cvv"
                placeholder="000"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Mensagem</Form.Label>
              <Form.Control
                className="csInput"
                id="message"
                name="mensagem"
                as="textarea"
                rows={4}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="csInput pt-2" controlId="formCheck">
                <Form.Check
                  className="csLabel"
                  label="Colaborar em anônimo"
                  id="anonimo"
                  name="anonimo"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="btn-block mb-2"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Contribuir
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default InputsDonate;
