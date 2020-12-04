import React from "react";
import { Row, Image } from "react-bootstrap";
import "./profilePictureUser.css";

import User from "./User.jpg";

type Props = {};

const ProfilePictureUser: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Row className="csUser">
        <Image src={User} roundedCircle className="csProfilePictureUser" />
      </Row>
    </React.Fragment>
  );
};

export default ProfilePictureUser;
