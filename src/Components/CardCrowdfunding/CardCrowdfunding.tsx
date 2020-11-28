import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./cardCrowdfunding.css";

import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import { Crowdfunding } from "../../types/Crowdfunding";
import { Link, match } from "react-router-dom";
import CrowdfundingService from "../../services/CrowdfundingService";
import swal from "sweetalert";

import avatar from "./avatar.png";

type Props = {
  dataCrowdfunding?: Crowdfunding;
  match?: match<{ id: string }>;
};

const CrowdfundingCard: React.FC<Props> = (props) => {
  const [data, setData] = useState<Crowdfunding | undefined>();

  useEffect(() => {
    if (props.match != null) {
      CrowdfundingService.load(props.match.params.id)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          swal({
            title: "Não foi possível carregar o crowdfunding",
            text: err.response.data.Message,
            icon: "warning",
          });
        });
    }
  }, []);

  return (
    <React.Fragment>
      <Card className="csCard">
        <Link
          to={(location: any) => ({
            ...location,
            pathname: `/crowdfunding/${props.dataCrowdfunding?.id}`,
          })}
        >
          <Card.Img
            src={`data:image/jpeg;base64,${props.dataCrowdfunding?.arquivo}`}
            width="auto"
            height="380"
          />
        </Link>
        <Card.Body>
          <Link to="/HomeArtist">
            {props.dataCrowdfunding?.artista?.fotoPerfil && (
              <Image
                src={`data:image/jpeg;base64,${props.dataCrowdfunding?.artista?.fotoPerfil}`}
                className="csArtistPicture mb-1"
                roundedCircle
              />
            )}
            {props.dataCrowdfunding?.artista?.fotoPerfil === undefined && (
              <Image
                src={avatar}
                className="csArtistPicture mb-1"
                roundedCircle
              />
            )}
          </Link>
          <Card.Title className="csTitle">
            {data != null ? data.titulo : props.dataCrowdfunding?.titulo}
          </Card.Title>
          <Card.Text className="csDiscription">
            {data != null ? data.descricao : props.dataCrowdfunding?.descricao}
          </Card.Text>
          <ProgressBar
            variant="primary"
            className="csProgressBar"
            now={
              data != null
                ? data.percentualAtingido
                : props.dataCrowdfunding?.percentualAtingido
            }
          />
          <Card.Text className="csDiscription mt-2">
            R${" "}
            {data != null
              ? data.valorArrecadado
              : props.dataCrowdfunding?.valorArrecadado}{" "}
            de R$ {data != null ? data.meta : props.dataCrowdfunding?.meta}{" "}
          </Card.Text>
          <Link
            to={(location: any) => ({
              ...location,
              pathname: `/donate/${props.dataCrowdfunding?.id}`,
            })}
          >
            <Button
              variant="btn-block mt-2"
              className="csButton"
              size="lg"
              block
            >
              Contribuir
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CrowdfundingCard;
