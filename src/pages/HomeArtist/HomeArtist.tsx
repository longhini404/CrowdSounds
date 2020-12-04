import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./homeArtist.css";

import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CardMerchandising from "../../Components/CardMerchandising/CardMerchandising";
import CardBiography from "../../Components/CardBiography/CardBiography";
import CardDiscography from "../../Components/CardDiscography/CardDiscography";

import { Link } from "react-router-dom";
import ArtistHeader from "../../Components/ArtistHeader/ArtistHeader";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

type Props = {};

const HomeArtist: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <ArtistHeader />

        <Col className="pt-4 pb-4">
          <Tabs
            className="justify-content-center"
            defaultActiveKey="Crowdfundings"
          >
            <Tab eventKey="Crowdfundings" title="Crowdfundings">
              <Container className="pt-2 pb-2">
                <CardCrowdfunding></CardCrowdfunding>
              </Container>
            </Tab>

            <Tab eventKey="Merchandising" title="Merchandising">
              <Container className="pt-2 pb-2">
                <Row>
                  <Col>
                    <CardMerchandising></CardMerchandising>
                  </Col>
                </Row>
                <Row className="mt-4 mb-4 justify-content-center">
                  <Button
                    variant="btn-block"
                    className="csButton"
                    href="../KeepMerchandising"
                    type="submit"
                  >
                    Cadastrar Merchandising
                  </Button>
                </Row>
              </Container>

              <Row className="text-center pt-4">
                <Col>
                  <p className="csContact text-white mb-2">Contato</p>
                  <p className="csContact">44 98847-3908</p>
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="Biografia" title="Biografia">
              <Container className="pt-2 pb-2">
                <CardBiography></CardBiography>

                <CardDiscography></CardDiscography>

                <Row className="mt-4 mb-4 justify-content-center">
                  <Link to="keepDiscography">
                    <Button
                      variant="btn-block"
                      className="csButton"
                      type="submit"
                    >
                      Cadastrar Discografia
                    </Button>
                  </Link>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default HomeArtist;
