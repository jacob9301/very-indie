const getRequest = require('../util/getRequest');

const baseURL = 'https://api.spotify.com/v1/artists/';

const getPreview = async (req, res) => {

    const token = req.token;

    const artistId = req.body.artistId;

    const fullURL = baseURL + artistId + '/top-tracks?market=GB';

    const response = await getRequest(fullURL, token);

    if (response.tracks && response.tracks[0]) {
        return res.json(response.tracks[0]);
    } else {
        return res.json({});
    }
}

module.exports = getPreview;