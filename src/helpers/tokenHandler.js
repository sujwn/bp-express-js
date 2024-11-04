const jwt = require('jsonwebtoken');

module.exports.decodeToken = (bearerHeader) => {
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')[1];
        try {
            const decodedToken = jwt.verify(bearer, process.env.AUTH_SECRET);

            return decodedToken;
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return 'TOKEN_EXPIRED';
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}