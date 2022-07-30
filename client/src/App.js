import React from 'react';
import Home from './componets/Home';
import About from './componets/About'
import Login from './componets/Login';
import Header from './componets/Header';
import SignUp from './componets/SignUp';
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <Header />
      <ApolloProvider client={client}>
      <Router>
        <div>
          <div>
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

                <Route element={<About />} />


            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
    </div>

  );
}

export default App;
