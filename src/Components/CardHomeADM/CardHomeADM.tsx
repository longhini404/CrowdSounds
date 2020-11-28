import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import "./cardHomeADM.css";

import { FaTrash } from "react-icons/fa";
import { User } from "../../types/User";
import Swal from "sweetalert2";
import UserService from "../../services/UserService";

import { Link } from "react-router-dom";

import avatar from "./avatar.png";

type Props = {
  user: User;
};

const CardHomeADM: React.FC<Props> = (props) => {
  const onDelete = () => {
    Swal.fire({
      title: "Deseja remover esse usuário?",
      text: "Informe o motivo",
      input: "textarea",
      icon: "question",
    }).then((result) => {
      UserService.onDelete(props.user.id, result).then(() => {
        Swal.fire({
          title: "Usuário removido!",
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
          <Link to="/HomeArtist">
            {props.user.fotoPerfil && (
              <Image
                src={avatar}
                className="csProfilePicture mb-1"
                roundedCircle
              />
            )}
            {props.user.fotoPerfil == undefined && (
              <Image
                src={props.user.fotoPerfil}
                className="csProfilePicture mb-1"
                roundedCircle
              />
            )}
          </Link>
          <Card.Title className="csTitle">{props.user.login}</Card.Title>
          <Button variant="danger p-2" onClick={onDelete}>
            <FaTrash className="icon" />
          </Button>
          <hr></hr>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardHomeADM;
