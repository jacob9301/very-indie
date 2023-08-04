const getAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === undefined) {
        return res.sendStatus(401);
    } else {
        req.token = token;
        next();
    }
}

module.exports = getAccessToken;