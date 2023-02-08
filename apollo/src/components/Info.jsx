import React from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "../App.css";

const FETCH_COUNTRY_DETAILS = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const Info = () => {
  const { search } = useParams();
  const { data, loading, error } = useQuery(FETCH_COUNTRY_DETAILS, {
    variables: { code: search },
  });
  console.log("error", error);
  console.log("loading", loading);

  // console.log("search", search);
  return (
    <div className="info">
      Info
      <Link to="/">Home</Link>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <div className="info-container">
        <h1>{data?.country.name}</h1>
      </div>
    </div>
  );
};

export default Info;
