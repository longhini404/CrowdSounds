import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import {
  FaPencilAlt,
  FaHeart,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import ProfilePictureArtist from "../ProfilePictureArtist/ProfilePictureArtist";
import { Link } from "react-router-dom";
import "./artistHeader.css";

type Props = {};

const ArtistHeader: React.FC<Props> = (props) => {
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

        <Row className="pt-4">
          <Col>
            <ProfilePictureArtist></ProfilePictureArtist>
            <p className="csName">BioMorf</p>
          </Col>
        </Row>

        <Row className="text-center pt-4">
          <Col>
            <Link to="keepArtist">
              <FaPencilAlt className="text-white" />
            </Link>
          </Col>
        </Row>

        <Row className="text-center pt-4">
          <Col>
            <Link to="">
              <FaFacebook className="text-white mr-4" />
            </Link>
            <Link to="">
              <FaYoutube className="text-white" />
            </Link>
            <Link to="">
              <FaInstagram className="text-white ml-4" />
            </Link>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ArtistHeader;
