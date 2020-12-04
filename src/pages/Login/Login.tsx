import React from "react";
import { Container, Tabs, Tab, Row, Col, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import "./login.css";

import Brand from "../../Components/Brand/Brand";

import SignUp from "../SignUp/SignUp";

type Props = {};

const Login: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Container className="mt-4 mb-4">
          <Brand></Brand>
        </Container>

        <Tabs className="justify-content-center" defaultActiveKey="Entrar">
          <Tab eventKey="Entrar" title="Entrar">
            <Container className="mt-4 mb-4">
              <Form>
                <Row>
                  <Col>
                    <Form.Label className="csLabel">
                      E-mail ou usuário
                    </Form.Label>
                    <Form.Control
                      className="csInput"
                      id="userOrEmail"
                      name="userName"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label className="csLabel">Senha</Form.Label>
                    <Form.Control
                      className="csInput"
                      id="password"
                      name="password"
                      type="password"
                      minLength={6}
                      maxLength={20}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="csInput pt-4" controlId="formCheck">
                      <Form.Check
                        className="csLabel"
                        label="Lembrar de mim"
                        id="lembrar"
                        name="lembrar"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col className="pt-2 pb-2">
                    <Button
                      variant="btn-block"
                      className="csButton"
                      size="lg"
                      block
                      type="submit"
                    >
                      Entrar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Tab>

          <Tab eventKey="Cadastrar-se" title="Cadastrar-se">
            <SignUp></SignUp>
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default Login;
