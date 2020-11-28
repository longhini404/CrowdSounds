import React from "react";
import { Row, Image } from "react-bootstrap";
import "./profilePictureArtist.css";

import avatar from "./avatar.png";

type Props = {
  data: string;
};

const ProfilePictureArtist: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Row className="csArtist">
        {props.data && props.data !== "" && (
          <Image
            src={`data:image/jpeg;base64,${props.data}`}
            roundedCircle
            className="csProfilePictureArtist"
          />
        )}
        {(props.data === undefined || props.data === "") && (
          <Image
            src={avatar}
            roundedCircle
            className="csProfilePictureArtist"
          />
        )}
      </Row>
    </React.Fragment>
  );
};

export default ProfilePictureArtist;
