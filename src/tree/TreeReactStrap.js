import React from "react";
import { Col, Row } from "reactstrap";
import "./index.css";

const TreeReactStrap = (props) => {
  return (
    <div>
      <h5>{props.heading}</h5>
      <div className="tree">
        <div className="tree-container" style={{ width: props.width }}>
          <Row>
            <Col>root</Col>
          </Row>
          <Row>
            <Col xs={{ offset: 3 }}>ant</Col>
          </Row>
          <Row>
            <Col xs={{ offset: 3 }}>bear</Col>
          </Row>
          <Row>
            <Col xs={{ offset: 5 }}>cat</Col>
          </Row>
          <Row>
            <Col xs={{ offset: 5 }}>dog</Col>
          </Row>
          <Row>
            <Col xs={{ offset: 7 }}>elephant</Col>
          </Row>
          <Row>
            <Col xs={{ offset: 3 }}>frog</Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default TreeReactStrap ;
