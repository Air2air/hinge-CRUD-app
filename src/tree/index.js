import React from "react";
import "./index.css";
import TreeOriginal from "./TreeOriginal";
import TreeReactStrap from "./TreeReactStrap";
import TreeWithLineNumbers from "./TreeWithLineNumbers";
import TreeWithJson from "./TreeWithJson";
import TreeCRUD from "./TreeCRUD";

const Tree = () => {
  return (
    <div>
      <TreeOriginal heading="Original" />
      <TreeReactStrap heading="Reactstrap" width={220} />
      <TreeWithLineNumbers heading="Line Numbers" width={280} />
      <TreeWithJson heading="JSON and sort" width={280} />
      <TreeCRUD heading="CRUD & Sort" width={280} />
    </div>
  );
};

export default Tree;
