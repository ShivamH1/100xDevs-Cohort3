const jwt = require("jsonwebtoken");
const secret = "jsiein";

function auth(req, res, next) {
    const token = req.headers.authorization;

    const respone = jwt.verify(token, secret);

    if (respone) {
        req.userId = token.userId;
        next();
    }else{
        res.status(403).json({
            msg : "Invalid creds"
        })
    }
}

module.exports = {
    auth,
    secret
}
