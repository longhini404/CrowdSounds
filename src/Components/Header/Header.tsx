import React, { useEffect, useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import UserService from "../../services/UserService";
import "./header.css";
import jwt_decode from "jwt-decode";
import SoundWave from "./SoundWave.gif";
import { Link } from "react-router-dom";

type Props = {};

const Header: React.FC<Props> = (props) => {
  const [artist, setArtist] = useState<any>();
  const [loggedUser, setLoggedUser] = useState<boolean>();
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

  useEffect(() => {
    if (token?.denyonlyprimarygroupsid) {
      setLoggedUser(true);
      UserService.getIdArtista(token?.denyonlyprimarygroupsid).then(
        (response) => {
          setArtist(response.data);
        }
      );
    } else {
      setLoggedUser(false);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Link
          to={(location: any) => ({
            ...location,
            pathname: `/homeUser/${token?.denyonlyprimarygroupsid}`,
          })}
        >
          {" "}
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
            {token && artist && (
              <Link
                to={(location: any) => ({
                  ...location,
                  pathname: `/homeArtist/${artist.id}`,
                })}
              >
                <Nav.Link href="/HomeArtist">{artist.nome}</Nav.Link>
              </Link>
            )}
            {token && artist && (
              <Nav.Link href="/keepCrowdfunding">
                Cadastrar Crowdfunding
              </Nav.Link>
            )}
            {token && !artist && (
              <Nav.Link href="/CreateArtist">Cadastrar Artista</Nav.Link>
            )}
          </Nav>
          {!loggedUser && (
            <Nav>
              <Nav.Link href="/Login">Entrar</Nav.Link>
            </Nav>
          )}
          {loggedUser && +token.denyonlysid === 2 && (
            <Nav>
              <Link
                to={(location: any) => ({
                  ...location,
                  pathname: `/homeAdm/`,
                })}
              >
                {" "}
                <Nav.Item>Painel Administrador</Nav.Item>
              </Link>
            </Nav>
          )}
          {loggedUser && (
            <Nav>
              <Link
                to={(location: any) => ({
                  ...location,
                  pathname: `/homeUser/${token?.denyonlyprimarygroupsid}`,
                })}
              >
                {" "}
                <Nav.Item>Perfil</Nav.Item>
              </Link>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
