import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsKeepUser.css";

import Form from "react-bootstrap/Form";
import { History } from "history";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import UserService from "../../services/UserService";
import { KeepUserForm } from "../../types/KeepUserForm";

import { match } from "react-router-dom";
import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import { User } from "../../types/User";
import getBase64 from "../../utils/getBase64";

type Props = {
  history: Pick<History, "push">;
  match: match<{ id: string }>;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsKeepUser: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const [dataUser, setDataUser] = useState<User>();
  const [image, setImage] = useState<any>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    handleShow();
    if (props.match != null) {
      UserService.load(props.match.params.id)
        .then((response) => {
          setDataUser(response.data);
        })
        .catch((err) => {
          swal({
            title: "Não foi possível carregar o usuário",
            text: err.response.data.Message,
            icon: "warning",
          });
        });
    }
    handleClose();
  }, [props.match.params.id]);

  const onSubmit = (data: KeepUserForm) => {
    handleShow();
    UserService.put(props.match.params.id, { ...data, fotoPerfil: image })
      .then(() => {
        handleClose();
        swal({
          title: "Usuário editado!",
          icon: "success",
        }).then(() => {
          props.history.push(`/homeUser/${props.match.params.id}`);
        });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível editar o usuário",
          text: err.response.data.Message,
          icon: "warning",
        });
      });
  };

  const onChange = async (e: any) => {
    setImage(await getBase64(e.target.files[0]));
  };

  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Nome</Form.Label>
              <Form.Control
                className="csInput"
                id="username"
                name="nomeUsuario"
                type="text"
                minLength={1}
                defaultValue={dataUser?.nomeUsuario}
                ref={register({ required: true })}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Email</Form.Label>
              <Form.Control
                className="csInput"
                id="email"
                name="email"
                type="email"
                defaultValue={dataUser?.email}
                ref={register({ required: true })}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Foto de Perfil</Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagem"
                name="imagem"
                className="csFileUploadButton"
                ref={register}
                onChange={onChange}
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

        <Modal show={show} onHide={handleClose} className="csModalLoading">
          <LoaderProvider indicator={<Bars />}>
            <Loading />
          </LoaderProvider>
        </Modal>
      </Container>
    </React.Fragment>
  );
};
export default InputsKeepUser;
