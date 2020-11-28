import React, { useEffect, useState } from "react";
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import "./homeADM.css";
import jwt_decode from "jwt-decode";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import ProfilePictureUser from "../../Components/ProfilePictureUser/ProfilePictureUser";
import SearchBarADM from "../../Components/SearchBarADM/SearchBarADM";
import CardHomeADM from "../../Components/CardHomeADM/CardHomeADM";
import CardArtistADM from "../../Components/CardArtistADM/CardArtistADM";
import CardCrowdfundingADM from "../../Components/CardCrowdfundingADM/CardCrowdfundingADM";

import { FaPencilAlt } from "react-icons/fa";
import { User } from "../../types/User";
import UserService from "../../services/UserService";
import swal from "sweetalert";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ArtistService from "../../services/ArtistService";
import { Artist } from "../../types/Artist";
import { Crowdfunding } from "../../types/Crowdfunding";
import CrowdfundingService from "../../services/CrowdfundingService";

import { Link } from "react-router-dom";

type Props = {};

const HomeADM: React.FC<Props> = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [crowdfundings, setCrowdfundings] = useState<Crowdfunding[]>([]);
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  useEffect(() => {
    UserService.findAll()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        swal({
          title: "Não foi possível carregar os usuários",
          text: err.response.data.Message,
          icon: "warning",
        });
      });

    ArtistService.findAll()
      .then((res) => {
        setArtists(res.data);
      })
      .catch((err) => {
        swal({
          title: "Não foi possível carregar os artistas",
          text: err.response.data.Message,
          icon: "warning",
        });
      });

    CrowdfundingService.findAll()
      .then((res) => {
        setCrowdfundings(res.data);
      })
      .catch((err) => {
        swal({
          title: "Não foi possível carregar os crowdfundings",
          text: err.response.data.Message,
          icon: "warning",
        });
      });
  }, []);

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>

        <Container>
          <Col className="pt-4">
            {/* <SearchBar></SearchBar> */}
          </Col>
        </Container>

        <Row className="pt-2">
          <Col>
            <p className="csName">{token.unique_name}</p>
          </Col>
        </Row>

        <Tabs className="justify-content-center" defaultActiveKey="Usuários">
          <Tab eventKey="Usuários" title="Usuários">
            <Container>
              <Col className="pt-2 pb-2">
                <SearchBarADM></SearchBarADM>
              </Col>
            </Container>

            <Container className="pb-4">
              {users &&
                users.map((user) => <CardHomeADM user={user}></CardHomeADM>)}
            </Container>
          </Tab>

          <Tab eventKey="Artistas" title="Artistas">
            <Container>
              <Col className="pt-2 pb-2">
                <SearchBarADM></SearchBarADM>
              </Col>
            </Container>

            <Container className="pb-4">
              {artists &&
                artists.map((artist) => (
                  <CardArtistADM artist={artist}></CardArtistADM>
                ))}
            </Container>
          </Tab>

          <Tab eventKey="Crowdfundings" title="Crowdfundings">
            <Container>
              <Col className="pt-2 pb-2">
                <SearchBarADM></SearchBarADM>
              </Col>
            </Container>

            <Container className="pb-4">
              {crowdfundings &&
                crowdfundings.map((crowdfunding) => (
                  <CardCrowdfundingADM
                    crowdfunding={crowdfunding}
                  ></CardCrowdfundingADM>
                ))}
            </Container>
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default HomeADM;
