import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
// import SearchBar from "../SearchBar/SearchBar";
import { FaPencilAlt } from "react-icons/fa";
import { User } from "../../types/User";
import ProfilePictureUser from "../ProfilePictureUser/ProfilePictureUser";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

type Props = {
  user: User;
};

const UserHeader: React.FC<Props> = (props) => {
  let tokenStorage = localStorage.getItem("jwtToken");
  let token: any = tokenStorage !== null ? jwt_decode(tokenStorage) : null;

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
            <ProfilePictureUser
              data={props.user.fotoPerfil}
            ></ProfilePictureUser>
          </Col>
        </Row>

        {+props.user.id === +token?.denyonlyprimarygroupsid && (
          <Row className="text-center">
            <Col>
              <Link
                to={(location: any) => ({
                  ...location,
                  pathname: `/keepUser/${props.user.id}`,
                })}
              >
                <FaPencilAlt className="text-white" />
              </Link>
            </Col>
          </Row>
        )}

        <Row className="pt-2">
          <Col>
            <p className="csName">{props.user.nomeUsuario}</p>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default UserHeader;
