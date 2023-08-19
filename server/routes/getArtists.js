const getRequest = require('../util/getRequest');
const genres = require('../data/genres');
const RandomPageSelector = require('../util/RandomPageSelector.class');

const baseURL = 'https://api.spotify.com/v1/search?q=';

const filterArtists = (artists, filteredArtists, max, min) => {

    for (let i = 0; i < artists.length; i++) {
        let followers = artists[i].followers.total;
        if ((min <= followers) && (followers < max) && (filteredArtists[artists[i].id] === undefined)) {
            console.log(artists[i].name);
            filteredArtists[artists[i].id] = artists[i];
        }
    }

}

const findArtists = async (q, token, max, min) => {

    let filteredArtists = {};

    const RandomPage = new RandomPageSelector();

    while (Object.keys(filteredArtists).length < 10) {
        const index = RandomPage.getRandomPageIndex();
        
        
        if (index == -1) {//no more unvisited pages
            break;
        }

        const offset = RandomPage.pool[index];

        const url = baseURL + q + offset;
        console.log(url);

        const response = await getRequest(url, token);

        if (response.error) {
            return ({error: response.error});
        } else {
            if (response.artists.items.length == 0) {//no results on page
                RandomPage.setMax(offset);
                console.log('new max');
                continue;
            }
            console.log(offset);
            filterArtists(response.artists.items, filteredArtists, max, min);
            RandomPage.removePageAtIndex(index);
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