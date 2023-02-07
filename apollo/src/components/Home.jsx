import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "../App.css";

const FETCH_ALL_COUNTRY_NAME = gql`
  {
    countries {
      code
      name
      emoji
      capital
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(FETCH_ALL_COUNTRY_NAME);
  console.log(data);
  return (
    <div className="home">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>List of Countries</h1>
          <Link to="/search">Search</Link>

          {data?.countries.map((country) => (
            <div className="country-item">
              <h2>
                {country.name} {country.emoji}
              </h2>
              <h4>{country.capital}</h4>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
