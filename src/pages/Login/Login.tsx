import React, { useState } from "react";
import { Container, Tabs, Tab, Row, Col, Button, Modal } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import "./login.css";

import Brand from "../../Components/Brand/Brand";

import { History } from "history";
import { LoginForm } from "../../types/LoginForm";
import { SignUpForm } from "../../types/SignUpForm";
import UserService from "../../services/UserService";
import setAuthToken from "../../utils/setAuthToken";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import SignUp from "../SignUp/SignUp";

type Props = {
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const Login: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  const onSubmitLogin = (data: LoginForm) => {
    handleShow();
    UserService.login(data)
      .then((res) => {
        try {
          localStorage.setItem("jwtToken", res.data.token);
          setAuthToken(res.data.token);
          props.history.push(`/home`);
        } catch (err) {
          handleClose();
          swal({
            title: "Não foi possível realizar o login",
            text: err.response.data,
            icon: "warning",
          });
        }
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível realizar o login",
          text: err.response.data.Message,
          icon: "warning",
        });
      });
  };

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Container className="mt-4 mb-4">
          <Brand></Brand>
        </Container>

        <Tabs className="justify-content-center" defaultActiveKey="Entrar">
          <Tab eventKey="Entrar" title="Entrar">
            <Container className="mt-4 mb-4">
              <Form onSubmit={handleSubmit(onSubmitLogin)}>
                <Row>
                  <Col>
                    <Form.Label className="csLabel">
                      E-mail ou usuário
                    </Form.Label>
                    <Form.Control
                      className="csInput"
                      id="userOrEmail"
                      name="userName"
                      ref={register({ required: true })}
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
                      ref={register({ required: true })}
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
            <SignUp history={props.history}></SignUp>
          </Tab>
        </Tabs>
        <Modal show={show} onHide={handleClose} className="csModalLoading">
          <LoaderProvider indicator={<Bars />}>
            <Loading />
          </LoaderProvider>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Login;
