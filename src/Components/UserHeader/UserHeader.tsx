import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { FaPencilAlt } from "react-icons/fa";
import ProfilePictureUser from "../ProfilePictureUser/ProfilePictureUser";
import { Link } from "react-router-dom";

type Props = {};

const UserHeader: React.FC<Props> = (props) => {
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
            <SearchBar></SearchBar>
          </Col>
        </Container>

        <Row className="pt-2">
          <Col>
            <ProfilePictureUser></ProfilePictureUser>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <Link to="keepUser">
              <FaPencilAlt className="text-white" />
            </Link>
          </Col>
        </Row>

        <Row className="pt-2">
          <Col>
            <p className="csName">Guilherme Longhini</p>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default UserHeader;
