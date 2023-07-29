const getRequest = require('../util/getRequest');
const genres = require('../data/genres');
const RandomPageSelector = require('../util/RandomPageSelector.class');

const baseURL = 'https://api.spotify.com/v1/search?q=';

const filterArtists = (artists, maxFollowers) => {

    const filteredArtists = [];

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].followers.total <= maxFollowers) {
            filteredArtists.push(artists[i]);
        }
    }

    return filteredArtists;

}

const findArtists = async (baseURL, token, maxFollowers) => {

    let filteredArtists = [];

    const RandomPage = new RandomPageSelector();

    while (filteredArtists < 10) {
        const offset = RandomPage.getRandomPage();
        if (offset === -1) {//no more unvisited pages
            break;
        }

        const url = baseURL + offset;

        const response = await getRequest(url, token);

        if (response.error) {
            return ({error: response.error});
        } else {
            if (response.artists.items.length == 0) {//no results on page
                RandomPage.setMax(offset);
            } else {
            const merge = [...filteredArtists, ...filterArtists(response.artists.items, maxFollowers)];
            filteredArtists = merge;
            }
        }

    }

    return filteredArtists;

}

const getArtists = async (req, res) => {

    const token = req.body.token;

    const genreIndex = parseInt(req.body.genreIndex, 10);
    if (genreIndex < 0 || genreIndex >= genres.length) {
        return res.json({error: 'Invalid genre index'});
    }
    const genre = genres[genreIndex];

    const q = 'genre%20' + genre + '&type=artist&market=GB&limit=50&offset=';
    const url = baseURL + q;

    const maxFollowers = parseInt(req.body.max, 10);

    const filteredArtists = await findArtists(url, token, maxFollowers);

    res.json(filteredArtists);

}

module.exports = getArtists;