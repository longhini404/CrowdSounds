import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepContact.css";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsKeepContact: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label className="csLabel">Contato</Form.Label>
              <Form.Control className="csInput" id="contato" name="contato" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="csLabel">Tipo de contato</Form.Label>
              <Form.Control className="csInput" as="select" name="tipoContato">
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
    </React.Fragment>
  );
};

export default InputsKeepContact;
