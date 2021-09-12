import React from "react";
import "./index.css";

const TreeOriginal = (props) => {
  return (
    <div>
      <h5>{props.heading}</h5>
      <div className="tree">
        root
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;ant <br />
        &nbsp;&nbsp;&nbsp;&nbsp;bear <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant{" "}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;frog <br />
      </div>
    </div>
  );
};

export default TreeOriginal;
