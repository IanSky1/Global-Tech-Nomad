import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeMap from './componets/Home/index'
import About from "./componets/About";
import Login from "./componets/Login";
import Header from "./componets/Header";
import SignUp from './componets/SignUp';
import Continents from "./componets/Continents";
import './App.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  console.log(headers, 'headers')
  console.log(token)
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
                element={<HomeMap />} 
              />
              <Route 
                path="/Login" 
                element={<Login />} 
              />
              <Route 
                path="/Signup" 
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
