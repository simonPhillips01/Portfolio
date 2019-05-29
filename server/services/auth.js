const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//Middleware
exports.checkJWT = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-ve4-ftcy.eu.auth0.com/.well-known/jwks.json',
    }),

    audience: 'Ynu5NNbuWT1rC11Hp9ASQa24X9lrHfPz',
    issuer: 'https://dev-ve4-ftcy.eu.auth0.com/',
    algorithms: ['RS256'],
});