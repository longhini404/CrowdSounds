import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./csmodal.css";

class csModal extends Component {
  render() {
    return (
      <React.Fragment>
        <Modal>
          <Modal.Dialog className="csBackgroundColor">
            <Modal.Header closeButton>
              <Modal.Title>Título</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Descrição</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger">Fechar</Button>
              <Button className="csButton" variant="primary">
                Salvar
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </React.Fragment>
    );
  }
}

export default csModal;
