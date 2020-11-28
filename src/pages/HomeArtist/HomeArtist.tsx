import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./homeArtist.css";

import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CardMerchandising from "../../Components/CardMerchandising/CardMerchandising";
import CardBiography from "../../Components/CardBiography/CardBiography";
import CardDiscography from "../../Components/CardDiscography/CardDiscography";

import { Link, match } from "react-router-dom";
import { Artist } from "../../types/Artist";
import ArtistService from "../../services/ArtistService";
import ArtistHeader from "../../Components/ArtistHeader/ArtistHeader";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import jwt_decode from "jwt-decode";
import UserService from "../../services/UserService";

type Props = {
  match: match<{ id: string }>;
};

const HomeArtist: React.FC<Props> = (props) => {
  const [dataArtist, setDataArtist] = useState<Artist>({} as Artist);
  const [artistToken, setArtistToken] = useState<number>(0);
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  useEffect(() => {
    ArtistService.load(props.match.params.id).then((response) => {
      setDataArtist(response.data);
    });

    UserService.getIdArtista(token?.denyonlyprimarygroupsid).then(
      (response) => {
        setArtistToken(response.data.id);
      }
    );
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <ArtistHeader artist={dataArtist} />

        <Col className="pt-4 pb-4">
          <Tabs
            className="justify-content-center"
            defaultActiveKey="Crowdfundings"
          >
            <Tab eventKey="Crowdfundings" title="Crowdfundings">
              <Container className="pt-2 pb-2">
                {dataArtist?.crowdfundings &&
                  dataArtist?.crowdfundings.map((crowdfundingsArtist) => (
                    <CardCrowdfunding
                      dataCrowdfunding={crowdfundingsArtist}
                    ></CardCrowdfunding>
                  ))}
              </Container>
            </Tab>

            <Tab eventKey="Merchandising" title="Merchandising">
              <Container className="pt-2 pb-2">
                <Row>
                  <Col>
                    {dataArtist?.merch &&
                      dataArtist?.merch.map((merch) => (
                        <CardMerchandising
                          dataMerch={merch}
                        ></CardMerchandising>
                      ))}
                  </Col>
                </Row>

                {dataArtist.id === artistToken && (
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
                )}
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
                <CardBiography
                  biography={dataArtist.biografia}
                  integrantes={dataArtist.integrantes}
                  picture={dataArtist.fotoCapa}
                  genero={dataArtist.genero}
                ></CardBiography>

                {dataArtist?.discografias &&
                  dataArtist?.discografias.map((discography) => (
                    <CardDiscography
                      dataDiscography={discography}
                    ></CardDiscography>
                  ))}

                {dataArtist.id === artistToken && (
                  <Row className="mt-4 mb-4 justify-content-center">
                    <Link
                      to={(location: any) => ({
                        ...location,
                        pathname: `/keepDiscography`,
                      })}
                    >
                      <Button
                        variant="btn-block"
                        className="csButton"
                        type="submit"
                      >
                        Cadastrar Discografia
                      </Button>
                    </Link>
                  </Row>
                )}
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default HomeArtist;
