import React from "react";
import { Row, Image } from "react-bootstrap";
import "./profilePictureArtist.css";

import BioMorf from "./BioMorf.jpg";

type Props = {};

const ProfilePictureArtist: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Row className="csArtist">
        <Image src={BioMorf} roundedCircle className="csProfilePictureArtist" />
      </Row>
    </React.Fragment>
  );
};

export default ProfilePictureArtist;
