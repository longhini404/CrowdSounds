import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./header.css";
import SoundWave from "./SoundWave.gif";
import { Link } from "react-router-dom";

type Props = {};

const Header: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Link to="HomeUser">
          <Image
            src={SoundWave}
            width="30"
            height="30"
            className="d-inline-block align-top ml-2 mr-4"
            roundedCircle
          />
        </Link>
        <Navbar.Brand href="/Home">CrowdSounds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/CreateArtist">Cadastrar Artista</Nav.Link>
            <Nav.Link href="/keepCrowdfunding">Cadastrar Crowdfunding</Nav.Link>
          </Nav>

          <Nav>
            <Link to="HomeADM">
              <Nav.Item>ADM</Nav.Item>
            </Link>
          </Nav>

          <Nav>
            <Link to="Login">
              <Nav.Item>Entrar</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
