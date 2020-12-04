import React from "react";
import { Col, Container } from "react-bootstrap";
import "./home.css";

import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Brand from "../../Components/Brand/Brand";
import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";

type Props = {};

const Home: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Header></Header>

        <Container>
          <Col className="pt-4">
            <SearchBar></SearchBar>
          </Col>
        </Container>

        <Container className="pt-4 pb-4">
          <Brand></Brand>
        </Container>

        <Container>
          <CardCrowdfunding></CardCrowdfunding>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
