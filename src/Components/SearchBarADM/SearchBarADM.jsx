import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./searchBarADM.css";

import Form from "react-bootstrap/Form";

import { FaSearch } from "react-icons/fa";

class SearchBarADM extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Row>
            <Col xs={10} md={11} lg={11}>
              <Form.Control className="csSearchBarADM" placeholder="Pesquisar" />
            </Col>
            <Row></Row>
            <Col>
              <Button className="csSearchBarADM" type="submit">
                <FaSearch />
              </Button>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    );
  }
}

export default SearchBarADM;
