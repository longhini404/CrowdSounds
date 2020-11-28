import React, { useState } from "react";
import { Container, Nav, Row, Col, Button, Modal } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import "./signUp.css";

import Brand from "../../Components/Brand/Brand";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import UserService from "../../services/UserService";
import { SignUpForm } from "../../types/SignUpForm";
import { History } from "history";
import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";

type Props = {
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const SignUp: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: SignUpForm) => {
    handleShow();
    UserService.register(data)
      .then((res) => {
        handleClose();
        swal({
          title: "Usuário registrado!",
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível registrar o usuário",
          icon: "warning",
          text: err.response.data,
        });
      });
  };

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Container className="mt-4 mb-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Label className="csLabel">Nome completo</Form.Label>
                <Form.Control
                  className="csInput"
                  id="nomeUsuario"
                  name="nomeUsuario"
                  ref={register({ required: true })}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label className="csLabel">CPF</Form.Label>
                <Form.Control
                  className="csInput"
                  id="cpf"
                  name="cpf"
                  ref={register}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label className="csLabel">Login</Form.Label>
                <Form.Control
                  className="csInput"
                  id="login"
                  name="login"
                  ref={register({ required: true })}
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
                  name="senha"
                  type="password"
                  minLength={6}
                  maxLength={20}
                  ref={register({ required: true })}
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
      <Modal show={show} onHide={handleClose} className="csModalLoading">
        <LoaderProvider indicator={<Bars />}>
          <Loading />
        </LoaderProvider>
      </Modal>
    </React.Fragment>
  );
};

export default SignUp;
