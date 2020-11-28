import React, { useState, useEffect } from "react";
import { Crowdfunding } from "../../types/Crowdfunding";
import { propTypes } from "react-bootstrap/esm/Image";
import { Table } from "react-bootstrap";

export default (props: any) => {
  return (
    <React.Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descricao</th>
          </tr>
        </thead>
        <tbody>
          {props.crowdfundings &&
            props.crowdfundings.map((crowdfunding: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{crowdfunding.id}</td>
                  <td>{crowdfunding.descricao}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
