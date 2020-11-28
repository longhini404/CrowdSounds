import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsKeepDiscography.css";

import Form from "react-bootstrap/Form";
import { History } from "history";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { DiscographyForm } from "../../types/DiscographyForm";
import DiscographyService from "../../services/DiscographyService";
import getBase64 from "../../utils/getBase64";

import jwt_decode from "jwt-decode";

import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import UserService from "../../services/UserService";

type Props = {
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsKeepDiscography: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const [image, setImage] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();
  const [idArtista, setIdArtista] = useState<number>(0);

  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  useEffect(() => {
    if (token?.denyonlyprimarygroupsid) {
      UserService.getIdArtista(token?.denyonlyprimarygroupsid).then(
        (response) => {
          setIdArtista(response.data.id);
        }
      );
    }
  }, []);

  const onSubmit = (data: DiscographyForm) => {
    handleShow();
    DiscographyService.post({
      ...data,
      idArtista: idArtista,
      imagemDiscografia: image,
    })
      .then(() => {
        handleClose();
        swal({
          title: "Discografia registrada!",
          icon: "success",
        }).then(() => {
          props.history.push(`/homeArtist/${idArtista}`);
        });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível registrar a discografia",
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
              <Form.Label className="csLabel">Título</Form.Label>
              <Form.Control
                className="csInput"
                id="titulo"
                name="nomeDiscografia"
                type="text"
                minLength={1}
                ref={register({ required: true })}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Categoria</Form.Label>
              <Form.Control
                as="select"
                className="csInput"
                id="categoria"
                name="idTipoDiscografia"
                ref={register({ required: true })}
              >
                <option>Álbuns</option>
                <option>Singles e EPs</option>
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Link</Form.Label>
              <Form.Control
                className="csInput"
                id="link"
                name="linkIntegracao"
                ref={register}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Capa do Disco</Form.Label>
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

export default InputsKeepDiscography;
