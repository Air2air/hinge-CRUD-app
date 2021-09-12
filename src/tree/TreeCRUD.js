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
  /* --- CRUD ---*/
  //const [list, updateList] = useState(trees);

  /* --- Responsive ---*/
  const lineCol = 3;

  /* --- Fetch ---*/
  const getTrees = () => {
    setIsLoaded(false);
    axios.get("./../data/tree.json").then((response) => {
      const trees = response.data;
      setIsLoaded(true);
      setTrees(trees);
    });
  };
  useEffect(() => getTrees(), []);

  /* --- Sort ---*/
  useEffect(() => {
    const sortArray = (sortBy) => {
      const types = {
        name: "name",
        offset: "offset",
        line: "line",
      };
      const sortProperty = types[sortBy];
      const sortedTrees = [...trees].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setTrees([...sortedTrees]);
    };
    sortArray(sortType);
    //console.log(sortType);
    //console.log(trees);
  }, [sortType]);

  const [treeValue, setTreeValue] = useState('');
  //const [trees, setTree] = useState([])

  const handleChange = e => {
    setTreeValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();    
    const tree = {
      value: treeValue,
      done: false
    }
    
    if(!treeValue) return;
    setTrees([...trees, tree]);
    document.getElementById('treeValue').value = ''
  }

  const handleDelete = e => {
    const { id } = e.target.parentElement;
    trees.splice(id, 1)
    setTrees([...trees]);
  }

  const handleDone = e => {
    const { id } = e.target.parentElement;
    trees[id].done = !trees[id].done
    setTrees([...trees])
  }

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
            {trees.map((tree, i) => (
              <Row key={tree.name} id={i}>
                <Col xs={lineCol}>{tree.line}</Col>
                <Col xs={{ offset: tree.offset }}>{tree.name}</Col>
                <Col xs={2} className="text-right">
                <button className="delete-tree" onClick={handleDelete} >x</button>   
                <form className="tree-form" onSubmit={handleSubmit}>
        <input type="text" id="treeValue" onChange={handleChange}/>
        <button type="submit">Add Tree</button>
      </form>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TreeWithJson;
