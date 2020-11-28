import React, { useEffect, useState } from "react";
import { Col, Container, Nav } from "react-bootstrap";
import "./crowdfunding.css";
import Header from "../../Components/Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import CardCrowdfunding from "../../Components/CardCrowdfunding/CardCrowdfunding";
import CardComments from "../../Components/CardComments/CardComments";
import { Crowdfunding } from "../../types/Crowdfunding";
import CrowdfundingService from "../../services/CrowdfundingService";
import { match } from "react-router-dom";
import { AxiosResponse } from "axios";

type Props = {
  match: match<{ id: string }>;
};

const SingleCrowdfunding: React.FC<Props> = (props) => {
  const [dataCrowdfunding, setDataCrowdfunding] = useState<
    Crowdfunding | undefined
  >();

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
        <Header></Header>

        <Container>
          <Col className="pt-4">
            {/* <SearchBar></SearchBar> */}
          </Col>
        </Container>

        <Container>
          {dataCrowdfunding && (
            <CardCrowdfunding
              dataCrowdfunding={dataCrowdfunding}
              match={props.match}
            />
          )}
        </Container>

        <Container className="pb-4">
          {dataCrowdfunding && (
            <CardComments dataCrowdfunding={dataCrowdfunding} />
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SingleCrowdfunding;
