const getRequest = require('../util/getRequest');

const baseURL = 'https://api.spotify.com/v1/artists/';

const getPreview = async (req, res) => {

    const token = req.token;

    const artistId = req.body.artistId;

    const fullURL = baseURL + artistId + '/top-tracks?market=GB';

    const response = await getRequest(fullURL, token);

    return response.tracks ? response.tracks : [];
}

module.exports = getPreview;