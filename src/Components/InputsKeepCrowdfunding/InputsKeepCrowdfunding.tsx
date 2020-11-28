import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsKeepCrowdfunding.css";
import { History } from "history";

import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import CrowdfundingService from "../../services/CrowdfundingService";
import { Crowdfunding } from "../../types/Crowdfunding";
import { CrowdfundingForm } from "../../types/CrowdfundingForm";
import swal from "sweetalert";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import getBase64 from "../../utils/getBase64";

import jwt_decode from "jwt-decode";
import UserService from "../../services/UserService";

import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import { Artist } from "../../types/Artist";

type Props = {
  crowdfunding?: Crowdfunding;
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsKeepCrowdfunding: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();
  const [artist, setArtist] = useState<Artist>({} as Artist);

  const [value, setValue] = useState<number>(0);
  const [image, setImage] = useState<any>();
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  useEffect(() => {
    UserService.getIdArtista(token?.denyonlyprimarygroupsid).then(
      (response) => {
        setArtist(response.data);
      }
    );
  }, []);

  const handleValueChange = (val: number) => {
    setValue(val);
  };

  const onSubmit = (data: CrowdfundingForm) => {
    handleShow();
    CrowdfundingService.create({
      ...data,
      idArtista: +artist?.id,
      meta: value / 100,
      arquivo: image,
    })
      .then((response) => {
        handleClose();
        swal({
          title: "Sucesso!",
          icon: "success",
        })
          .then(() => {
            props.history.push(`/crowdfunding/${response.data.id}`);
          })
          .catch((err) => {
            handleClose();
            swal({
              title: "Erro!",
              text: err.response.data,
              icon: "error",
            });
          });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível registrar o crowdfunding",
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
              <Form.Label className="csLabel">
                Título do Crowdfunding
              </Form.Label>
              <Form.Control
                className="csInput"
                id="titulo"
                name="titulo"
                ref={register({ required: true })}
              />
              {errors.titulo && <p>Título não pode ser vazio!</p>}
            </Col>
            {}
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Valor a ser alcançado</Form.Label>
              <CurrencyInput value={value} onValueChange={handleValueChange} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Descrição</Form.Label>
              <Form.Control
                className="csInput"
                id="descricao"
                name="descricao"
                ref={register({ required: true })}
                as="textarea"
                rows={4}
              />
            </Col>
            {errors.descricao && <p>Título não pode ser vazio!</p>}
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel mt-4">
                Imagem do Crowdfunding
              </Form.Label>
              <hr></hr>
              <input
                type="file"
                id="imagem"
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
                Criar Crowdfunding
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

export default InputsKeepCrowdfunding;
