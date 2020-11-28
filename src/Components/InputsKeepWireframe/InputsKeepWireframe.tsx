import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepWireframe.css";
import jwt_decode from "jwt-decode";
import Wireframe from "../../Components/Wireframe/Wireframe";

import { FaTrash } from "react-icons/fa";

import Form from "react-bootstrap/Form";
import { Token } from "../../types/Token";
import UserService from "../../services/UserService";
import { useForm } from "react-hook-form";

type Props = {};

const InputsKeepWireframe: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm();
  let token: any = jwt_decode(localStorage.getItem("jwtToken") || "");
  const [idArtista, setIdArtista] = useState<number>();

  useEffect(() => {
    if (token?.denyonlyprimarygroupsid) {
      UserService.getIdArtista(token?.denyonlyprimarygroupsid).then(
        (response) => {
          setIdArtista(response.data.id);
        }
      );
    }
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Link do Wireframe</Form.Label>
              <Form.Control
                className="csInput"
                id="wireframe"
                name="wireframe"
              />
            </Col>
          </Row>

          <Container>
            <Wireframe></Wireframe>
          </Container>

          <Row className="csIcon mt-4">
            <Col>
              <FaTrash />
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
    </React.Fragment>
  );
};

export default InputsKeepWireframe;
