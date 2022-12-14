const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  
  authMiddleware: function ({ req }) {
  
    let token = req.body.token || req.query.token || req.headers.authorization;

        console.log(req.headers.authorization, 'req')
        
      
        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
          token = token
            .split(' ')
            .pop()
            .trim();
        }
      
        // if no token, return request object as is
        if (!token) {
          return req;
        }
        console.log(token, 'token')
        try {
          // decode and attach user data to request object
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          console.log('Invalid token');
        }

        console.log(req.user, 'req.user')
        // return updated request object
        return req;
    },

    signToken: function({username, email, _id}) {
        const payload = {username, email, _id};

        return jwt.sign({data: payload }, secret, { expiresIn: expiration});
    }

};
