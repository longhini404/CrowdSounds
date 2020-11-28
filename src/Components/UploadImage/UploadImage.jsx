import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./uploadImage.css";

import Form from "react-bootstrap/Form";

import Axios from "axios";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagem", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Axios.post("/upload", formData, config)
      .then((response) => {
        alert("O arquivo foi enviado com sucesso");
      })
      .catch((error) => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.onFormSubmit}>
          <input
            type="file"
            id="imagem"
            name="imagem"
            className="csFileUploadButton"
            onChange={this.onChange}
          />
          <hr></hr>
          <Button variant="btn-block" className="csUploadButton" type="submit">
            Upload
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}
export default UploadImage;
