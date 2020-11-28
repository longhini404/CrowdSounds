import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsKeepMerchandising.css";

import Form from "react-bootstrap/Form";

import { useForm } from "react-hook-form";
import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import MerchService from "../../services/MerchService";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";
import UserService from "../../services/UserService";
import { History } from "history";
import { Token } from "../../types/Token";
import getBase64 from "../../utils/getBase64";

import CurrencyInput from "../CurrencyInput/CurrencyInput";

type Props = {
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsKeepMerchandising: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const [image, setImage] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();
  const [idArtista, setIdArtista] = useState<number>();
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

  const onSubmit = (data: any) => {
    handleShow();
    MerchService.create({
      ...data,
      idArtista: idArtista,
      imagem: image,
      preco: value / 100,
    })
      .then((response) => {
        handleClose();
        swal({
          title: "Sucesso!",
          icon: "success",
        })
          .then(() => {
            props.history.push(`/homeArtist/${idArtista}`);
          })
          .catch((err) => {
            handleClose();
            swal({
              title: "Erro!",
              text: err.response.data.Message,
              icon: "error",
            });
          });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Erro ao criar merch!",
          text: err.response.data.Message,
          icon: "error",
        });
      });
  };

  const onChange = async (e: any) => {
    setImage(await getBase64(e.target.files[0]));
  };

  const [value, setValue] = useState<number>(0);

  const handleValueChange = (val: number) => {
    setValue(val);
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
                name="titulo"
                ref={register({ required: true })}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Preço</Form.Label>
              <CurrencyInput value={value} onValueChange={handleValueChange} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Categoria</Form.Label>
              <Form.Control
                className="csInput"
                as="select"
                name="categoria"
                ref={register({ required: true })}
              >
                <option>Vestuário</option>
                <option>Mídia Física</option>
                <option>Conjuntos</option>
                <option>Acessórios</option>
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Descrição</Form.Label>
              <Form.Control
                className="csInput"
                id="descricao"
                name="descricao"
                as="textarea"
                rows={4}
                ref={register({ required: true })}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-2">
                Foto do Merchandising
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

          <Row className="mt-4 mb-4">
            <Col>
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
        <Modal show={show} onHide={handleClose} className="csModalLoading">
          <LoaderProvider indicator={<Bars />}>
            <Loading />
          </LoaderProvider>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default InputsKeepMerchandising;
