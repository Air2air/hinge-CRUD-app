import React from "react";
import { Col, Row } from "reactstrap";
import "./index.css";

const TreeWithLineNumbers = (props) => {
  const lineCol = 3;

  return (
    <div>
      <h5>{props.heading}</h5>
      <div className="tree">
        <div className="tree-container" style={{ width: props.width }}>
          <Row>
            <Col xs={lineCol}>1</Col>
            <Col>root</Col>
          </Row>
          <Row>
            <Col xs={lineCol}>1.1</Col>
            <Col xs={{ offset: 2 }}>ant</Col>
          </Row>
          <Row>
            <Col xs={lineCol}>1.2</Col>
            <Col xs={{ offset: 2 }}>bear</Col>
          </Row>
          <Row>
            <Col xs={lineCol}>1.2.1</Col>
            <Col xs={{ offset: 4 }}>cat</Col>
          </Row>
          <Row>
            <Col xs={lineCol}>1.2.2</Col>
            <Col xs={{ offset: 4 }}>dog</Col>
          </Row>
          <Row>
            <Col xs={lineCol}>1.2.2.1</Col>
            <Col xs={{ offset: 5 }}>elephant</Col>
          </Row>
          <Row>
            <Col xs={lineCol}>1.2.3</Col>
            <Col xs={{ offset: 2 }}>frog</Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TreeWithLineNumbers;
