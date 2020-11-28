import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./home.css";

import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import Brand from "../../Components/Brand/Brand";
import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CrowdfundingService from "../../services/CrowdfundingService";
import { Crowdfunding } from "../../types/Crowdfunding";
import { match } from "react-router-dom";

type Props = {
  match: match<{ id: string }>;
};

const Home: React.FC<Props> = (props) => {
  const [crowdfundings, setCrowdfundings] = useState<Crowdfunding[]>([]);

  useEffect(() => {
    CrowdfundingService.findAll().then((response) => {
      setCrowdfundings(response.data);
    });
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <div className="csBackgroundColor">
        <Header></Header>

        {/* <Container>
          <Col className="pt-4">
            <SearchBar></SearchBar>
          </Col>
        </Container> */}

        <Container className="pt-4 pb-4">
          <Brand></Brand>
        </Container>

        <Container>
          {crowdfundings &&
            crowdfundings.map((crowdfunding) => (
              <CardCrowdfunding
                dataCrowdfunding={crowdfunding}
              ></CardCrowdfunding>
            ))}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
