import React, { Component } from "react";
import { Row, Image } from "react-bootstrap";
import "./brand.css";

import { Link } from "react-router-dom";

import SoundWave from "./SoundWave.gif";

type Props = {};

const Brand: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Link to="/Home">
          <div className="csLogoPosition">
            <Image src={SoundWave} roundedCircle className="csLogoSize" />
          </div>
        </Link>
        <p className="csBrandText">CrowdSounds</p>
      </Row>
    </React.Fragment>
  );
};

export default Brand;
