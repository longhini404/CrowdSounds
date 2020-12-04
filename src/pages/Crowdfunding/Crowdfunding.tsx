import React from "react";
import { Col, Container } from "react-bootstrap";
import "./crowdfunding.css";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CardComments from "../../Components/CardComments/CardComments";

type Props = {};

const SingleCrowdfunding: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Header></Header>

        <Container>
          <Col className="pt-4">
            <SearchBar></SearchBar>
          </Col>
        </Container>

        <Container>
          <CardCrowdfunding />
        </Container>

        <Container className="pb-4">
          <CardComments />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SingleCrowdfunding;
