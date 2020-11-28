import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./inputsDonate.css";

import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import CrowdfundingService from "../../services/CrowdfundingService";
import { DonateForm } from "../../types/DonateForm";
import { Crowdfunding } from "../../types/Crowdfunding";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import { TipoPagamento } from "../../types/TipoPagamento";
import TipoPagamentoService from "../../services/TipoPagamentoService";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";
import { History } from "history";

import { LoaderProvider, useLoading, Bars } from "@agney/react-loading";
import UserService from "../../services/UserService";
import { User } from "../../types/User";

type Props = {
  crowdfunding: Crowdfunding;
  history: Pick<History, "push">;
};

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

const InputsDonate: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState<number>(0);
  const { register, handleSubmit, errors } = useForm();
  const [tiposPagamento, setTiposPagamento] = useState<TipoPagamento[]>([]);
  const [user, setUser] = useState<User>();
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  const handleValueChange = (val: number) => {
    setValue(val);
  };

  useEffect(() => {
    TipoPagamentoService.findAll().then((response) => {
      setTiposPagamento(response.data);
    });

    UserService.load(token?.denyonlyprimarygroupsid).then((response) => {
      setUser(response.data);
    });
  }, [props.crowdfunding]);

  const onSubmit = (data: DonateForm) => {
    handleShow();
    CrowdfundingService.donate(
      { ...data, valor: value / 100 },
      props.crowdfunding.id,
      +token?.denyonlyprimarygroupsid
    )
      .then(() => {
        handleClose();
        swal({
          title: "Doação realizada com sucesso",
          icon: "success",
        }).then(() => {
          props.history.push(`/crowdfunding/${props.crowdfunding.id}`);
        });
      })
      .catch((err) => {
        handleClose();
        swal({
          title: "Não foi possível realizar a doação",
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
              <Form.Label className="csLabel">Valor da Colaboração</Form.Label>
              <CurrencyInput
                value={value}
                onValueChange={handleValueChange}
              ></CurrencyInput>
              {errors.valor && <p>{errors.valor.message}</p>}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Nome</Form.Label>
              <Form.Control
                className="csInput"
                id="donationName"
                name="nomeDoador"
                type="text"
                defaultValue={user?.nomeUsuario}
                ref={register}
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
                defaultValue={user?.email}
                ref={register}
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
                defaultValue={user?.cpf}
                ref={register}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Forma de Pagamento</Form.Label>
              <Form.Control
                className="csInput"
                as="select"
                ref={register}
                name="tipoPagamento"
              >
                {tiposPagamento &&
                  tiposPagamento.map((tipoPagamento) => {
                    return <option>{tipoPagamento.descricao}</option>;
                  })}
              </Form.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Número do cartão</Form.Label>
              <Form.Control
                className="csInput"
                id="numeroCartao"
                name="numeroCartao"
                ref={register}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Validade</Form.Label>
              <Form.Control
                className="csInput"
                id="validadeCartao"
                name="validadeCartao"
                type="date"
                placeholder="00/00/0000"
                ref={register}
              />
            </Col>

            <Col>
              <Form.Label className="csLabel">CVV</Form.Label>
              <Form.Control
                className="csInput"
                id="cvv"
                name="cvv"
                placeholder="000"
                ref={register}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Mensagem</Form.Label>
              <Form.Control
                className="csInput"
                id="message"
                name="mensagem"
                as="textarea"
                rows={4}
                ref={register}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="csInput pt-2" controlId="formCheck">
                <Form.Check
                  className="csLabel"
                  label="Colaborar em anônimo"
                  id="anonimo"
                  name="anonimo"
                  ref={register}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="btn-block mb-2"
                className="csButton"
                size="lg"
                block
                type="submit"
              >
                Contribuir
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

export default InputsDonate;
