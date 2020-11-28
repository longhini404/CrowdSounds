import React, { Component } from "react";
import { Row, Image } from "react-bootstrap";
import "./profilePictureUser.css";

import avatar from "./avatar.png";

type Props = {
  data: string;
};

const ProfilePictureUser: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Row className="csUser">
        {props.data && (
          <Image
            src={`data:image/jpeg;base64,${props.data}`}
            roundedCircle
            className="csProfilePictureUser"
          />
        )}
        {(props.data === undefined || props.data === "") && (
          <Image src={avatar} roundedCircle className="csProfilePictureUser" />
        )}
      </Row>
    </React.Fragment>
  );
};

export default ProfilePictureUser;
