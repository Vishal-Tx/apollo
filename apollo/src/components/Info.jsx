import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Info = () => {
  const { search } = useParams();
  console.log("search", search);
  return (
    <div className="info">
      Info
      <Link to="/">Home</Link>
    </div>
  );
};

export default Info;
