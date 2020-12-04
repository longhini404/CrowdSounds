import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./inputsKeepWireframe.css";
import Wireframe from "../../Components/Wireframe/Wireframe";

import { FaTrash } from "react-icons/fa";

import Form from "react-bootstrap/Form";

type Props = {};

const InputsKeepWireframe: React.FC<Props> = (props) => {
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
