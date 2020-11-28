import React, { useEffect, useState } from "react";
import { Col, Container, Fade } from "react-bootstrap";
import "./homeUser.css";
import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CardFavorite from "../../Components/CardFavorite/CardFavorite";
import CardHistoric from "../../Components/CardHistoric/CardHistoric";

import { match } from "react-router-dom";
import { User } from "../../types/User";
import UserService from "../../services/UserService";
import UserHeader from "../../Components/UserHeader/UserHeader";
import CrowdfundingService from "../../services/CrowdfundingService";
import { Crowdfunding } from "../../types/Crowdfunding";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

type Props = {
  match: match<{ id: string }>;
};

const HomeUser: React.FC<Props> = (props) => {
  const [dataUser, setDataUser] = useState<User>({} as User);
  const [crowdfundings, setCrowdfundings] = useState<Crowdfunding[]>([]);
  useEffect(() => {
    UserService.load(props.match.params.id).then((response) => {
      setDataUser(response.data);
    });
    CrowdfundingService.findAll().then((res) => {
      setCrowdfundings(res.data);
    });
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <UserHeader user={dataUser} />

        <Col className="pt-4 pb-4">
          <Tabs
            className="justify-content-center"
            defaultActiveKey="Crowdfundings"
          >
            <Tab eventKey="Crowdfundings" title="Crowdfundings">
              <Container className="pb-4">
                {crowdfundings &&
                  crowdfundings.map((crowdfunding) => (
                    <CardCrowdfunding
                      dataCrowdfunding={crowdfunding}
                    ></CardCrowdfunding>
                  ))}
              </Container>
            </Tab>

            <Tab eventKey="Histórico" title="Histórico">
              <Container className="pb-4">
                {dataUser.historico &&
                  dataUser.historico.map((donation) => (
                    <CardHistoric donation={donation}></CardHistoric>
                  ))}
              </Container>
            </Tab>
          </Tabs>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default HomeUser;
