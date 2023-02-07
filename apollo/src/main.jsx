import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./index.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        country(code: "BR") {
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
    `,
  })
  .then((result) => console.log(result));
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
