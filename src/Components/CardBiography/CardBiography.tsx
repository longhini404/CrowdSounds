import React from "react";
import { Container, Card } from "react-bootstrap";
import "./cardBiography.css";

type Props = {
  biography: string;
  integrantes: string;
  picture: string;
  genero: string;
};

const CardBiography: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Container>
        {props.picture && (
          <Card className="csCard mt-2">
            <Card.Body>
              <Card.Img
                src={`data:image/jpeg;base64,${props.picture}`}
                width="auto"
                height="380"
              />
            </Card.Body>
          </Card>
        )}

        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Text className="csBiography">{props.biography}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Text className="csBiography">{props.genero}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="csCard mt-2">
          <Card.Body>
            <Card.Text className="csBiography">{props.integrantes}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default CardBiography;
