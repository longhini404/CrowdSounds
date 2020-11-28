import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsKeepContact.css";
import { History } from "history";

import Form from "react-bootstrap/Form";
import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { ContactForm } from "../../types/ContactForm";
import ContactService from "../../services/ContactService";
import jwt_decode from "jwt-decode";
import { match } from "react-router-dom";

type Props = {
  match: match<{ id: string }>;
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsKeepContact: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: ContactForm) => {
    handleShow();
    ContactService.create({ ...data, idArtista: token.denyonlyprimarygroupsid })
      .then(() => {
        handleClose();
        swal({
          title: "Contato cadastrado com sucesso",
          icon: "success",
        }).then(() => {
          props.history.push(`/homeArtist/${props.match.params.id}`);
        });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível cadastrar o contato",
          text: err.response.data.Message,
          icon: "warning",
        });
      });
  };

  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Label className="csLabel">Contato</Form.Label>
              <Form.Control
                className="csInput"
                id="contato"
                name="contato"
                ref={register({ required: true })}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Tipo de contato</Form.Label>
              <Form.Control
                className="csInput"
                as="select"
                name="tipoContato"
                ref={register}
              >
                <option>Facebook</option>
                <option>YouTube</option>
                <option>Instagram</option>
                <option>E-mail</option>
                <option>Telefone Celular</option>
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                variant="btn-block"
                className="csButton mt-4"
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
      <Modal show={show} onHide={handleClose} className="csModalLoading">
        <LoaderProvider indicator={<Bars />}>
          <Loading />
        </LoaderProvider>
      </Modal>
    </React.Fragment>
  );
};

export default InputsKeepContact;
