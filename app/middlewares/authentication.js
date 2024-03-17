const { ErrorHandler } = require("../helpers/ErrorHandler");
const { decodeToken } = require("../helpers/tokenHandler");

const verifyToken = (req) => {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) throw new ErrorHandler('AUTHENTICATION_REQUIRED');

    const decodedToken = decodeToken(bearerHeader);
    if (!decodedToken) throw new ErrorHandler('TOKEN_INVALID');

    if (decodedToken === 'TOKEN_EXPIRED') throw new ErrorHandler('TOKEN_EXPIRED');

    return decodedToken;
}

exports.userAuth = async (req, res, next) => {
    try {
        const decodedToken = verifyToken(req);
        const user = decodedToken.user;

        // const user = await prisma.account.findUnique({
        //     where: { id: decodedToken.user.id }
        // });

        if (!user) throw new ErrorHandler('UNAUTHORIZED');
        req.user = user;
        req.iat = decodedToken.iat;
        next();
    } catch (error) {
        next(error);
    }
}