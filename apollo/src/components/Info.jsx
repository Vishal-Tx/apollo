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
      <div className="navbar">
        <h1>Info</h1>
      </div>
      <Link to="/" className="link-home">
        Home
      </Link>
      <div className="info-container">
        {loading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        {data && (
          <>
            <h1>
              {data?.country.name} {data?.country.emoji}
            </h1>
            <h2>Native: {data?.country.native}</h2>
            <h2>Capital: {data?.country.capital}</h2>

            <h2>Currency: {data?.country.currency}</h2>
            <ul>
              <h2>Languages:</h2>
              {data?.country.languages.map((language) => (
                <li className="lang-item" key={language.code}>
                  {language.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
