import React from "react";
import { Row, Card, Image, Button } from "react-bootstrap";
import "./cardCrowdfundingADM.css";

import { FaTrash, FaCheck } from "react-icons/fa";
import { Crowdfunding } from "../../types/Crowdfunding";
import Swal from "sweetalert2";
import CrowdfundingService from "../../services/CrowdfundingService";
import avatar from "./avatar.png";
import { Link } from "react-router-dom";

type Props = {
  crowdfunding: Crowdfunding;
};

const CardCrowdfundingADM: React.FC<Props> = (props) => {
  const onDelete = () => {
    Swal.fire({
      title: "Deseja remover esse Crowdfunding?",
      text: "Informe o motivo",
      input: "textarea",
      icon: "question",
    }).then((result) => {
      CrowdfundingService.onDelete(props.crowdfunding.id, result).then(() => {
        Swal.fire({
          title: "Crowdfunding removido!",
          icon: "success",
        }).then(() => {
          window.location.reload(false);
        });
      });
    });
  };

  const onConfirm = () => {
    Swal.fire({
      title: "Deseja aprovar esse Crowdfunding?",
      icon: "question",
    }).then(() => {
      CrowdfundingService.aprovar(props.crowdfunding.id).then(() => {
        Swal.fire({
          title: "Crowdfunding aprovado!",
          icon: "success",
        }).then(() => {
          window.location.reload(false);
        });
      });
    });
  };

  return (
    <React.Fragment>
      <Card className="csCardADM">
        <Card.Body>
          <Card.Img
            src={`data:image/jpeg;base64,${props.crowdfunding.arquivo}`}
            width="auto"
            height="380"
          />
          <Row className="justify-content-center mt-2 mb-2">
            <Link to="/HomeArtist">
              {props.crowdfunding.artista?.fotoPerfil && (
                <Image
                  src={`data:image/jpeg;base64,${props.crowdfunding.artista?.fotoPerfil}`}
                  className="csProfilePicture mb-1"
                  roundedCircle
                />
              )}
              {(!props.crowdfunding.artista?.fotoPerfil ||
                props.crowdfunding.artista?.fotoPerfil === "") && (
                <Image
                  src={avatar}
                  className="csProfilePicture mb-1"
                  roundedCircle
                />
              )}
            </Link>
          </Row>
          <Card.Title className="csTitle text-white">
            {props.crowdfunding.artista?.nome}
          </Card.Title>
          <Card.Title className="csTitle text-white">
            {props.crowdfunding.titulo}
          </Card.Title>
          <Card.Text className="csDiscription text-white">
            {props.crowdfunding.descricao}
          </Card.Text>
          <Card.Text className="csPrice">
            R$ {props.crowdfunding.meta}
          </Card.Text>

          <Button variant="danger p-2 mr-2" onClick={onDelete}>
            <FaTrash className="icon" />
          </Button>

          <Button variant="success p-2 ml-2" onClick={onConfirm}>
            <FaCheck className="icon" />
          </Button>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardCrowdfundingADM;
