import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import "./signUp.css";

type Props = {};

const SignUp: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Container className="mt-4 mb-4">
          <Form>
            <Row>
              <Col>
                <Form.Label className="csLabel">Nome completo</Form.Label>
                <Form.Control
                  className="csInput"
                  id="nomeUsuario"
                  name="nomeUsuario"
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
                <Form.Label className="csLabel">Login</Form.Label>
                <Form.Control className="csInput" id="login" name="login" />
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
                <Form.Label className="csLabel">Senha</Form.Label>
                <Form.Control
                  className="csInput"
                  id="password"
                  name="senha"
                  type="password"
                  minLength={6}
                  maxLength={20}
                />
              </Col>
            </Row>

            <Row>
              <Col className="pt-4">
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
      </div>
    </React.Fragment>
  );
};

export default SignUp;
