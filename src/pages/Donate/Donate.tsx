import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./donate.css";

import Header from "../../Components/Header/Header";
import ProfilePictureArtist from "../../Components/ProfilePictureArtist/ProfilePictureArtist";
import InputsDonate from "../../Components/InputsDonate/InputsDonate";
import { Crowdfunding } from "../../types/Crowdfunding";
import CrowdfundingService from "../../services/CrowdfundingService";
import { AxiosResponse } from "axios";
import { match } from "react-router-dom";
import { History } from "history";

type Props = {
  match: match<{ id: string }>;
  history: Pick<History, "push">;
};

const Donate: React.FC<Props> = (props) => {
  const [dataCrowdfunding, setDataCrowdfunding] = useState<Crowdfunding>(
    {} as Crowdfunding
  );

  useEffect(() => {
    CrowdfundingService.load(props.match.params.id)
      .then((response: AxiosResponse<Crowdfunding>) => {
        setDataCrowdfunding(response.data);
      })
      .catch((err) => {});
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>

        <Row style={{ paddingTop: "2rem" }}>
          <Col>
            <ProfilePictureArtist
              data={dataCrowdfunding?.artista?.fotoPerfil}
            ></ProfilePictureArtist>
            <p>{dataCrowdfunding && dataCrowdfunding.titulo}</p>
          </Col>
        </Row>

        <Container>
          {dataCrowdfunding && (
            <InputsDonate
              crowdfunding={dataCrowdfunding}
              history={props.history}
            />
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Donate;
