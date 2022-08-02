const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Auth {
  token: ID!
  user: User
}
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Job {
    _id: ID
    title: String
    description: String
    salary: Number
    email: string

  }

  type Query {
  me: User

  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;