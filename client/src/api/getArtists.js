import { apiPost } from "./fetchWrapper";

const route = '/getartists';

const getArtists = async (genreIndex, minFollowers, maxFollowers) => {

    const payload = {
        genreIndex: genreIndex,
        min: minFollowers,
        max: maxFollowers
    }

    const response = await apiPost(route, payload);

    if (response.error) {
        console.log('getArtists.js', response.error)
        return {error: response.error};
    } else {
        return response;
    }
}

export default getArtists;