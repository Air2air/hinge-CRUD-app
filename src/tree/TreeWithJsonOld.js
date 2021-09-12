import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
} from "reactstrap";
import "./index.css";
import axios from "axios";

const TreeWithJson = (props) => {
  /* --- Fetch ---*/
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trees, setTrees] = useState([]);

  /* --- Sort ---*/
  const [sortType, setSortType] = useState("key");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  /* --- Responsive ---*/
  const lineCol = 3;

  const getTrees = () => {
    setIsLoaded(false);
    axios.get("./../data/tree.json").then((response) => {
      const trees = response.data;
      setIsLoaded(true);
      setTrees(trees);
    });
  };
  useEffect(() => getTrees(), []);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        key: "key",
        name: "name",
        offset: "offset",
        line: "line",
      };
      const sortProperty = types[type];
      const sorted = [...trees].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setTrees([...sorted]);
    };
    sortArray(sortType);
    console.log(sortType)
    console.log(trees)
  }, [sortType]);

  if (error) {
    setError(true);
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Row>
          <Col>
            <h5>{props.heading}</h5>
          </Col>
          <Col className="text-right">
            <Dropdown
              size="sm"
              className="sort-button"
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle caret>Sort by</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  value="key"
                  onClick={(e) => setSortType(e.target.value)}
                >
                  Key
                </DropdownItem>
                <DropdownItem
                  value="name"
                  onClick={(e) => setSortType(e.target.value)}
                >
                  Name
                </DropdownItem>
                <DropdownItem
                  value="offset"
                  onClick={(e) => setSortType(e.target.value)}
                >
                  Offset
                </DropdownItem>
                <DropdownItem
                  value="line"
                  onClick={(e) => setSortType(e.target.value)}
                >
                  Line
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <div className="tree">
          <div className="tree-container" style={{ width: props.width }}>
            {trees.map((tree) => (
              <Row key={tree.name}>
                <Col xs={lineCol}>{tree.line}</Col>
                <Col xs={{ offset: tree.offset }}>{tree.name}</Col>
              </Row>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TreeWithJson;
