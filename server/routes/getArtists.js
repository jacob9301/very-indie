const getRequest = require('../util/getRequest');
const genres = require('../data/genres');
const RandomPageSelector = require('../util/RandomPageSelector.class');

const baseURL = 'https://api.spotify.com/v1/search?q=';

const filterArtists = (artists, max, min) => {

    const filteredArtists = [];

    for (let i = 0; i < artists.length; i++) {
        if (min <= artists[i].followers.total && artists[i].followers.total < max) {
            filteredArtists.push(artists[i]);
        }
    }

    return filteredArtists;

}

const findArtists = async (q, token, max, min) => {

    let filteredArtists = [];

    const RandomPage = new RandomPageSelector();

    while (filteredArtists < 10) {
        const offset = RandomPage.getRandomPage();
        if (offset === -1) {//no more unvisited pages
            break;
        }

        const url = baseURL + q + offset;

        const response = await getRequest(url, token);

        if (response.error) {
            return ({error: response.error});
        } else {
            //if (response.artists.items.length == 0) {//no results on page
                //RandomPage.setMax(offset);
            //} else {
            const merge = [...filteredArtists, ...filterArtists(response.artists.items, max, min)];
            filteredArtists = merge;
            //}
        }

    }

    return filteredArtists;

}

const getArtists = async (req, res) => {

    const token = req.token;

    const genreIndex = parseInt(req.body.genreIndex, 10);
    if (genreIndex < 0 || genreIndex >= genres.length) {
        return res.json({error: 'Invalid genre index'});
    }
    const genre = genres[genreIndex];

    const q = 'genre%20' + genre + '&type=artist&market=GB&limit=50&offset=';

    const max = parseInt(req.body.max, 10);
    const min = parseInt(req.body.min, 10);

    const filteredArtists = await findArtists(q, token, max, min);

    res.json(filteredArtists);

}

module.exports = getArtists;