const {User} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            console.log(context.user, 'context.user');
            console.log(args, 'args')
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            console.log(user, 'user')
            console.log(token, 'addusertoken')
            return {token, user}
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if (!user){
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            console.log(token, 'logintoken')
            return {token, user};

        }
    }
};

module.exports = resolvers;