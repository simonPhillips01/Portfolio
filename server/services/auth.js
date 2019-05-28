//Middleware
exports.checkJWT = function(req, res, next) {
    const isValidToken = false;

    if(isValidToken) {
        next();
    } else {
        return res.status(401).send({title: 'Not authorised', detail: 'Please login in order to get the data'});
    }
}