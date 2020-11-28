import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsCreateArtist.css";

import Form from "react-bootstrap/Form";
import { History } from "history";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { CreateArtistForm } from "../../types/CreateArtistForm";
import ArtistService from "../../services/ArtistService";
import getBase64 from "../../utils/getBase64";

import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import jwt_decode from "jwt-decode";

type Props = {
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsCreateArtist: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const [image, setImage] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  const onSubmit = (data: CreateArtistForm) => {
    handleShow();
    ArtistService.create({
      ...data,
      arquivo: image,
      idUsuario: +token.denyonlyprimarygroupsid,
    })
      .then((res) => {
        handleClose();
        swal({
          title: "Artista criado com sucesso!",
          icon: "success",
        }).then(() => {
          props.history.push(`/homeArtist/${res.data.id}`);
        });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível registrar o artista",
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
              <Form.Label className="csLabel">Nome do Artista</Form.Label>
              <Form.Control
                className="csInput"
                id="nome"
                name="nome"
                type="text"
                minLength={1}
                ref={register({ required: true })}
              />
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
                ref={register}
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
                ref={register}
                rows={4}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">
                Documento de um dos integrantes
              </Form.Label>
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
                variant="btn-block mt-4 mb-4"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Enviar Solicitação
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

export default InputsCreateArtist;
