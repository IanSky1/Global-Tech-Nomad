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
import './App.css';

const httpLink = createHttpLink({
  uri: "/graphql",
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
    <ApolloClient client={client}>
      <Header />
      <Home />
      <About />
      <Login />
    </ApolloClient>
  );
}

export default App;
