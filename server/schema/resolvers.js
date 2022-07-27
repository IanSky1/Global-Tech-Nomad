const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Job } = require('../models');

const resolvers = {
    Query: {

    },
    Mutation: {

    }
};

module.exports = resolvers;