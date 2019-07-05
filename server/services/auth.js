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

exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if(user && (user[process.env.NAMESPACE + '/role'] === role)) {
        next();
    } else {
        return res.status(401).send({title: 'Not Authorised', detail: 'You are not authorised to access this data'})
    }
}