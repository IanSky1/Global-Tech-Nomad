import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./componets/Home";
import About from "./componets/About";
import Login from "./componets/Login";
import Header from "./componets/Header";
import SignUp from './componets/SignUp';
import Continents from "./componets/Continents";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: "/countries.trevorblades.com/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  return (
<ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<SignUp />} 
              />
              <Route
                path="/About"
                element={<About />}
              />
              <Route
                path="/Continents"
                element={<Continents />}
              />
              
            </Routes>
          </div>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
