import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./searchBar.css";

import Form from "react-bootstrap/Form";

import { FaSearch } from "react-icons/fa";

type Props = {};

const SearchBar: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Form>
        <Row>
          <Col xs={10} md={10} lg={10}>
            <Form.Control className="csSearchBar" placeholder="Pesquisar" />
          </Col>
          <Row></Row>
          <Col>
            <Button className="csSearchBar" type="submit">
              <FaSearch />
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default SearchBar;
