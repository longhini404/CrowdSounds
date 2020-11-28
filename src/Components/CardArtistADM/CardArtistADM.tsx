import React from "react";
import { Button, Card } from "react-bootstrap";
import "./cardArtistADM.css";

import { FaTrash, FaCheck } from "react-icons/fa";
import { Artist } from "../../types/Artist";
import Swal from "sweetalert2";
import ArtistService from "../../services/ArtistService";

type Props = {
  artist: Artist;
};

const CardArtistADM: React.FC<Props> = (props) => {
  const onDelete = () => {
    Swal.fire({
      title: "Deseja remover esse Artista?",
      text: "Informe o motivo",
      input: "textarea",
      icon: "question",
    }).then((result) => {
      ArtistService.onDelete(props.artist.id, result).then(() => {
        Swal.fire({
          title: "Artista removido!",
          icon: "success",
        }).then(() => {
          window.location.reload(false);
        });
      });
    });
  };

  const onConfirm = () => {
    Swal.fire({
      title: "Deseja aprovar esse Artista?",
      icon: "question",
    }).then(() => {
      ArtistService.aprovar(props.artist.id).then(() => {
        Swal.fire({
          title: "Artista aprovado!",
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
          <Card.Title className="csTitle text-white">
            {props.artist.nome}
          </Card.Title>
          <Card.Text className="csDiscription">
            {props.artist.integrantes}
          </Card.Text>
          <Card.Img
            src={`data:image/jpeg;base64,${props.artist.arquivo}`}
            className="mb-4"
          />
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

export default CardArtistADM;
