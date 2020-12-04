import React from "react";
import { Col, Container } from "react-bootstrap";
import "./homeUser.css";
import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CardFavorite from "../../Components/CardFavorite/CardFavorite";
import CardHistoric from "../../Components/CardHistoric/CardHistoric";

import UserHeader from "../../Components/UserHeader/UserHeader";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

type Props = {};

const HomeUser: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <UserHeader />

        <Col className="pt-4 pb-4">
          <Tabs
            className="justify-content-center"
            defaultActiveKey="Crowdfundings"
          >
            <Tab eventKey="Crowdfundings" title="Crowdfundings">
              <Container className="pb-4">
                <CardCrowdfunding></CardCrowdfunding>
              </Container>
            </Tab>

            <Tab eventKey="Histórico" title="Histórico">
              <Container className="pb-4">
                <CardHistoric></CardHistoric>
              </Container>
            </Tab>

            <Tab eventKey="Favoritos" title="Favoritos">
              <Container className="pb-4">
                <CardFavorite></CardFavorite>
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default HomeUser;
