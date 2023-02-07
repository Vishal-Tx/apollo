import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { Home, Info } from "./components";

const App = () => {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/search" exact element={<Info />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
