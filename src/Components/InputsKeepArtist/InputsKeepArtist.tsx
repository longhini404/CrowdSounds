import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsKeepArtist.css";

import Form from "react-bootstrap/Form";
import { History } from "history";
import { useForm } from "react-hook-form";
import ArtistService from "../../services/ArtistService";
import swal from "sweetalert";
import { KeepArtistForm } from "../../types/KeepArtistForm";

import { Link, match } from "react-router-dom";
import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import { Artist } from "../../types/Artist";
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

const InputsKeepArtist: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const [dataArtist, setDataArtist] = useState<Artist>();

  const [imagePerfil, setImagePerfil] = useState<any>();
  const [imageCapa, setImageCapa] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    handleShow();
    if (props.match != null) {
      ArtistService.load(props.match.params.id)
        .then((response) => {
          setDataArtist(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          swal({
            title: "Não foi possível carregar o artista",
            text: err.response.data.Message,
            icon: "warning",
          });
        });
    }
    handleClose();
  }, [props.match.params.id]);

  const onSubmit = (data: KeepArtistForm) => {
    handleShow();
    ArtistService.put(props.match.params.id, {
      ...data,
      fotoPerfil: imagePerfil,
      fotoCapa: imageCapa,
    })
      .then(() => {
        handleClose();
        swal({
          title: "Artista editado!",
          icon: "success",
        }).then(() => {
          props.history.push(`/homeArtist/${props.match.params.id}`);
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

  const onChangePerfil = async (e: any) => {
    setImagePerfil(await getBase64(e.target.files[0]));
  };

  const onChangeCapa = async (e: any) => {
    setImageCapa(await getBase64(e.target.files[0]));
  };

  return (
    <React.Fragment>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Label className="csLabel">Gênero</Form.Label>
              <Form.Control
                className="csInput"
                id="genero"
                name="genero"
                ref={register}
                defaultValue={dataArtist?.genero}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Nome</Form.Label>
              <Form.Control
                className="csInput"
                id="nome"
                name="nome"
                ref={register}
                defaultValue={dataArtist?.nome}
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
                defaultValue={dataArtist?.biografia}
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
                defaultValue={dataArtist?.integrantes}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Facebook</Form.Label>
              <Form.Control
                className="csInput"
                id="facebook"
                name="facebook"
                ref={register}
                defaultValue={dataArtist?.facebook}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">YouTube</Form.Label>
              <Form.Control
                className="csInput"
                id="youtube"
                name="youtube"
                ref={register}
                defaultValue={dataArtist?.youTube}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Instagram</Form.Label>
              <Form.Control
                className="csInput"
                id="instagram"
                name="instagram"
                ref={register}
                defaultValue={dataArtist?.instagram}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Contato</Form.Label>
              <Form.Control
                className="csInput"
                id="celular"
                name="celular"
                maxLength={11}
                ref={register}
                defaultValue={dataArtist?.celular}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Foto de Perfil</Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagemFotoDePerfil"
                name="imagemFotoDePerfil"
                className="csFileUploadButton"
                ref={register}
                onChange={onChangePerfil}
                accept="image/png, image/jpeg"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">Foto de Capa</Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagemFotoDeCapa"
                name="imagemFotoDeCapa"
                className="csFileUploadButton"
                ref={register}
                onChange={onChangeCapa}
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

export default InputsKeepArtist;
