const getRequest = require('../util/getRequest');

const getGenres = async (req, res) => {

    const token = req.body.token;
    console.log(token);
    
    const url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'

    const response = await getRequest(url,token);
    return res.json(response);

}

module.exports = getGenres;