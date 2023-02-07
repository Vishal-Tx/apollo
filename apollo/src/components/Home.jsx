import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const FETCH_ALL_COUNTRY_NAME = gql`
  {
    countries {
      code
      name
      emoji
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(FETCH_ALL_COUNTRY_NAME);
  console.log(data);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>List of Countries</h1>
          <Link to="/search">Search</Link>
          <ul>
            {data?.countries.map((country) => (
              <li key={country.code}>{country.name + country.emoji}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Home;
